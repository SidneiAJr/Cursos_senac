# 📚**Assunto:** TypeORM + Express — Usuario & Post

---

## **config/database.ts**

### O que é
Configuração central da conexão com o MySQL usando TypeORM e variáveis de ambiente.

### Pra que serve
Inicializar a conexão com o banco e registrar as entidades User e Post.

### Fluxo
```
dotenv.config() carrega o .env
        ↓
AppDataSource criado com as variáveis
        ↓
AppDataSource.initialize() conecta e sincroniza as tabelas
```

### Exemplo
```typescript
import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { User } from "../models/Usuario";
import { Post } from "../models/Post";

dotenv.config();
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User, Post],
});
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `reflect-metadata` | Habilita decorators em runtime | TypeORM internamente | `@Entity`, `@Column` | Sem ele os decorators não funcionam |
| `dotenv.config()` | Carrega `.env` para `process.env` | Variáveis de ambiente | Credenciais do banco | Evita hardcodar senha no código |
| `Number(DB_PORT)` | Converte string do `.env` para number | Configuração do DataSource | `port` do banco | `process.env` retorna tudo como string |
| `synchronize: true` | Cria/altera tabelas automaticamente | Banco de dados | Entidades | Dev only — em prod usar migrations |
| `logging: false` | Não exibe SQL no terminal | Console | Queries | Produção mais limpa |
| `entities: [User, Post]` | Registra as tabelas do projeto | TypeORM | Models | ORM precisa saber o que mapear |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
.env com credenciais  →    DataSource lê as vars    →    Conexão aberta
Entidades desconhecidas    registra User e Post           tabelas criadas/sincronizadas
```

---

## **models/Usuario.ts**

### O que é
Entidade que representa a tabela `Usuario` no banco de dados.

### Pra que serve
Mapear os campos do usuário e o relacionamento 1:N com Post.

### Fluxo
```
Classe User com @OneToMany
        ↓
TypeORM cria tabela Usuario com as colunas definidas
        ↓
JOIN disponível via relations: ['posts']
```

### Exemplo
```typescript
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity("Usuario")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100, unique: true, nullable: false })
    nome!: string;

    @Column({ length: 150, unique: true, nullable: false })
    email!: string;

    @Column({ length: 255, nullable: false, select: false })
    password!: string;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@Entity("Usuario")` | Mapeia classe para tabela `Usuario` | Banco de dados | DataSource | ORM precisa saber o nome da tabela |
| `unique: true` em `nome` | Impede nomes duplicados | Constraint no banco | Insert de usuário | Dois usuários não podem ter o mesmo nome |
| `unique: true` em `email` | Impede emails duplicados | Constraint no banco | `ER_DUP_ENTRY` no errorHandler | Email é identificador único |
| `select: false` em `password` | Exclui senha dos SELECTs padrão | Query TypeORM | `findByEmailWithPassword` | Senha nunca vaza por acidente |
| `@OneToMany(() => Post, ...)` | Lado inverso do relacionamento | JOIN via relations | `@ManyToOne` em Post | TypeORM monta o JOIN automaticamente |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Classe TypeScript     →    TypeORM lê decorators    →    Tabela Usuario no MySQL
com propriedades           em runtime                     com constraints de unique
```

---

## **models/Post.ts**

### O que é
Entidade que representa a tabela `posts` e seu relacionamento N:1 com Usuario.

### Pra que serve
Mapear os campos do post e a chave estrangeira para o usuário dono.

### Fluxo
```
Classe Post com @ManyToOne
        ↓
TypeORM cria coluna userId (FK) automaticamente
        ↓
JOIN disponível via relations: ['user']
```

### Exemplo
```typescript
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./Usuario";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 100, nullable: false })
    title!: string;

    @ManyToOne(() => User, (user) => user.posts)
    user!: User;
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@Entity('posts')` | Mapeia classe para tabela `posts` | Banco de dados | DataSource | ORM precisa saber o nome da tabela |
| `@ManyToOne(() => User, ...)` | Cria FK `userId` na tabela posts | Chave estrangeira | `User.posts` | Vários posts pertencem a um usuário |
| `user => user.posts` | Aponta a propriedade inversa em User | Metadados do TypeORM | `@OneToMany` em User | Completa os dois lados da relação |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Classe Post           →    TypeORM lê @ManyToOne    →    Coluna userId (FK)
sem FK explícita           e cria a FK                    criada na tabela posts
```

