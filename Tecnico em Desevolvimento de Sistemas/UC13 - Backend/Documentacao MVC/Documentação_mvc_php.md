# **Assunto:** Model Eloquent — Mapeamento de classe PHP para tabela SQL

### O que é
Classe que estende `Model` do Laravel e representa uma tabela — o Eloquent ORM lê os atributos e relacionamentos declarados nela para gerar queries automaticamente.

### Pra que serve
Substitui SQL manual — você define a estrutura uma vez no Model e o Eloquent sabe fazer SELECT, INSERT, UPDATE, DELETE e JOIN.

### Fluxo
```
Classe Post extends Model
        ↓
Eloquent infere tabela 'posts' (snake_case plural do nome)
        ↓
$fillable define quais campos podem ser mass assigned
        ↓
Relacionamentos (belongsTo, hasMany) geram JOINs automáticos
```

### Exemplo
```php
<?php
// app/Models/Post.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Post extends Model
{
    protected $table = 'posts'; // opcional se seguir convenção

    protected $fillable = ['title', 'user_id'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
```

```php
<?php
// app/Models/User.php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Authenticatable
{
    protected $fillable = ['name', 'email', 'password'];

    protected $hidden = ['password', 'remember_token'];

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe | Melhoria |
|------------------|-----------|--------------|-------------|----------------|----------|
| `extends Model` | Herda toda a mágica do Eloquent | Métodos `find`, `create`, `save`... | Eloquent ORM | Sem extends, a classe é PHP puro sem ORM | — |
| `$table = 'posts'` | Define o nome da tabela explicitamente | Queries SQL geradas | Migration correspondente | Sem isso, Eloquent assume `posts` (snake plural) — aqui é redundante | Necessário quando o nome foge da convenção |
| `$fillable = [...]` | Lista campos permitidos em mass assignment | `Post::create([...])` | Controller/Request | Sem `$fillable`, `create()` e `fill()` lançam MassAssignmentException | Alternativa: `$guarded = []` (libera tudo — cuidado) |
| `$hidden = ['password']` | Exclui campos do JSON/array serializado | Response da API | `toArray()` / `toJson()` | Equivalente ao `select: false` do TypeORM | — |
| `belongsTo(User::class)` | Post pertence a um User (FK user_id) | Query com JOIN quando `->user` é acessado | User model | Relacionamento N:1 | — |
| `hasMany(Post::class)` | User tem muitos Posts | Coleção de Posts ao acessar `->posts` | Post model | Relacionamento 1:N | Usar `->with('posts')` para eager loading |

### 🧠 Por baixo

```
[antes]                         [durante]                              [depois]
──────────────────              ──────────────────────────             ──────────────────
Migration criou a tabela        Eloquent lê $fillable, $hidden         Model pronto pra queries
Model registrado no app         Relacionamentos registrados como       Métodos find/create/save
.env configurado com DB_*       métodos que retornam Builder           disponíveis na classe
```

---

# **Assunto:** Migration — Versionamento do schema do banco

### O que é
Arquivo PHP que descreve como criar ou modificar uma tabela no banco, de forma versionada e reversível.

### Pra que serve
Substitui o `synchronize: true` do TypeORM de forma segura — você controla exatamente o que muda no banco, com histórico e rollback.

### Fluxo
```
php artisan make:migration create_posts_table
        ↓
Arquivo gerado em database/migrations/
        ↓
Editar método up() (criar) e down() (reverter)
        ↓
php artisan migrate → executa up()
php artisan migrate:rollback → executa down()
```

### Exemplo
```php
<?php
// database/migrations/2024_01_01_000000_create_posts_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();                                    // PK auto-increment
            $table->string('title', 100);                   // VARCHAR(100) NOT NULL
            $table->foreignId('user_id')                    // FK para usuarios
                  ->constrained('usuarios')
                  ->onDelete('cascade');
            $table->timestamps();                            // created_at, updated_at
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
```

```php
<?php
// database/migrations/2024_01_01_000001_create_usuarios_table.php

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 100)->unique();
            $table->string('email', 150)->unique();
            $table->string('password', 255);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe | Melhoria |
