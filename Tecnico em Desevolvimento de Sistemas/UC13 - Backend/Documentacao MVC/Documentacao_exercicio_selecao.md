# 📚**Assunto:** TypeORM + Express — FIFA (Jogador & Seleção)

---

## **data-source.ts**

### O que é
Configuração central da conexão com o MySQL usando TypeORM e variáveis de ambiente.

### Pra que serve
Inicializar a conexão com o banco e registrar as entidades Jogador e Selecao para que o ORM saiba quais tabelas gerenciar.

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
import { Jogador } from "../models/Jogador";
import { Selecao } from "../models/Selecao";

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
    logging: true,
    entities: [Jogador, Selecao],
});
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `reflect-metadata` | Habilita decorators em runtime | TypeORM internamente | `@Entity`, `@Column` | Sem ele os decorators não funcionam |
| `dotenv.config()` | Carrega o `.env` para `process.env` | Variáveis de ambiente | Credenciais do banco | Evita hardcodar senha no código |
| `Number(DB_PORT)` | Converte string do `.env` para number | Configuração do DataSource | `port` do banco | `process.env` retorna tudo como string |
| `synchronize: true` | Cria/altera tabelas automaticamente | Banco de dados | Entidades | Dev only — em prod usar migrations |
| `logging: true` | Exibe SQL no terminal | Console | Queries executadas | Debug e aprendizado das queries geradas |
| `entities: [Jogador, Selecao]` | Registra quais classes são tabelas | TypeORM | Models | ORM precisa saber o que mapear |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
.env com credenciais  →    DataSource lê as vars    →    Conexão aberta
Entidades desconhecidas    registra Jogador e Selecao     tabelas criadas/sincronizadas
```

---

## **models/Jogador.ts**

### O que é
Entidade que representa a tabela `Jogador` no banco de dados com seu relacionamento N:1 com Selecao.

### Pra que serve
Mapear os campos do jogador e a chave estrangeira para a seleção a qual pertence.

### Fluxo
```
Classe Jogador com @ManyToOne
        ↓
TypeORM cria coluna selecaoId (FK) automaticamente
        ↓
JOIN disponível via relations: ['selecao']
```

### Exemplo
```typescript
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Selecao } from "./Selecao";

@Entity("Jogador")
export class Jogador {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    nome: string;

    @Column({ type: "int", nullable: false })
    numeroCamisa: number;

    @Column({ type: "varchar", length: 150, nullable: false })
    posicao: string;

    @Column({ type: "int", nullable: false })
    idade: number;

    @Column({ type: "decimal", precision: 3, scale: 2, nullable: false })
    altura!: number;

    @Column({ type: "decimal", precision: 3, scale: 2, nullable: false })
    peso!: number;

    @Column({ type: "int", nullable: false })
    gols: number;