---

## **repositories/UsuarioRepository.ts**

### O que é
Camada de acesso a dados para a entidade User — abstrai as queries do TypeORM.

### Pra que serve
Centralizar todas as operações de banco para User, impedindo que Services falem direto com o ORM.

### Fluxo
```
Service chama UserRepository.metodo()
        ↓
Repository usa o repositório interno do TypeORM
        ↓
Retorna dados para o Service
```

### Exemplo
```typescript
import { AppDataSource } from "../config/database";
import { User } from "../models/Usuario";

const repository = AppDataSource.getRepository(User);

export const UserRepository = {
    async findAll() {
        return repository.find({ relations: ['posts'] });
    },
    async findById(id: number) {
        return repository.findOne({ where: { id }, relations: ['posts'] });
    },
    async findByEmailWithPassword(email: string) {
        return repository.createQueryBuilder('user')
            .addSelect('user.password')
            .where('user.email = :email', { email })
            .getOne();
    },
    create(data: Partial<User>) { return repository.create(data); },
    async save(user: User) { return repository.save(user); },
    async delete(id: number) { return repository.delete(id); },
};
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `getRepository(User)` | Pega o repositório padrão do TypeORM | `repository` interno | Entidade User | Acesso aos métodos find, save, delete |
| `find({ relations: ['posts'] })` | Busca usuários com JOIN em posts | Resultado com posts | `OneToMany` em User | Evita N+1 queries |
| `addSelect('user.password')` | Força retorno da senha (select: false) | Query SQL | Login/autenticação | Campo oculto por padrão — trazido só quando necessário |
| `repository.create(data)` | Cria instância em memória sem salvar | Objeto User | `repository.save()` | Permite manipular antes de persistir |
| `result.affected === 0` | Verifica se o delete achou algo | throw NotFoundError | errorHandler | Se não achou o registro lança erro |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Service pede dados    →    Repository monta a query →    Dado retornado
sem saber de SQL           via TypeORM                    para o Service
```

---

## **repositories/PostRepository.ts**

### O que é
Camada de acesso a dados para a entidade Post.

### Pra que serve
Centralizar as operações de banco para Post, espelhando o padrão do UserRepository.

### Exemplo
```typescript
import { AppDataSource } from "../config/database";
import { Post } from "../models/Post";

const repository = AppDataSource.getRepository(Post);

export const PostRepository = {
    async findAll() { return repository.find({ relations: ['user'] }); },
    async findById(id: number) {
        return repository.findOne({ where: { id }, relations: ['user'] });
    },
    create(data: Partial<Post>) { return repository.create(data); },
    async save(post: Post) { return repository.save(post); },
    async delete(id: number) { return repository.delete(id); },
};
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `find({ relations: ['user'] })` | Busca posts com dados do dono | Resultado com user | `ManyToOne` em Post | Evita busca manual do usuário |
| `repository.create(data)` | Cria instância em memória | Objeto Post | `repository.save()` | Permite passar entidade User no campo user |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Service pede post     →    Repository faz find      →    Post com user embutido
com dono                   com JOIN em user               retornado
```

---

## **services/UserService.ts**

### O que é
Camada de regra de negócio para usuários.

### Pra que serve
Hash de senha, remoção de senha da resposta, lançamento de erros semânticos — tudo que não pertence ao Controller nem ao Repository.

### Fluxo
```
Controller chama UserService.metodo()
        ↓
Service aplica regras de negócio
        ↓
Chama UserRepository e retorna dado tratado
```