|------------------|-----------|--------------|-------------|----------------|----------|
| `Schema::create('posts', ...)` | Cria a tabela no banco | DDL SQL | MySQL / PostgreSQL | Abstrai CREATE TABLE | — |
| `$table->id()` | PK BIGINT UNSIGNED AUTO_INCREMENT | Coluna `id` | Eloquent Model | Identificador único | Usar `$table->uuid()` pra APIs públicas |
| `$table->string('title', 100)` | VARCHAR(100) NOT NULL | Coluna `title` | Model $fillable | Define tipo e tamanho | `->nullable()` se campo opcional |
| `$table->foreignId('user_id')->constrained('usuarios')` | FK + índice + constraint | Coluna `user_id` | usuarios.id | Integridade referencial no banco | `->onDelete('cascade')` para deletar cascata |
| `$table->timestamps()` | Colunas `created_at` e `updated_at` | Gerenciadas pelo Eloquent | Model | Auditoria automática | — |
| `down(): Schema::dropIfExists(...)` | Reverte a migration | `migrate:rollback` | Estado anterior do banco | Permite voltar o schema | Sempre implementar down() |

### 🧠 Por baixo

```
[antes]                         [durante]                              [depois]
──────────────────              ──────────────────────────             ──────────────────
Arquivo de migration existe     php artisan migrate lê arquivos        Tabela criada no banco
Banco configurado no .env       não registrados em migrations table    Registro em migrations
                                Executa up() em ordem cronológica      php artisan migrate:status mostra
```

---

# **Assunto:** Controller — Camada HTTP com Request/Response do Laravel

### O que é
Classe que recebe requisições HTTP, valida dados via Form Request ou inline, chama o Service/Repository e retorna JSON.

### Pra que serve
Mesma ideia do Express Controller — separa lógica de transporte HTTP da lógica de negócio.

### Fluxo
```
Requisição HTTP bate na rota
        ↓
Controller recebe $request
        ↓
Valida, chama PostService
        ↓
return response()->json(...)
```

### Exemplo
```php
<?php
// app/Http/Controllers/PostController.php
namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Services\PostService;
use Illuminate\Http\JsonResponse;

class PostController extends Controller
{
    public function __construct(
        private readonly PostService $postService
    ) {}

    public function index(): JsonResponse
    {
        $posts = $this->postService->listAll();
        return response()->json($posts);
    }

    public function show(int $id): JsonResponse
    {
        $post = $this->postService->getById($id);
        return response()->json($post);
    }

    public function store(StorePostRequest $request): JsonResponse
    {
        $post = $this->postService->create($request->validated());
        return response()->json(['mensagem' => 'Post criado com sucesso!', 'post' => $post], 201);
    }

    public function destroy(int $id): JsonResponse
    {
        $this->postService->delete($id);
        return response()->json(['mensagem' => 'Post deletado com sucesso']);
    }

    public function update(StorePostRequest $request, int $id): JsonResponse
    {
        $post = $this->postService->update($id, $request->validated());
        return response()->json(['mensagem' => 'Atualizado com sucesso', 'post' => $post]);
    }
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe | Melhoria |
|------------------|-----------|--------------|-------------|----------------|----------|
| `__construct(private readonly PostService $postService)` | Injeta o Service via DI | Métodos do controller | Laravel IoC Container | Controller não instancia dependências manualmente | — |
| `StorePostRequest $request` | Form Request que já validou o body | `$request->validated()` | Camada de validação | Equivalente ao `validatePost` middleware do Express | — |
| `$request->validated()` | Retorna só os campos que passaram na validação | Service | Form Request | Garante que nenhum campo extra vaze | — |
| `response()->json($data, $status)` | Cria resposta JSON com status HTTP | Cliente HTTP | Laravel Response | Equivalente ao `res.status().json()` do Express | — |
| `private readonly PostService` | Readonly garante que não será reatribuído | — | PHP 8.1+ | Imutabilidade da dependência | — |

### 🧠 Por baixo

```
[antes]                         [durante]                              [depois]
──────────────────              ──────────────────────────             ──────────────────
Router despachou pra controller Form Request já validou body           response()->json() enviado
DI Container injetou Service    Controller chama Service limpo         ou exceção capturada pelo
                                Sem try/catch manual necessário        Handler global do Laravel
