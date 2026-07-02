# 📚**Assunto:** TypeORM + Express MVC — Documentação Completa

---

## **data-source.ts**

### O que é
Configuração central da conexão com o banco de dados usando TypeORM.

### Pra que serve
Inicializar a conexão com o MySQL e registrar as entidades para que o TypeORM saiba quais tabelas gerenciar.

### Fluxo
```
.env carregado pelo dotenv
        ↓
AppDataSource criado com as variáveis
        ↓
AppDataSource.initialize() abre a conexão e sincroniza as tabelas
```

### Exemplo
```typescript
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../models/User';
import { Post } from '../models/Post';

dotenv.config();
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: DB_HOST,
    port: Number(DB_PORT || '3306'),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: [User, Post],
});
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `reflect-metadata` | Habilita decorators em runtime | TypeORM internamente | `@Entity`, `@Column` | Sem ele os decorators não funcionam |
| `DataSource` | Objeto de configuração do banco | `AppDataSource.initialize()` | Todas as entidades | Centraliza a conexão |
| `synchronize: true` | Cria/altera tabelas automaticamente | Banco de dados | Entidades | Dev only — em prod use `false` |
| `logging: true` | Exibe SQL no terminal | Console | Queries executadas | Debug de queries |
| `entities: [User, Post]` | Registra quais classes são tabelas | TypeORM | Models | ORM precisa saber o que mapear |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
.env com credenciais  →    DataSource lê as vars    →    Conexão aberta
TypeORM sem entidades      registra User e Post          tabelas criadas/sincronizadas
```

---

## **models/User.ts**

### O que é
Entidade que representa a tabela `users` no banco de dados.

### Pra que serve
Mapear os campos da tabela e os relacionamentos com outras entidades via decorators do TypeORM.

### Fluxo
```
Classe User com decorators
        ↓
TypeORM lê os decorators em runtime (via reflect-metadata)
        ↓
Gera/sincroniza a tabela "users" com as colunas definidas
```

### Exemplo
```typescript
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from './Post';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @OneToMany(() => Post, post => post.user)
    posts: Post[];
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@Entity('users')` | Mapeia a classe para a tabela `users` | Banco de dados | DataSource | ORM precisa saber o nome da tabela |
| `@PrimaryGeneratedColumn()` | Chave primária com auto-incremento | Coluna `id` no banco | Todas as relações | Identificador único de cada registro |
| `@Column({ unique: true })` | Campo com restrição de unicidade | Banco de dados | Validação de email | Impede emails duplicados |
| `@Column({ select: false })` | Campo excluído dos SELECTs padrão | Query do TypeORM | `findByEmailWithPassword` | Senha nunca vaza por acidente |
| `@OneToMany(() => Post, ...)` | Define relação 1:N com Post | Join automático | `PostRepository` | TypeORM monta o JOIN automaticamente |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Classe TypeScript     →    TypeORM lê os decorators →    Tabela `users` no MySQL
com propriedades           em runtime                     com colunas e constraints
```

---

## **models/Post.ts**

### O que é
Entidade que representa a tabela `posts` e seu relacionamento N:1 com User.

### Pra que serve
Mapear os campos do post e a chave estrangeira para o usuário dono do post.

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
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: false })
    title: string;

    @ManyToOne(() => User, user => user.posts)
    user: User;
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@ManyToOne(() => User, ...)` | Define relação N:1 com User | Coluna `userId` no banco | `User.posts` | TypeORM cria a FK automaticamente |
| `user => user.posts` | Aponta a propriedade inversa em User | Metadados do TypeORM | `@OneToMany` em User | Completa os dois lados da relação |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Classe Post           →    TypeORM lê @ManyToOne    →    Coluna userId (FK)
sem FK explícita           e cria a FK                    criada na tabela posts
```

---

## **repositories/UserRepository.ts**

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
import { AppDataSource } from '../config/data-source';
import { User } from '../models/User';

const repository = AppDataSource.getRepository(User);

export const UserRepository = {
    async findAll() {
        return repository.find({ relations: ['posts'] });
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
| `getRepository(User)` | Pega o repositório padrão do TypeORM | `repository` interno | Entidade User | Acesso aos métodos find, save, delete |
| `find({ relations: ['posts'] })` | Busca usuários com JOIN em posts | Resultado com posts | `OneToMany` em User | Evita N+1 queries |
| `addSelect('user.password')` | Força o retorno da senha (select: false) | Query SQL | Login/autenticação | Campo oculto por padrão — trazido só quando necessário |
| `repository.save(user)` | Insert ou Update automático | Banco de dados | Entidade User | TypeORM decide se insere ou atualiza pelo id |

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
import { AppDataSource } from '../config/data-source';
import { Post } from '../models/Post';

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
| `repository.create(data)` | Cria instância em memória (sem salvar) | Objeto Post | `repository.save()` | Permite manipular antes de persistir |

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
Camada de regra de negócio para usuários — fica entre Controller e Repository.

### Pra que serve
Centralizar lógica de negócio: hash de senha, remoção de senha da resposta, lançamento de erros semânticos.

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
import { UserRepository } from '../repositories/UserRepository';

export class NotFoundError extends Error {}

export const UserService = {
    async create(data: { name: string; email: string; password: string }) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = UserRepository.create({ ...data, password: hashedPassword });
        const saved = await UserRepository.save(user);
        return omitPassword(saved);
    },
    async delete(id: number) {
        const result = await UserRepository.delete(id);
        if (result.affected === 0) throw new NotFoundError('Usuário não encontrado.');
    },
};

function omitPassword(user: any) {
    const { password, ...rest } = user;
    return rest;
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `NotFoundError extends Error` | Erro semântico de "não encontrado" | `errorHandler` | Controller via throw | Permite errorHandler identificar o tipo de erro |
| `bcrypt.hash(data.password, 10)` | Gera hash da senha | Campo password do User | UserRepository.save | Nunca salvar senha em texto puro |
| `omitPassword(saved)` | Remove senha do objeto retornado | Controller | Resposta ao cliente | Senha nunca sai do Service |
| `result.affected === 0` | Verifica se o delete afetou alguma linha | throw NotFoundError | errorHandler | Se não achou o registro lança erro |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Dados brutos do body  →    Service aplica regras    →    Dado limpo e seguro
senha em texto puro        hash, omitPassword             sem senha, para o Controller
```