### Exemplo
```typescript
import bcrypt from 'bcrypt';
import { UserRepository } from '../repositories/UsuarioRepository';
import { User } from '../models/Usuario';

export class NotFoundError extends Error {}

export const UserService = {
    async create(data: { nome: string; email: string; password: string }) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = UserRepository.create({ nome: data.nome, email: data.email, password: hashedPassword });
        const savedUser = await UserRepository.save(user);
        return omitPassword(savedUser);
    },
    async delete(id: number) {
        const result = await UserRepository.delete(id);
        if (result.affected === 0) throw new NotFoundError('Usuário não encontrado.');
    },
};

function omitPassword(user: User) {
    const { password, ...rest } = user;
    return rest;
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `NotFoundError extends Error` | Erro semântico de "não encontrado" | `errorHandler` | Controller via throw | Permite errorHandler identificar o tipo |
| `bcrypt.hash(data.password, 10)` | Gera hash da senha | Campo password do User | UserRepository.save | Nunca salvar senha em texto puro |
| `omitPassword(savedUser)` | Remove senha do objeto retornado | Controller | Resposta ao cliente | Senha nunca sai do Service |
| `result.affected === 0` | Verifica se o delete achou algo | throw NotFoundError | errorHandler | Se não achou o registro lança erro |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Dados brutos do body  →    Service aplica regras    →    Dado limpo e seguro
senha em texto puro        hash, omitPassword             sem senha para o Controller
```

---

## **services/PostService.ts**

### O que é
Camada de regra de negócio para posts.

### Pra que serve
Validar se o usuário dono do post existe antes de criar — regra que não pertence ao Controller nem ao Repository.

### Exemplo
```typescript
import { PostRepository } from '../repositories/PostRepository';
import { UserRepository } from '../repositories/UsuarioRepository';
import { NotFoundError } from '../services/UserService';

export const PostService = {
    async create(data: { title: string; userId: number }) {
        const user = await UserRepository.findById(data.userId);
        if (!user) throw new NotFoundError('Usuário não encontrado.');
        const post = PostRepository.create({ title: data.title, user });
        return PostRepository.save(post);
    },
};
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `UserRepository.findById(data.userId)` | Verifica se o dono existe | User ou null | NotFoundError | Post não pode existir sem dono |
| `PostRepository.create({ title, user })` | Cria post com o objeto User | Instância Post | `ManyToOne` | TypeORM usa o objeto para gerar a FK |
| `result.affected === 0` no delete | Verifica se o delete achou algo | throw NotFoundError | errorHandler | Post não encontrado vira 404 |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
title + userId        →    Service valida userId    →    Post salvo com FK
do body                    busca o User real              userId correta no banco
```

---

## **middlewares/asyncHandler.ts**

### O que é
Wrapper que captura erros de controllers async e passa para o `errorHandler`.

### Pra que serve
Eliminar try/catch repetido em todo controller.

### Fluxo
```
Route chama asyncHandler(controller.metodo)
        ↓
asyncHandler envolve a chamada em Promise.resolve()
        ↓
Se rejeitar → chama next(error) → errorHandler trata
```

### Exemplo
```typescript
import { Request, Response, NextFunction, RequestHandler } from 'express';

export function asyncHandler(fn: RequestHandler) {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `Promise.resolve(fn(...))` | Garante que qualquer retorno vira Promise | `.catch(next)` | Controller async | Funciona com funções sync e async |
| `.catch(next)` | Passa o erro para o próximo middleware | `errorHandler` | `next(error)` | Express só chama errorHandler se receber erro via next |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Controller async      →    asyncHandler envolve      →    Erro vai pro errorHandler
sem try/catch              em Promise.resolve()            sem travar o servidor
```

---

## **middlewares/errorHandler.ts**

### O que é
Middleware centralizado de tratamento de erros da aplicação.

### Pra que serve
Padronizar todas as respostas de erro sem repetir lógica nos controllers.

### Fluxo
```
next(error) chamado em qualquer ponto
        ↓
Express detecta 4 parâmetros → chama errorHandler
        ↓
errorHandler identifica o tipo e responde com status correto
```

### Exemplo
```typescript
import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../services/UserService';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof NotFoundError)
        return res.status(404).json({ message: err.message });
    if (err.code === 'ER_DUP_ENTRY')
        return res.status(409).json({ message: 'Registro duplicado.' });
    return res.status(500).json({ message: 'Erro interno no servidor.' });
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `4 parâmetros (err, req, res, next)` | Identifica como middleware de erro | Express internamente | `next(error)` | Express só o chama quando há erro |
| `err instanceof NotFoundError` | Identifica erro de negócio | `res.status(404)` | `NotFoundError` do Service | Resposta semântica sem vazar detalhes |
| `err.code === 'ER_DUP_ENTRY'` | Detecta violação de unique no MySQL | `res.status(409)` | `unique: true` nos models | Email duplicado vira 409, não 500 |
| `res.status(500)` | Fallback para erros não mapeados | Cliente | Qualquer outro erro | Nunca deixar o Express sem resposta |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Erro jogado pelo      →    errorHandler identifica  →    Resposta JSON
Service ou TypeORM         o tipo via instanceof          com status correto
```