```

---

# **Assunto:** Form Request — Validação de input isolada em classe própria

### O que é
Classe que encapsula as regras de validação de um endpoint, substituindo o `validate()` inline no controller ou middleware manual.

### Pra que serve
Equivalente ao `validatePost.ts` + Zod schemas — centraliza validação e mensagens de erro fora do controller.

### Fluxo
```
Requisição chega na rota
        ↓
Laravel instancia o Form Request antes do controller
        ↓
authorize() checa permissão
        ↓
rules() define as regras
        ↓
Se falhar → 422 automático com errors[]
Se passar → controller recebe $request->validated()
```

### Exemplo
```php
<?php
// app/Http/Requests/StorePostRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // liberado pra todos (implementar auth depois)
    }

    public function rules(): array
    {
        return [
            'title'   => ['required', 'string', 'min:1', 'max:100'],
            'user_id' => ['required', 'integer', 'exists:usuarios,id'],
        ];
    }

    public function messages(): array
    {
        return [
            'title.required'   => 'O título é obrigatório.',
            'user_id.exists'   => 'Usuário não encontrado.',
        ];
    }
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe | Melhoria |
|------------------|-----------|--------------|-------------|----------------|----------|
| `authorize()` | Define se o usuário pode fazer essa request | 403 se `false` | Auth/Policies | Separa autorização da validação | Checar `$this->user()->can(...)` |
| `rules()` | Retorna array de regras de validação | Validador interno do Laravel | Campos do body | Centraliza regras fora do controller | — |
| `'exists:usuarios,id'` | Checa se o `user_id` existe na tabela `usuarios` | Erro de validação | Banco de dados | Garante integridade referencial na camada de app (igual ao Service do TS) | — |
| `messages()` | Mensagens de erro customizadas por regra | Resposta 422 `errors` | Cliente | Mensagens legíveis no lugar dos padrões genéricos | — |
| `$request->validated()` | Retorna só campos validados | Controller → Service | Form Request | Evita passar campos não validados pra frente | — |

### 🧠 Por baixo

```
[antes]                         [durante]                              [depois]
──────────────────              ──────────────────────────             ──────────────────
Request chegou no router        Laravel instancia Form Request         $request->validated() disponível
                                Roda authorize() → 403 se false        ou 422 com errors[] automático
                                Roda rules() → valida cada campo       Controller nem é chamado se falhar
```

---

# **Assunto:** Service — Lógica de negócio no Laravel

### O que é
Classe PHP pura (sem herança de framework) que contém as regras de negócio — valida existência de registros, orquestra repositories e lança exceções semânticas.

### Pra que serve
Mesma responsabilidade do `PostService.ts` — Controller fica burro (só HTTP), Repository fica burro (só SQL).

### Exemplo
```php
<?php
// app/Services/PostService.php
namespace App\Services;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PostService
{
    public function listAll(): array
    {
        return Post::with('user')->get()->toArray();
    }

    public function getById(int $id): Post
    {
        return Post::with('user')->findOrFail($id);
        // findOrFail lança ModelNotFoundException se não achar → Handler retorna 404
    }

    public function create(array $data): Post
    {
        User::findOrFail($data['user_id']); // valida se user existe
        return Post::create($data);
    }

    public function delete(int $id): void
    {
        $post = Post::findOrFail($id);
        $post->delete();
    }

    public function update(int $id, array $data): Post
    {
        $post = Post::findOrFail($id);
        $post->update($data);
        return $post->fresh(); // recarrega do banco com dados atualizados
    }
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe | Melhoria |
|------------------|-----------|--------------|-------------|----------------|----------|
| `Post::with('user')` | Eager loading do relacionamento | Query com JOIN | Post.user (belongsTo) | Evita N+1 queries | Sempre usar `with()` quando vai usar o relacionamento |
| `findOrFail($id)` | Busca por PK ou lança `ModelNotFoundException` | Exception Handler | Handler → 404 | Equivalente ao `throw new NotFoundError` do TS | — |
| `Post::create($data)` | Mass assignment + INSERT | Banco | $fillable do Model | Cria e persiste num passo | Validar $fillable no Model antes |
| `$post->update($data)` | UPDATE nos campos do array | Banco | $fillable | Equivalente ao `post.title = data.title; save()` | — |
| `$post->fresh()` | Recarrega o modelo do banco | Dado atualizado | Banco | Garante retornar o estado real após update | Alternativa: `$post->refresh()` |
| `User::findOrFail($data['user_id'])` | Valida existência do user antes de criar post | Exception se não achar | Integridade referencial | Mesma lógica do Service TS que checa user antes de criar post | Delegar para Form Request com `exists:` |

### 🧠 Por baixo

```
[antes]                         [durante]                              [depois]
──────────────────              ──────────────────────────             ──────────────────
Controller chamou com dados     Service faz findOrFail (valida)        Objeto retornado ao Controller
já validados pelo Form Request  Aplica regras de negócio               ou ModelNotFoundException
                                Chama Model para persistir             capturada pelo Handler → 404
