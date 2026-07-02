# **Assunto:** TypeORM + Express — Usuario & Post (versão atualizada)

---

## **middlewares/asyncHandler.ts**

### O que é
Wrapper que captura erros de controllers async e passa para o `errorHandler` via `next`.

### Pra que serve
Eliminar try/catch repetido em todo controller — um wrapper centraliza a captura de erros assíncronos.

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
| `.catch(next)` | Passa o erro para o próximo middleware | `errorHandler` | `next(error)` | Express só chama errorHandler via next |

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
Middleware centralizado de tratamento de erros com identificação por tipo.

### Pra que serve
Padronizar respostas de erro sem repetir lógica nos controllers — um lugar só trata tudo.

### Fluxo
```
next(error) chamado em qualquer ponto
        ↓
Express detecta 4 parâmetros → chama errorHandler
        ↓
Identifica o tipo → responde com status correto
```

### Exemplo
```typescript
import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../services/UserService';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    console.error('Erro capturado pelo errorHandler:', err);

    if (err instanceof NotFoundError)
        return res.status(404).json({ message: err.message });

    if (err.code === 'ER_DUP_ENTRY')
        return res.status(409).json({ message: 'Registro duplicado (email já existente).' });

    return res.status(500).json({ message: 'Erro interno no servidor.' });
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `4 parâmetros (err, req, res, next)` | Identifica como middleware de erro | Express internamente | `next(error)` | Express só o chama quando há erro |
| `err instanceof NotFoundError` | Identifica erro de negócio | `res.status(404)` | `NotFoundError` do Service | Resposta semântica sem vazar detalhes |
| `err.code === 'ER_DUP_ENTRY'` | Detecta violação de unique no MySQL | `res.status(409)` | `unique: true` nos models | Email duplicado vira 409 não 500 |
| `res.status(500)` | Fallback para erros não mapeados | Cliente | Qualquer outro erro | Nunca deixar o Express sem resposta |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Erro jogado pelo      →    errorHandler identifica  →    Resposta JSON
Service ou TypeORM         o tipo via instanceof          com status correto
```

---

## **middlewares/validateUser.ts**

### O que é
Middleware de validação de entrada que bloqueia a requisição antes do Controller se os dados forem inválidos.

### Pra que serve
Garantir campos obrigatórios e regras básicas antes de qualquer lógica de negócio — falha rápida e barata.

### Fluxo
```
Requisição POST /users chega
        ↓
validateUser checa nome, email, password e tamanho da senha
        ↓
Inválido → res.status(400) — Controller nunca executa
Válido   → next() — Controller executa normalmente
```

### Exemplo
```typescript
import { Request, Response, NextFunction } from 'express';

export function validateUser(req: Request, res: Response, next: NextFunction) {
    const { nome, email, password } = req.body;

    if (!nome || !email || !password)
        return res.status(400).json({
            message: 'Os campos nome, email e password são obrigatórios.',
        });

    if (password.length < 8)
        return res.status(400).json({
            message: 'A senha deve ter pelo menos 8 caracteres.',
        });

    next();
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `!nome \|\| !email \|\| !password` | Checa campos obrigatórios | `res.status(400)` | Body da requisição | Falha rápida sem processar dados inválidos |
| `password.length < 8` | Valida tamanho mínimo da senha | `res.status(400)` | Regra de negócio | Aqui é 8 — alinhado com o bcrypt com 14 rounds |
| `next()` | Libera para o Controller | Controller | `asyncHandler` | Só chamado se tudo estiver válido |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Body da requisição    →    Middleware valida campos →    400 ou next()
sem validação              antes do Controller            Controller só recebe dado válido
```

---

## **middlewares/validatePost.ts**

### O que é
Middleware de validação de entrada para criação de posts.

### Pra que serve
Garantir que `title` e `userId` existam antes de chegar no Controller.

### Exemplo
```typescript
import { Request, Response, NextFunction } from 'express';

export function validatePost(req: Request, res: Response, next: NextFunction) {
    const { title, userId } = req.body;

    if (!title || !userId)
        return res.status(400).json({
            message: 'Os campos title e userId são obrigatórios.',
        });

    next();
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `!title \|\| !userId` | Checa campos obrigatórios do post | `res.status(400)` | Body da requisição | Post sem título ou sem dono é inválido |
| `next()` | Libera para o Controller | Controller | `asyncHandler` | Só chamado se tudo estiver válido |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Body sem title/userId →    Middleware rejeita        →    400 ou next()
                           antes do Controller            Controller só recebe dado válido
```