---

## **middlewares/validateUser.ts e validatePost.ts**

### O que é
Middlewares de validação de entrada que bloqueiam a requisição antes de chegar ao Controller.

### Pra que serve
Garantir campos obrigatórios antes de qualquer lógica de negócio.

### Fluxo
```
Requisição chega na rota
        ↓
validate verifica campos obrigatórios
        ↓
Inválido → res.status(400) — Controller nunca executa
Válido   → next() — Controller executa normalmente
```

### Exemplo
```typescript
import { Request, Response, NextFunction } from 'express';

export function validateUser(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return res.status(400).json({ message: 'name, email e password são obrigatórios.' });
    if (password.length < 6)
        return res.status(400).json({ message: 'Senha deve ter pelo menos 6 caracteres.' });
    next();
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `!name \|\| !email \|\| !password` | Checa campos obrigatórios | `res.status(400)` | Body da requisição | Falha rápida — não processa dados inválidos |
| `password.length < 6` | Valida tamanho mínimo da senha | `res.status(400)` | Regra de negócio | Senha fraca rejeitada na entrada |
| `next()` | Libera para o Controller | Controller | `asyncHandler` | Só chamado se tudo estiver válido |

### ⚠️ Atenção
```
❌ validateUser usa 'name' mas o model e o Service usam 'nome'
   → por que quebra: campos não batem — o create vai receber undefined no nome

✅ Padronizar para 'nome' em todos os arquivos
   → validateUser, UsuarioController e UserService precisam usar o mesmo campo
```

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Body da requisição    →    Middleware valida campos →    400 ou next()
sem validação              antes do Controller            Controller só recebe dado válido
```

---

## **schemas/postSchema.ts**

### O que é
Schemas Zod para validação e tipagem dos dados de entrada do Post.

### Pra que serve
Validar estrutura e tipos dos dados antes de processar — com mensagens de erro claras e tipos TypeScript inferidos automaticamente.

### Fluxo
```
Body da requisição chega
        ↓
schema.parse(body) valida estrutura e tipos
        ↓
Inválido → ZodError com mensagem clara
Válido   → objeto tipado pronto para uso
```

### Exemplo
```typescript
import { z } from 'zod';

export const createPostScheme = z.object({
    title: z.string().min(1, "Título precisa conter mínimo 1 caractere"),
    userId: z.number().int().positive("ID do usuário é obrigatório"),
});

export const updatePostScheme = createPostScheme.partial();

export type CreatePostInput = z.infer<typeof createPostScheme>;
export type UpdatePostInput = z.infer<typeof updatePostScheme>;
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `z.string().min(1, ...)` | Valida string com tamanho mínimo | ZodError ou valor | Controller/Middleware | Impede título vazio |
| `z.number().int().positive()` | Valida número inteiro positivo | ZodError ou valor | userId no banco | ID não pode ser decimal nem negativo |
| `.partial()` | Torna todos os campos opcionais | Schema de update | PUT /posts/:id | No update nenhum campo é obrigatório |
| `z.infer<typeof schema>` | Infere tipo TypeScript do schema | Tipagem do projeto | Services e Controllers | Schema e tipo sempre sincronizados |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Body sem tipagem      →    Zod valida cada campo    →    Objeto tipado
qualquer coisa pode        com regras definidas           pronto para uso seguro
chegar                     no schema
```

---

## **controllers/UsuarioController.ts e PostController.ts**

### O que é
Camada que recebe a requisição HTTP, chama o Service e devolve a resposta JSON.

### Pra que serve
Traduzir HTTP para chamadas de Service — sem regra de negócio, sem acesso direto ao banco.

### Fluxo
```
Requisição HTTP chega (via routes)
        ↓
Controller extrai params/body
        ↓
Chama Service → recebe resultado → res.json()
        ↓
Erros capturados no próprio try/catch → res.status(4xx/5xx)
```

