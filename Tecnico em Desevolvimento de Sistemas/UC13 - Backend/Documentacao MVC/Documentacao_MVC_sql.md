# **Assunto:** Express + MySQL2 Pool — Users CRUD

---

## **config/conexao.ts**

### O que é
Pool de conexões com o MySQL usando mysql2/promise — sem ORM, query SQL direta.

### Pra que serve
Centralizar e reutilizar conexões com o banco, evitando abrir e fechar uma conexão a cada query.

### Fluxo
```
mysql.createPool() cria um pool de conexões
        ↓
pool exportado para os Repositories
        ↓
Cada query pega uma conexão do pool, executa e devolve automaticamente
```

### Exemplo
```typescript
import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'careca_db'
})
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `mysql2/promise` | Driver MySQL com suporte a async/await | Pool de conexões | Queries no Repository | Sem ele não tem como conectar ao MySQL |
| `createPool()` | Cria um conjunto de conexões reutilizáveis | `pool` exportado | UserRepository | Mais eficiente que abrir conexão por query |
| `database: 'careca_db'` | Define qual banco usar | Conexão MySQL | Tabela `users` | Sem isso as queries não sabem em qual banco rodar |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Sem conexão           →    createPool() abre N       →    pool disponível
banco inacessível          conexões em standby            para qualquer query
                           com o MySQL                     no projeto
```

---

## **models/User.ts**

### O que é
Classe que representa um usuário com encapsulamento via getters e setters — sem decorator de ORM.

### Pra que serve
Garantir que os dados do usuário só sejam acessados e modificados de forma controlada, tipando o que trafega entre Repository e Service.

### Fluxo
```
Repository recebe linha do banco (UserRow)
        ↓
Instancia new User(id, nome, email, senha)
        ↓
Service e Controller acessam via getters
```

### Exemplo
```typescript
export class User {
    private id?: number
    private nome: string
    private email: string
    private senha: string

    constructor(id: number | undefined, nome: string, email: string, senha: string) {
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    public getId(): number | undefined { return this.id }
    public setId(id: number): void { this.id = id }
    public getNome(): string { return this.nome }
    public getEmail(): string { return this.email }
    public getSenha(): string { return this.senha }
    public setSenha(senha: string): void { this.senha = senha }
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `private id?: number` | Campo opcional — undefined antes do INSERT | `getId()` | Repository.create | Antes de salvar o id não existe |
| `private nome/email/senha` | Encapsula os dados do usuário | Getters/Setters | Service e Repository | Impede acesso direto às propriedades |
| `constructor(id, nome, email, senha)` | Inicializa o objeto com todos os campos | Instância User | Repository.findAll / findById | Facilita mapear linha do banco para objeto |
| `getId() / getNome() / getEmail()` | Lê os valores encapsulados | Repository queries | SQL parametrizado | Acesso controlado sem expor o campo direto |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Linha bruta do banco  →    new User(row.id, ...)    →    Objeto tipado
{ id, nome, email... }     mapeia cada campo              com getters seguros
                           para propriedade privada        pronto para o Service
```

---

## **errors/error-handler.ts**

### O que é
Classe de erro customizado com statusCode HTTP embutido.

### Pra que serve
Lançar erros de negócio com o status HTTP correto sem precisar tratar no controller — o errorMiddleware resolve.

### Fluxo
```
Service detecta problema de negócio
        ↓
throw new AppError("mensagem", statusCode)
        ↓
errorMiddleware captura e responde com o status correto
```

### Exemplo
```typescript
export class AppError extends Error {
    statusCode: number

    constructor(message: string, statusCode: number) {
        super(message)
        this.statusCode = statusCode
    }
}

// Uso no Service:
throw new AppError("Usuário já existe!", 409)
throw new AppError("Todos os campos são obrigatórios!", 400)
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `extends Error` | Herda comportamento de erro nativo | Stack trace, instanceof | errorMiddleware | `instanceof AppError` funciona no middleware |
| `super(message)` | Passa a mensagem para o Error base | `err.message` | errorMiddleware | Preserva a mensagem de erro no objeto |
| `statusCode: number` | Carrega o HTTP status junto com o erro | `err.statusCode` | errorMiddleware | Middleware sabe qual status responder |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Service detecta erro  →    throw new AppError()      →    errorMiddleware
de negócio                 sobe o call stack              captura e responde
                           até o middleware                com status correto
```

---

## **middlewares/error-middleware.ts**