---

## **services/PostService.ts**

### O que é
Camada de regra de negócio para posts.

### Pra que serve
Validar se o usuário dono do post existe antes de criar — regra de negócio que não pertence ao Controller nem ao Repository.

### Exemplo
```typescript
import { PostRepository } from '../repositories/PostRepository';
import { UserRepository } from '../repositories/UserRepository';
import { NotFoundError } from './UserService';

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
| `PostRepository.create({ title, user })` | Cria post já com o objeto User | Instância Post | `ManyToOne` | TypeORM usa o objeto para gerar a FK |

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
Evitar try/catch em todo controller — um wrapper centraliza a captura de erros assíncronos.

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
Padronizar todas as respostas de erro em um único lugar, sem repetir lógica nos controllers.

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
| `4 parâmetros (err, req, res, next)` | Identifica o middleware como tratador de erro | Express internamente | `next(error)` | Express só o chama quando há erro |
| `err instanceof NotFoundError` | Identifica erro de negócio | `res.status(404)` | `NotFoundError` do Service | Resposta semântica sem vazar detalhes internos |
| `err.code === 'ER_DUP_ENTRY'` | Detecta violação de unique no MySQL | `res.status(409)` | `@Column({ unique: true })` | Email duplicado vira 409, não 500 |
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
Garantir que os campos obrigatórios existam e sejam válidos antes de qualquer lógica de negócio.

### Fluxo
```
Requisição chega na rota
        ↓
validateUser verifica campos obrigatórios
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
| `if (!name \|\| !email \|\| !password)` | Checa campos obrigatórios | `res.status(400)` | Body da requisição | Falha rápida — não processa dados inválidos |
| `password.length < 6` | Valida tamanho mínimo da senha | `res.status(400)` | Regra de negócio | Senha fraca rejeitada na entrada |
| `next()` | Libera para o Controller | Controller | `asyncHandler` | Só chamado se tudo estiver válido |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Body da requisição    →    Middleware valida campos →    400 ou next()
sem validação              antes do Controller            Controller só recebe dado válido
```

---

## **controllers/UserController.ts e PostController.ts**

### O que é
Camada que recebe a requisição HTTP, chama o Service e devolve a resposta JSON.

### Pra que serve
Traduzir HTTP para chamadas de Service — sem regra de negócio, sem acesso direto ao banco.

### Fluxo
```
Requisição HTTP chega (via routes.ts)
        ↓