### Exemplo
```typescript
import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UsuarioController {
    async create(req: Request, res: Response) {
        try {
            const { nome, email, password } = req.body;
            const user = await UserService.create({ nome, email, password });
            return res.status(201).json(user);
        } catch (error: any) {
            if (error.message === 'Email já cadastrado.')
                return res.status(409).json({ message: error.message });
            return res.status(500).json({ message: error.message });
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await UserService.delete(id);
            return res.status(204).send();
        } catch (error: any) {
            if (error.message === 'Usuário não encontrado.')
                return res.status(404).json({ message: error.message });
            return res.status(500).json({ message: error.message });
        }
    }
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `Number(req.params.id)` | Converte string da URL para number | Service | `findById(id)` | params sempre chegam como string |
| `res.status(201).json(user)` | Responde com Created + dados | Cliente | POST bem-sucedido | 201 = recurso criado, diferente de 200 |
| `res.status(204).send()` | Responde sem corpo | Cliente | DELETE bem-sucedido | 204 = sucesso sem conteúdo |
| `try/catch` manual | Captura erros inline no controller | res.status(4xx/5xx) | Service errors | Esse projeto não usa asyncHandler no controller |

### ⚠️ Atenção
```
❌ try/catch repetido em cada método do controller
   → por que quebra: código duplicado — se mudar a lógica de erro precisa alterar em vários lugares

✅ Usar asyncHandler + errorHandler centralizado (como no projeto anterior)
   → por que funciona: um lugar só trata todos os erros da aplicação
```

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
req.body / req.params →    Controller chama Service →    res.json() para o cliente
dados brutos do HTTP       sem lógica de negócio          ou res.status(4xx) no catch
```

---

## **routes/index.ts**

### O que é
Arquivo central de definição de rotas da aplicação.

### Pra que serve
Mapear cada endpoint HTTP para seu middleware de validação e método de controller.

### Fluxo
```
Requisição HTTP entra
        ↓
Router encontra a rota correspondente
        ↓
Executa: [validate?] → asyncHandler(controller.metodo)
```

### Exemplo
```typescript
import { Router } from 'express';
import { UsuarioController } from '../controllers/UsuarioController';
import { validateUser } from '../middlewares/validateUser';
import { asyncHandler } from '../middlewares/asyncHandler';

const routes = Router();
const userController = new UsuarioController();

routes.get('/users', asyncHandler(userController.list.bind(userController)));
routes.post('/users', validateUser, asyncHandler(userController.create.bind(userController)));
routes.delete('/users/:id', asyncHandler(userController.delete.bind(userController)));

export default routes;
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `validateUser` antes do controller | Valida antes de processar | `next()` ou `400` | `validateUser.ts` | Falha rápida sem chegar no Service |
| `asyncHandler(controller.metodo)` | Envolve o método para capturar erros | `errorHandler` | `asyncHandler.ts` | Controller async sem try/catch manual |
| `.bind(userController)` | Preserva o `this` da instância | Método do controller | Classe UsuarioController | Sem bind o `this` seria undefined |
| `:id` na rota | Parâmetro dinâmico da URL | `req.params.id` | Controller | GET /users/1 → req.params.id = "1" |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Requisição HTTP       →    Router executa a cadeia  →    Controller processa
sem destino                validate → asyncHandler        ou middleware rejeita
```

---

## **server.ts**

### O que é
Entry point da aplicação — inicializa o banco e sobe o servidor Express.

### Pra que serve
Garantir que o banco esteja conectado antes de começar a receber requisições.

### Fluxo
```
AppDataSource.initialize() conecta ao banco
        ↓
.then() → registra routes → app.listen()
        ↓
.catch() → loga o erro e não sobe o servidor
```