### O que é
Middleware centralizado de tratamento de erros da aplicação.

### Pra que serve
Padronizar todas as respostas de erro sem repetir try/catch nos controllers.

### Fluxo
```
Erro lançado em qualquer camada (Service, Repository)
        ↓
Express detecta 4 parâmetros → chama errorMiddleware
        ↓
Se AppError → responde com statusCode do erro
Se outro    → responde com 500
```

### Exemplo
```typescript
import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/error-handler"

export function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    console.log(err)
    if (err instanceof AppError)
        return res.status(err.statusCode).json({ mensagem: err.message })
    return res.status(500).json({ mensagem: "Erro Interno do servidor" })
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `4 parâmetros (err, req, res, next)` | Identifica como middleware de erro | Express internamente | `next(error)` ou throw | Express só o chama quando há erro |
| `err instanceof AppError` | Identifica erro de negócio | `res.status(err.statusCode)` | `AppError` do Service | Resposta semântica com status correto |
| `res.status(500)` | Fallback para erros não mapeados | Cliente | Qualquer outro erro | Nunca deixar o Express sem resposta |

### ⚠️ Atenção
```
❌ app.use(errorMiddleware) antes das rotas no server.ts
   → por que quebra: Express só chama o errorMiddleware se as rotas
     estiverem registradas antes — ordem importa

✅ app.use(errorMiddleware) depois de app.use('/api', routes)
   → por que funciona: erros das rotas sobem e chegam ao middleware
```

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Erro lançado no       →    Express passa para       →    Resposta JSON
Service ou Repository      errorMiddleware (4 params)     com status correto
                           que identifica o tipo          para o cliente
```

---

## **repositories/UserRepository.ts**

### O que é
Camada de acesso a dados com queries SQL diretas via mysql2 — sem ORM.

### Pra que serve
Centralizar todas as operações de banco para User, isolando o SQL do resto da aplicação.

### Fluxo
```
Service chama UserRepository.metodo()
        ↓
Repository executa query SQL via pool
        ↓
Mapeia resultado (UserRow) para objeto User
        ↓
Retorna User para o Service
```

### Exemplo
```typescript
import { ResultSetHeader, RowDataPacket } from "mysql2"
import { pool } from "../config/conexao"
import { User } from "../models/User"

interface UserRow extends RowDataPacket {
    id: number
    nome: string
    email: string
    senha: string
}

export class UserRepository {
    async findAll(): Promise<User[]> {
        const [rows] = await pool.query<UserRow[]>('SELECT * FROM users')
        return rows.map(user => new User(user.id, user.nome, user.email, user.senha))
    }

    async findByEmail(email: string): Promise<User | null> {
        const [result] = await pool.query<UserRow[]>('SELECT * FROM users WHERE email = ?', [email])
        if (result.length === 0) return null
        return new User(result[0].id, result[0].nome, result[0].email, result[0].senha)
    }

    async create(user: User): Promise<User> {
        const [result] = await pool.query<ResultSetHeader>(
            'INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)',
            [user.getNome(), user.getEmail(), user.getSenha()]
        )
        return new User(result.insertId, user.getNome(), user.getEmail(), user.getSenha())
    }

    async delete(id: number): Promise<Boolean> {
        const [result] = await pool.query<ResultSetHeader>('DELETE FROM users WHERE id = ?', [id])
        return result.affectedRows > 0
    }
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `interface UserRow extends RowDataPacket` | Tipagem da linha retornada pelo MySQL | `pool.query<UserRow[]>` | Propriedades do resultado | mysql2 não sabe o shape dos dados sem isso |
| `pool.query<UserRow[]>('SELECT...')` | Executa query e retorna array tipado | `[rows]` desestruturado | Tabela `users` | Array de linhas tipadas como UserRow |
| `pool.query<ResultSetHeader>('INSERT...')` | Executa INSERT e retorna metadata | `result.insertId` | ID gerado pelo banco | ResultSetHeader tem insertId e affectedRows |
| `result.insertId` | ID gerado pelo MySQL no INSERT | `new User(result.insertId, ...)` | Objeto retornado ao Service | Retorna o usuário com o ID real do banco |
| `rows.map(user => new User(...))` | Transforma cada linha em objeto User | Array de User | Service | Repository sempre retorna objetos, nunca linhas brutas |
| `result.affectedRows > 0` | Verifica se o DELETE achou algo | `Boolean` retornado | Service | false = ID não existia no banco |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Service pede dados    →    pool pega uma conexão     →    Objeto User
sem saber de SQL           executa o SQL                  retornado ao Service
                           devolve a conexão ao pool      sem expor o SQL
```