Controller extrai params/body
        ↓
Chama Service → recebe resultado → res.json()
```

### Exemplo
```typescript
import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    async list(req: Request, res: Response) {
        const users = await UserService.listAll();
        return res.json(users);
    }
    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const user = await UserService.create({ name, email, password });
        return res.status(201).json(user);
    }
    async delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        await UserService.delete(id);
        return res.status(204).send();
    }
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `Number(req.params.id)` | Converte string da URL para number | Service | `findById(id)` | params sempre chegam como string |
| `res.status(201).json(user)` | Responde com Created + dados | Cliente | POST bem-sucedido | 201 = recurso criado, diferente de 200 |
| `res.status(204).send()` | Responde sem corpo | Cliente | DELETE bem-sucedido | 204 = sucesso sem conteúdo para retornar |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
req.body / req.params →    Controller chama Service →    res.json() ou res.status()
dados brutos do HTTP       sem lógica de negócio          resposta HTTP para o cliente
```

---

## **routes/index.ts**

### O que é
Arquivo central de definição de rotas da aplicação.

### Pra que serve
Mapear cada endpoint HTTP para seu middleware de validação e método de controller correspondente.

### Fluxo
```
Requisição HTTP entra
        ↓
Router encontra a rota correspondente
        ↓
Executa: [validateMiddleware?] → asyncHandler(controller.metodo)
```

### Exemplo
```typescript
import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { validateUser } from '../middlewares/validateUser';
import { asyncHandler } from '../middlewares/asyncHandler';

const routes = Router();
const userController = new UserController();

routes.post('/users', validateUser, asyncHandler(userController.create.bind(userController)));
routes.delete('/users/:id', asyncHandler(userController.delete.bind(userController)));

export default routes;
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `validateUser` antes do controller | Valida antes de processar | `next()` ou `400` | `validateUser.ts` | Falha rápida sem chegar no Service |
| `asyncHandler(controller.metodo)` | Envolve o método para capturar erros | `errorHandler` | `asyncHandler.ts` | Controller async sem try/catch manual |
| `.bind(userController)` | Preserva o `this` da instância | Método do controller | Classe UserController | Sem bind o `this` seria undefined |

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
Garantir que o banco esteja conectado e as tabelas sincronizadas antes de começar a receber requisições.

### Fluxo
```
AppDataSource.initialize() conecta ao banco
        ↓
.then() → registra routes e errorHandler → app.listen()
        ↓
.catch() → loga o erro e não sobe o servidor
```

### Exemplo
```typescript
import 'reflect-metadata';
import express from 'express';
import router from './routes';
import { AppDataSource } from './config/data-source';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        app.use(router);
        app.use(errorHandler);
        app.listen(3000, () => console.log('Servidor na porta 3000'));
    })
    .catch(err => console.error('Erro ao conectar:', err));
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `AppDataSource.initialize()` | Abre conexão + sincroniza tabelas | `.then()` ou `.catch()` | `data-source.ts` | Servidor não sobe se banco falhar |
| `app.use(express.json())` | Habilita parsing de JSON no body | `req.body` | Controllers | Sem isso req.body é undefined |
| `app.use(errorHandler)` por último | Garante que erros de qualquer rota caiam aqui | errorHandler | `asyncHandler` via next | Express só reconhece como error handler se vier por último |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Banco desconectado    →    initialize() conecta     →    Servidor ouvindo
App sem rotas              .then() registra tudo         pronto para requisições
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
Service (regra de negócio, hash, omitPassword)
        ↓
Repository (query TypeORM)
        ↓
AppDataSource → MySQL
        ↓
Resultado sobe a cadeia
        ↓
Controller → res.json() para o cliente
        ↓
Qualquer erro → next(error) → errorHandler → res.status(4xx/5xx)
```

| Camada | Responsabilidade | Fala com |
|--------|-----------------|----------|
| `server.ts` | Inicialização e configuração | Express, AppDataSource |
| `routes` | Mapeamento de endpoints | Controller, Middlewares |
| `middlewares` | Validação, captura de erro, async wrap | Controller, errorHandler |
| `controllers` | HTTP → Service → HTTP | Service |
| `services` | Regras de negócio | Repository |
| `repositories` | Acesso ao banco | TypeORM, Entidades |
| `models` | Definição das tabelas | TypeORM, banco |
| `data-source` | Conexão com o banco | Models, TypeORM |