### Exemplo
```typescript
import express from 'express';
import * as dotenv from 'dotenv';
import { AppDataSource } from './config/database';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        console.log("Banco conectado | Banco Criado");
        app.listen(PORT, () => console.log(`Servidor Rodando http://localhost:${PORT}`));
    })
    .catch(console.error);
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `AppDataSource.initialize()` | Abre conexão + sincroniza tabelas | `.then()` ou `.catch()` | `database.ts` | Servidor não sobe se banco falhar |
| `app.use(express.json())` | Habilita parsing de JSON no body | `req.body` | Controllers | Sem isso req.body é undefined |
| `process.env.PORT \|\| 3000` | Porta configurável via env | `app.listen()` | `.env` | Flexibilidade entre ambientes |
| `.catch(console.error)` | Loga erro sem subir o servidor | Console | Falha de conexão | Servidor não sobe com banco quebrado |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Banco desconectado    →    initialize() conecta     →    Servidor ouvindo
App sem rotas              .then() registra tudo         pronto para requisições
```

---

## **.env**

### O que é
Arquivo de variáveis de ambiente com credenciais e configurações sensíveis.

### Exemplo
```properties
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_NAME=meubanco
PORT=3000
JWT_Secret=p7vt7nqONYAjJSxflo5ujA980qp3WcBf3j346a77A64=
```

### 🔍 Tabela mastigada

| Variável | O que é | Conecta com | Observação |
|----------|---------|-------------|------------|
| `DB_HOST` | Endereço do banco | `database.ts` | localhost em dev |
| `DB_PORT` | Porta do MySQL | `database.ts` | Padrão MySQL: 3306 |
| `DB_USER` | Usuário do banco | `database.ts` | root em dev — criar usuário específico em prod |
| `DB_PASSWORD` | Senha do banco | `database.ts` | Nunca commitar em prod |
| `DB_NAME` | Nome do banco | `database.ts` | Banco precisa existir antes |
| `PORT` | Porta do servidor Express | `server.ts` | 3000 em dev |
| `JWT_Secret` | Chave para assinar tokens JWT | Middleware de auth | Rotacionar periodicamente em prod |

### ⚠️ Atenção
```
❌ Commitar o .env no repositório
   → por que quebra: expõe credenciais e JWT_Secret publicamente

✅ Adicionar .env no .gitignore e manter apenas .env.example no repo
   → por que funciona: cada ambiente tem suas próprias credenciais
```

---

## **tsconfig.json**

### O que é
Configuração do compilador TypeScript do projeto.

### Exemplo
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strictPropertyInitialization": false
  }
}
```

### 🔍 Tabela mastigada

| Opção | O que faz | Conecta com | Pra que existe |
|-------|-----------|-------------|----------------|
| `experimentalDecorators: true` | Habilita uso de decorators | `@Entity`, `@Column` | TypeORM não funciona sem isso |
| `emitDecoratorMetadata: true` | Emite metadados dos decorators | `reflect-metadata` | TypeORM lê os tipos via metadados |
| `strictPropertyInitialization: false` | Permite propriedades sem inicialização | Models com `!` | Entidades TypeORM não inicializam no constructor |
| `module: "NodeNext"` | Sistema de módulos moderno do Node | Imports/Exports | ESM nativo no Node |
| `outDir: "./dist"` | Pasta de saída do build | `npm run build` | Código compilado separado do source |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
TypeScript com        →    tsc compila com as       →    JavaScript em /dist
decorators e tipos         opções do tsconfig             pronto para produção
```

---

## 🔗 Fluxo completo da aplicação

```
Cliente HTTP
        ↓
server.ts (Express + porta 3000)
        ↓
routes/index.ts (encontra a rota)
        ↓
[validateUser/validatePost] → 400 se inválido
        ↓
asyncHandler(controller.metodo)
        ↓
Controller (extrai body/params, chama Service)
        ↓
Service (regras de negócio: hash, omitPassword, NotFoundError)
        ↓
Repository (getRepository(User | Post))
        ↓
AppDataSource → MySQL
        ↓
Tabelas: Usuario ←→ posts (FK userId)
        ↓
Resultado sobe a cadeia → res.json() para o cliente
        ↓
Qualquer erro → catch no controller → res.status(4xx/5xx)
```

| Camada | Responsabilidade | Fala com |
|--------|-----------------|----------|
| `server.ts` | Inicialização e configuração | Express, AppDataSource |
| `routes` | Mapeamento de endpoints | Controllers, Middlewares |
| `middlewares` | Validação, captura de erro, async wrap | Controllers, errorHandler |
| `controllers` | HTTP → Service → HTTP | Services |
| `services` | Regras de negócio | Repositories |
| `repositories` | Acesso ao banco | TypeORM, Entidades |
| `models` | Definição das tabelas | TypeORM, banco |
| `config/database.ts` | Conexão com o banco | Models, TypeORM |