---

## **services/UserService.ts**

### O que é
Camada de regra de negócio para usuários — validação, verificação de duplicidade e orquestração.

### Pra que serve
Centralizar lógica de negócio entre Controller e Repository, lançando erros semânticos via AppError.

### Fluxo
```
Controller chama UserService.metodo()
        ↓
Service valida os dados e aplica regras de negócio
        ↓
Chama UserRepository e retorna resultado
```

### Exemplo
```typescript
import { AppError } from "../errors/error-handler"
import { User } from "../models/User"
import { UserRepository } from "../repositories/UserRepository"

export class UserService {
    private readonly repository = new UserRepository()

    async getAllUser() {
        return this.repository.findAll()
    }

    async registerUser(nome: string, email: string, senha: string) {
        if (!nome || !email || !senha)
            throw new AppError("Todos os campos são obrigatórios!", 400)

        const userAlreadyExists = await this.repository.findByEmail(email)

        if (userAlreadyExists)
            throw new AppError("Usuário já existe!", 409)

        const user = new User(undefined, nome, email, senha)
        return this.repository.create(user)
    }
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `if (!nome \|\| !email \|\| !senha)` | Valida campos obrigatórios | `throw AppError(400)` | errorMiddleware | Falha rápida antes de qualquer query |
| `findByEmail(email)` | Checa se email já existe | User ou null | `throw AppError(409)` | Impede duplicidade antes do INSERT |
| `new User(undefined, nome, email, senha)` | Cria instância sem id | Repository.create | INSERT no banco | id só existe após o banco gerar |
| `import { error } from "console"` | Import sem uso | — | — | ⚠️ Import órfão — pode remover |

### ⚠️ Atenção
```
❌ Senha salva em texto puro no banco
   → por que quebra: qualquer vazamento do banco expõe todas as senhas

✅ Hashear a senha com bcrypt antes de criar o User
   const hashedSenha = await bcrypt.hash(senha, 10)
   const user = new User(undefined, nome, email, hashedSenha)
```

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Dados brutos do body  →    Service valida e aplica  →    User criado
nome, email, senha         regras de negócio              retornado ao Controller
sem verificação            antes de chamar o repo         ou AppError lançado
```

---

## **controllers/UserController.ts**

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
Erros sobem automaticamente → errorMiddleware trata
```

### Exemplo
```typescript
import { Request, Response } from "express"
import { UserService } from "../services/UserService"

export class UserController {
    private readonly service: UserService

    constructor() {
        this.service = new UserService()
    }

    async getAll(req: Request, res: Response): Promise<Response> {
        const users = await this.service.getAllUser()
        return res.status(200).json(users)
    }