    @ManyToOne(() => Selecao, (selecao) => selecao.jogadores)
    selecao: Selecao;
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@Entity("Jogador")` | Mapeia a classe para a tabela `Jogador` | Banco de dados | DataSource | ORM precisa saber o nome da tabela |
| `@PrimaryGeneratedColumn()` | Chave primária auto-incremento | Coluna `id` | Todas as relações | Identificador único de cada registro |
| `unique: true` em `nome` | Impede nomes duplicados | Constraint no banco | Validação de insert | Dois jogadores não podem ter o mesmo nome |
| `numeroCamisa` sem `unique` | Permite número repetido entre seleções | Coluna int | Regra de negócio | Seleções diferentes podem ter o número 10 |
| `decimal(3,2)` em `altura` e `peso` | Armazena decimal com 3 dígitos e 2 casas | Coluna no banco | Valores como 1.75 | Precisão correta para altura/peso |
| `@ManyToOne(() => Selecao, ...)` | Cria FK `selecaoId` na tabela Jogador | Chave estrangeira | `Selecao.jogadores` | Vários jogadores pertencem a uma seleção |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Classe TypeScript     →    TypeORM lê decorators    →    Tabela Jogador no MySQL
com propriedades           em runtime                     com FK selecaoId
```

---

## **models/Selecao.ts**

### O que é
Entidade que representa a tabela `Selecao` e seu relacionamento 1:N com Jogador.

### Pra que serve
Mapear os dados de uma seleção e disponibilizar o acesso aos jogadores via JOIN.

### Fluxo
```
Classe Selecao com @OneToMany
        ↓
TypeORM disponibiliza jogadores via relations: ['jogadores']
        ↓
A FK existe na tabela Jogador, não em Selecao
```

### Exemplo
```typescript
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Jogador } from "./Jogador";

@Entity("Selecao")
export class Selecao {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    nome: string;

    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    pais: string;

    @Column({ type: "varchar", length: 150, nullable: false, unique: true })
    tecnico: string;

    @Column({ type: "int", nullable: false })
    rankingFifa!: number;

    @Column({ type: "date", nullable: true })
    anoFundacao?: Date;

    @OneToMany(() => Jogador, (jogador) => jogador.selecao)
    jogadores: Jogador[];
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `unique: true` em `pais` | Impede dois registros do mesmo país | Constraint no banco | Regra de negócio | Um país só pode ter uma seleção |
| `unique: true` em `tecnico` | Impede técnico em duas seleções | Constraint no banco | Regra de negócio | Um técnico comanda uma seleção por vez |
| `nullable: true` em `anoFundacao` | Campo opcional | Coluna `date` | Insert sem data | Nem toda seleção tem data registrada |
| `Date` com `?` no TypeScript | Propriedade opcional | TypeScript | `nullable: true` | Reflete no tipo que pode ser undefined |
| `@OneToMany(() => Jogador, ...)` | Lado inverso da FK | JOIN via relations | `@ManyToOne` em Jogador | TypeORM monta o JOIN automaticamente |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
Classe Selecao        →    TypeORM lê @OneToMany    →    Tabela Selecao sem FK
sem FK explícita           lado inverso da relação        FK fica na tabela Jogador
```

---

## **package.json**

### O que é
Manifesto do projeto com dependências, scripts e metadados.

### Pra que serve
Registrar todas as bibliotecas necessárias e os comandos de desenvolvimento e produção.

### Exemplo
```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/server.js",
    "dev": "ts-node-dev src/server.ts"
  }
}
```

### 🔍 Tabela mastigada

| Dependência | O que faz | Conecta com | Pra que existe |
|-------------|-----------|-------------|----------------|
| `typeorm` | ORM que mapeia classes para tabelas | Models, DataSource | Abstração do SQL |
| `reflect-metadata` | Habilita decorators em runtime | TypeORM | `@Entity`, `@Column` funcionarem |
| `mysql2` | Driver de conexão com MySQL | TypeORM internamente | TypeORM não fala com banco sozinho |
| `express` | Framework HTTP | Controllers, Routes | Servidor web |
| `dotenv` | Carrega variáveis do `.env` | DataSource | Credenciais fora do código |
| `bcrypt` | Hash de senhas | Service de autenticação | Nunca salvar senha em texto puro |
| `jsonwebtoken` | Geração e validação de JWT | Middleware de auth | Autenticação stateless |
| `zod` | Validação de schemas | Middlewares de validação | Garante shape dos dados de entrada |
| `cors` | Habilita Cross-Origin | Servidor Express | Frontend em outro domínio acessar a API |
| `ts-node-dev` | Executa TypeScript com hot-reload | Script `dev` | Reinicia ao salvar sem buildar |
| `typescript ^6.0.3` | Compilador TypeScript | Build | Versão mais recente — checar compatibilidade |

### 🧠 Por baixo
```
[antes]                    [durante]                     [depois]
──────────────────         ──────────────────────────    ──────────────────
npm install           →    node_modules populado     →    Projeto pronto
package.json vazio         com todas as libs              para dev e build
```

---

## 🔗 Fluxo completo do projeto

```
Cliente HTTP
        ↓
Express (server.ts)
        ↓
Routes → [validate middleware] → Controller
        ↓
Service (regras de negócio)
        ↓
Repository (getRepository(Jogador | Selecao))
        ↓
AppDataSource → MySQL
        ↓
Tabelas: Jogador (com FK selecaoId) ←→ Selecao
```

| Camada | Responsabilidade | Fala com |
|--------|-----------------|----------|
| `data-source.ts` | Conexão com o banco | TypeORM, Models |
| `models/Jogador.ts` | Tabela Jogador + FK para Selecao | TypeORM, Selecao |
| `models/Selecao.ts` | Tabela Selecao + lado inverso do relacionamento | TypeORM, Jogador |
| `package.json` | Dependências e scripts | npm, Node |