```

---

# **Assunto:** Exception Handler — Tratamento global de erros no Laravel

### O que é
Classe (ou closure no `bootstrap/app.php`) que intercepta todas as exceções não tratadas e converte em respostas HTTP adequadas.

### Pra que serve
Equivalente ao `errorHandler` middleware do Express — centraliza a conversão de exceção → status HTTP.

### Fluxo
```
Exceção lançada em qualquer camada
        ↓
Laravel propaga até o Handler global
        ↓
Handler verifica tipo da exceção
        ↓
Retorna JSON com status correto
```

### Exemplo
```php
<?php
// bootstrap/app.php (Laravel 11) ou app/Exceptions/Handler.php (Laravel 10)
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

// Laravel 11 — no bootstrap/app.php:
->withExceptions(function (Exceptions $exceptions) {

    $exceptions->render(function (ModelNotFoundException $e) {
        return response()->json(['message' => 'Registro não encontrado.'], 404);
    });

    $exceptions->render(function (ValidationException $e) {
        return response()->json([
            'message' => 'Dados inválidos.',
            'errors'  => $e->errors(),
        ], 422);
    });

    $exceptions->render(function (\Illuminate\Database\QueryException $e) {
        if ($e->getCode() === '23000') { // unique constraint
            return response()->json(['message' => 'Registro duplicado.'], 409);
        }
    });

});
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe | Melhoria |
|------------------|-----------|--------------|-------------|----------------|----------|
| `ModelNotFoundException` | Captura `findOrFail()` sem resultado | `response()->json(404)` | findOrFail | Equivalente ao `NotFoundError` do TS | — |
| `ValidationException` | Captura falha de Form Request | `response()->json(422, errors)` | Form Request | Laravel lança automaticamente quando validação falha | — |
| `QueryException` com código `'23000'` | Captura unique constraint do MySQL | `response()->json(409)` | MySQL | Equivalente ao `ER_DUP_ENTRY` do Express errorHandler | Verificar `$e->errorInfo[1] === 1062` pra mais precisão |
| `$e->errors()` | Array de erros por campo | Body da response 422 | ValidationException | Retorna erros específicos por campo pro cliente | — |

### 🧠 Por baixo

```
[antes]                         [durante]                              [depois]
──────────────────              ──────────────────────────             ──────────────────
Exceção lançada no Service      Handler.render() checa instanceof      response()->json() com
ou no Model (findOrFail)        em ordem de registro                   status correto enviado
                                Primeiro match vence                   Sem try/catch nos controllers
```

---

# **Assunto:** Rotas — API Routes no Laravel

### O que é
Arquivo `routes/api.php` que registra endpoints REST mapeando método HTTP + URI para controller, com prefixo `/api` automático.

### Pra que serve
Equivalente ao `routes.ts` do Express — conecta URL a controller sem precisar de `.bind()` (Laravel resolve por string).

### Exemplo
```php
<?php
// routes/api.php
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

// Rotas de Usuários
Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);
Route::patch('/users/{id}', [UserController::class, 'update']);

// Rotas de Posts
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{id}', [PostController::class, 'show