    async register(req: Request, res: Response): Promise<Response> {
        const { nome, email, senha } = req.body
        const user = await this.service.registerUser(nome, email, senha)
        return res.status(200).json({ mensagem: "Usuario criado com sucesso", user })
    }
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `private readonly service: UserService` | Injeta o Service no controller | Métodos do controller | UserService | Encapsula o service e impede reatribuição |
| `constructor()` | Instancia o service | `this.service` | UserService | Controller cria sua própria dependência |
| `Promise<Response>` | Tipo de retorno dos métodos | TypeScript | Compilação | Garante que sempre retorna uma Response |
| `res.status(200).json(users)` | Responde com lista de usuários | Cliente | GET /api/users | 200 = OK com corpo |
| `{ mensagem, user }` na criação | Resposta com mensagem + dados | Cliente | POST /api/users | Informa o resultado e retorna o objeto criado |

### ⚠️ Atenção
```
❌ Sem try/catch no controller e sem asyncHandler nas rotas
   → por que quebra: erros assíncronos não chegam ao errorMiddleware
     automaticamente — o servidor pode travar sem resposta

✅ Usar asyncHandler nas rotas ou adicionar try/catch com next(err)
   routes.post('/users', asyncHandler(controller.register.bind(controller)))
```

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
req.body com dados    →    Controller chama Service →    res.json() para o cliente
nome, email, senha         sem lógica de negócio          ou erro sobe para
                                                           o errorMiddleware
```

---

## **routes/UserRoutes.ts**

### O que é
Arquivo de definição de rotas para o recurso User.

### Pra que serve
Mapear cada endpoint HTTP para o método de controller correspondente.

### Fluxo
```
Requisição HTTP entra em /api/users
        ↓
Router encontra a rota correspondente
        ↓
Executa controller.metodo()
```

### Exemplo
```typescript
import { UserController } from "../controller/UserController"
import { Router } from "express"

const controller = new UserController()
const router = Router()

router.get('/users', controller.getAll.bind(controller))
router.post("/users", controller.register.bind(controller))

export default router
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `new UserController()` | Instancia o controller | Métodos das rotas | UserService | Precisa de uma instância para chamar os métodos |
| `.bind(controller)` | Preserva o `this` da instância | Método do controller | `this.service` | Sem bind o `this` seria undefined no Express |
| `router.get('/users', ...)` | Mapeia GET para getAll | Controller | `GET /api/users` | Listar todos os usuários |
| `router.post("/users", ...)` | Mapeia POST para register | Controller | `POST /api/users` | Criar novo usuário |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Requisição HTTP       →    Router encontra a rota   →    Controller executa
sem destino                e chama o método               e responde ao cliente
                           correto do controller
```

---

## **server.ts**

### O que é
Entry point da aplicação — configura o Express e sobe o servidor.

### Pra que serve
Registrar middlewares, rotas e iniciar o servidor na porta definida.

### Fluxo
```
Express criado
        ↓
Middlewares globais registrados (json, urlencoded, errorMiddleware)
        ↓
Rotas registradas em /api
        ↓
app.listen() sobe o servidor
```

### Exemplo
```typescript
import express from 'express'
import routes from './routes/UserRoutes'
import { errorMiddleware } from './middlewares/error-middleware'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(errorMiddleware)   // ⚠️ ver atenção abaixo
app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `express.json()` | Habilita parsing de JSON no body | `req.body` | Controllers | Sem isso req.body é undefined |
| `express.urlencoded({ extended: true })` | Habilita parsing de form-data | `req.body` | Formulários HTML | Aceita dados de formulários além de JSON |
| `app.use(errorMiddleware)` | Registra o middleware de erro | Erros da aplicação | AppError | ⚠️ Precisa estar depois das rotas |
| `app.use('/api', routes)` | Monta as rotas sob /api | Todas as rotas | UserRoutes | Todas as rotas ficam em /api/users |
| `app.listen(PORT)` | Sobe o servidor na porta | Requisições HTTP | Express | Ponto de entrada de toda requisição |

### ⚠️ Atenção
```
❌ app.use(errorMiddleware) ANTES de app.use('/api', routes)
   → por que quebra: Express registra middlewares em ordem
     erros das rotas não chegarão ao errorMiddleware se ele vier antes

✅ Mover errorMiddleware para DEPOIS das rotas:
   app.use('/api', routes)
   app.use(errorMiddleware)  // sempre por último
```

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
App sem config        →    Middlewares e rotas       →    Servidor ouvindo
porta fechada              registrados em ordem           na porta 3000
                           correta                         pronto para requisições
```

---

## 🔗 Fluxo completo da aplicação

```
Cliente HTTP
        ↓
server.ts (Express + porta 3000)
        ↓
app.use('/api', routes) → GET /api/users | POST /api/users
        ↓
UserController.getAll() | UserController.register()
        ↓
UserService (valida campos, checa email duplicado, lança AppError)
        ↓
UserRepository (query SQL via pool → MySQL)
        ↓
Tabela: users (id, nome, email, senha)
        ↓
Resultado sobe → res.json() para o cliente
        ↓
Qualquer erro → sobe automaticamente → errorMiddleware → res.status(4xx/5xx)
```

| Camada | Responsabilidade | Fala com |
|--------|-----------------|----------|
| `server.ts` | Configuração e inicialização | Express, Middlewares, Routes |
| `routes/UserRoutes` | Mapeamento de endpoints | Controller |
| `controllers/UserController` | HTTP → Service → HTTP | UserService |
| `services/UserService` | Validação e regras de negócio | UserRepository, AppError |
| `repositories/UserRepository` | SQL direto via pool | mysql2 pool, User model |
| `models/User` | Encapsulamento dos dados | Repository, Service |
| `errors/AppError` | Erros de negócio com statusCode | Service, errorMiddleware |
| `middlewares/errorMiddleware` | Tratamento centralizado de erros | AppError, Express |
| `config/conexao` | Pool de conexões com o MySQL | Repository |