---

## **models/Usuario.ts**

### O que é
Entidade que representa a tabela `Usuario` com relacionamento 1:N com Post.

### Pra que serve
Mapear os campos do usuário e disponibilizar o acesso aos posts via JOIN automático do TypeORM.

### Fluxo
```
Classe User com decorators TypeORM
        ↓
TypeORM cria tabela Usuario com as colunas e constraints
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
| `unique: true` em `nome` e `email` | Impede duplicatas | Constraint no banco | `ER_DUP_ENTRY` no errorHandler | Dois usuários não podem ter mesmo nome/email |
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
Entidade que representa a tabela `posts` com FK para Usuario.

### Pra que serve
Mapear os campos do post e a chave estrangeira para o usuário dono.

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
| `user => user.posts` | Aponta a propriedade inversa em User | Metadados TypeORM | `@OneToMany` em User | Completa os dois lados da relação |

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
Camada de acesso a dados para User — abstrai as queries do TypeORM com método `create` integrado.

### Pra que serve
Centralizar operações de banco para User, com `create` já salvando diretamente.

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
import { User } from "../models/Usuario";
import { AppDataSource } from "../config/database";

const repository = AppDataSource.getRepository(User);

export const UserRepository = {
    async findAll() {
        return repository.find({ relations: ['posts'] });
    },
    async findById(id: number) {
        return repository.findOne({ where: { id }, relations: ['posts'] });
    },
    async create(data: { nome: string; email: string; password: string }) {
        const user = repository.create(data);
        return repository.save(user);
    },
    async findByEmailWithPassword(email: string) {
        return repository
            .createQueryBuilder('user')
            .addSelect('user.password')
            .where('user.email = :email', { email })
            .getOne();
    },
    async save(user: User) { return repository.save(user); },
    async delete(id: number) { return repository.delete(id); },
};
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `find({ relations: ['posts'] })` | Busca usuários com JOIN em posts | Resultado com posts | `OneToMany` em User | Evita N+1 queries |
| `create(data)` integrado com `save` | Cria e salva em uma chamada só | User salvo | UserService.create | Simplifica — não precisa de dois passos |
| `addSelect('user.password')` | Força retorno da senha (select: false) | Query SQL | Login futuro | Campo oculto por padrão — trazido só quando necessário |

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
Camada de acesso a dados para Post com `create` integrado ao `save`.

### Pra que serve
Centralizar operações de banco para Post, com criação e persistência em uma chamada.

### Exemplo
```typescript
import { Post } from "../models/Post";
import { AppDataSource } from "../config/database";

const repository = AppDataSource.getRepository(Post);

export const PostRepository = {
    async findAll() {
        return repository.find({ relations: ['user'] });
    },
    async findById(id: number) {
        return repository.findOne({ where: { id }, relations: ['user'] });
    },
    async create(data: Post) {
        const post = repository.create(data);
        return repository.save(post);
    },
    async save(post: Post) { return repository.save(post); },
    async delete(id: number) { return repository.delete(id); },
};
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `find({ relations: ['user'] })` | Busca posts com dados do dono | Resultado com user | `ManyToOne` em Post | Evita busca manual do usuário |
| `create(data: Post)` | Recebe entidade Post completa | `repository.save()` | PostService | Aceita o objeto User já resolvido |
| `repository.create(data)` + `save` | Cria instância e persiste em um método | Post salvo | PostService.create | Centraliza os dois passos no repository |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Service passa Post    →    Repository cria e salva  →    Post com id retornado
com user já resolvido      em uma chamada só              para o Service
```

---

## **services/UserService.ts**

### O que é
Camada de regra de negócio para usuários com hash de senha via bcrypt e remoção de senha via utilitário.

### Pra que serve
Centralizar lógica de negócio — hash de senha, verificação de existência, omissão da senha na resposta.

### Fluxo
```
Controller chama UserService.metodo()
        ↓
Service aplica regras: valida, hasheia senha, verifica existência
        ↓
Chama UserRepository e retorna dado sem senha
```

### Exemplo
```typescript
import { UserRepository } from "../repositories/UsuarioRepository";
import bcrypt from 'bcrypt';
import { omitPassword } from "../utils/omitPassword";

export class NotFoundError extends Error {}

export const UserService = {
    async ListAll() {
        return UserRepository.findAll();
    },

    async getByID(id: number) {
        const user = await UserRepository.findById(id);
        if (!user) throw new NotFoundError("Usuario Não Encontrado!");
        return user;
    },

    async create(data: { nome: string; email: string; password: string }) {
        const hashedPassword = await bcrypt.hash(data.password, 14);
        const user = await UserRepository.create({
            nome: data.nome,
            email: data.email,
            password: hashedPassword,
        });
        return omitPassword(user);
    },
};
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `NotFoundError extends Error` | Erro semântico de "não encontrado" | `errorHandler` | Controller via throw | Permite errorHandler identificar o tipo |
| `bcrypt.hash(data.password, 14)` | Gera hash da senha com custo 14 | Campo password | UserRepository.create | 14 rounds = mais seguro que 10, mais lento |
| `omitPassword(user)` | Remove senha do objeto retornado | Controller | `utils/omitPassword` | Senha nunca sai do Service |
| `UserRepository.create()` | Já cria e salva em uma chamada | User com id | Repository integrado | Repository desta versão integra create+save |

### ⚠️ Atenção
```
❌ bcrypt com 14 rounds em produção de alto tráfego
   → por que quebra: 14 rounds é pesado — cada hash leva ~1-2s
     em requisições simultâneas pode travar o event loop do Node

✅ Usar 10-12 rounds para APIs com muitas requisições
   → 12 é o padrão recomendado para maioria dos casos
```

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Dados brutos do body  →    Service hasheia senha     →    User sem senha
password em texto puro     e chama o repository           retornado ao Controller
```

---

## **schemas/postSchema.ts**

### O que é
Schemas Zod para validação e tipagem dos dados de entrada do Post.

### Pra que serve
Validar estrutura e tipos com mensagens claras — e inferir tipos TypeScript automaticamente do schema.

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

## **config/database.ts**

### O que é
Configuração central da conexão com o MySQL usando TypeORM e variáveis de ambiente.

### Pra que serve
Inicializar a conexão com o banco e registrar as entidades User e Post.

### Exemplo
```typescript
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../models/Usuario";
import { Post } from "../models/Post";
import * as dotenv from 'dotenv';

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
| `synchronize: true` | Cria/altera tabelas automaticamente | Banco de dados | Entidades | Dev only — em prod usar migrations |
| `logging: false` | Não exibe SQL no terminal | Console | Queries | Produção mais limpa |
| `entities: [User, Post]` | Registra as tabelas do projeto | TypeORM | Models | ORM precisa saber o que mapear |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
.env com credenciais  →    DataSource lê as vars    →    Conexão aberta
Entidades desconhecidas    registra User e Post           tabelas sincronizadas
```

---

## 🔗 Fluxo completo da aplicação

```
Cliente HTTP
        ↓
server.ts (Express)
        ↓
routes → [validate middleware] → asyncHandler(controller.metodo)
        ↓
Controller (extrai body/params, chama Service)
        ↓
Service (hash bcrypt 14, NotFoundError, omitPassword)
        ↓
Repository (create+save integrado, TypeORM)
        ↓
AppDataSource → MySQL
        ↓
Tabelas: Usuario ←→ posts (FK userId)
        ↓
Resultado sobe → res.json() para o cliente
        ↓
Qualquer erro → next(error) → errorHandler → res.status(4xx/5xx)
```

| Camada | Responsabilidade | Fala com |
|--------|-----------------|----------|
| `config/database.ts` | Conexão com o banco | TypeORM, Models |
| `models/Usuario` | Tabela Usuario + 1:N com Post | TypeORM |
| `models/Post` | Tabela posts + N:1 com Usuario | TypeORM |
| `repositories` | Acesso ao banco com create+save integrado | TypeORM, Models |
| `services/UserService` | Hash, validação, omitPassword, NotFoundError | Repository |
| `middlewares/validate*` | Validação de entrada antes do Controller | Body da requisição |
| `middlewares/asyncHandler` | Captura erros async sem try/catch | errorHandler |
| `middlewares/errorHandler` | Tratamento centralizado de erros | AppError, Express |
| `schemas/postSchema` | Validação e tipagem via Zod | Controllers/Services |
