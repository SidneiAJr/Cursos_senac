# ☕ Documentação — TypeORM do Zero ao Avançado

> Documentado no padrão **Albertool DocGen**

---

# **Assunto:** O que é o TypeORM

### O que é
ORM (Object Relational Mapper) que mapeia classes TypeScript para tabelas do banco de dados — você escreve objeto, ele escreve SQL.

### Pra que serve
Elimina SQL manual repetitivo — em vez de escrever `INSERT INTO users (nome, email) VALUES (?, ?)` toda hora, você faz `repo.save(user)` e o TypeORM gera o SQL por você.

### Fluxo

```
[classe TypeScript com decorators]
        ↓
[TypeORM lê os decorators e gera SQL]
        ↓
[banco de dados executa e retorna resultado como objeto]
```

### Exemplo

```typescript
// Sem TypeORM:
await pool.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email]);

// Com TypeORM:
const user = repo.create({ nome, email });
await repo.save(user);
// TypeORM gera o INSERT automaticamente
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `ORM` | Traduz objeto ↔ tabela | banco de dados | classes TypeScript | Abstrair SQL manual |
| `decorators (@Entity, @Column...)` | Metadados que o TypeORM lê em runtime | TypeORM engine | classe da entidade | Informar ao ORM como mapear cada campo |
| `DataSource` | Configuração central da conexão | todos os repositórios | banco de dados | Ponto único de configuração do banco |
| `Repository<T>` | Interface de CRUD pra uma entidade | service layer | `DataSource` | Executar operações sem SQL manual |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Classe TypeScript   →      TypeORM lê decorators e        →   SQL gerado e
com campos normais          converte pra schema de banco       executado no banco
```

---

# **Assunto:** `@Entity` — Registrar Classe como Tabela

### O que é
Decorator que marca uma classe TypeScript como entidade do banco — sem ele, o TypeORM ignora a classe completamente.

### Pra que serve
Diz pro TypeORM: "essa classe aqui é uma tabela" — o nome da tabela é inferido do nome da classe ou configurado manualmente.

### Fluxo

```
[classe TypeScript com @Entity]
        ↓
[TypeORM registra a classe como tabela no schema]
        ↓
[tabela criada/mapeada no banco com o nome definido]
```

### Exemplo

```typescript
import { Entity } from 'typeorm';

// Tabela com nome automático: "user"
@Entity()
export class User {}

// Tabela com nome manual: "tb_usuarios"
@Entity({ name: 'tb_usuarios' })
export class User {}

// Tabela com schema específico (PostgreSQL)
@Entity({ name: 'users', schema: 'public' })
export class User {}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@Entity()` | Registra a classe como tabela | TypeORM schema | classe TypeScript | Sem isso o TypeORM ignora a classe |
| `@Entity({ name: 'tb_usuarios' })` | Define nome customizado da tabela | banco de dados | nome da tabela no banco | Quando o nome da classe ≠ nome da tabela |
| `@Entity({ schema: 'public' })` | Define schema do banco (PostgreSQL) | banco de dados | schema do PostgreSQL | Separar tabelas por schema no banco |
| nome automático | Converte `UserProfile` → `user_profile` | banco de dados | nome da classe | Convenção snake_case automática |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Classe JS comum     →      @Entity adiciona metadata      →   TypeORM sabe que
sem vínculo com BD          que o TypeORM lê via reflect       essa classe = tabela
```

---

# **Assunto:** `@PrimaryGeneratedColumn` e `@PrimaryColumn` — Chave Primária

### O que é
Decorators que definem a chave primária da tabela — `@PrimaryGeneratedColumn` é auto-incremento automático, `@PrimaryColumn` é manual.

### Pra que serve
Todo registro precisa de um identificador único — sem chave primária o banco não consegue distinguir linhas e o TypeORM rejeita a entidade.

### Fluxo

```
[novo objeto criado via repo.save()]
        ↓
[@PrimaryGeneratedColumn → banco gera o id automaticamente]
[@PrimaryColumn → você define o id antes de salvar]
        ↓
[id preenchido no objeto após o INSERT]
```

### Exemplo

```typescript
import { Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
    // Auto-incremento: 1, 2, 3, 4...
    @PrimaryGeneratedColumn()
    id: number;
}

@Entity()
export class Produto {
    // UUID automático: "550e8400-e29b-41d4-a716-446655440000"
    @PrimaryGeneratedColumn('uuid')
    id: string;
}

@Entity()
export class Configuracao {
    // Você define o valor — TypeORM não gera
    @PrimaryColumn()
    chave: string;
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@PrimaryGeneratedColumn()` | Auto-incremento inteiro: 1, 2, 3... | banco de dados | campo `id: number` | Identificador único gerado pelo banco |
| `@PrimaryGeneratedColumn('uuid')` | UUID automático — string única global | banco de dados | campo `id: string` | Id único sem depender de sequência do banco |
| `@PrimaryColumn()` | Chave primária com valor manual | banco de dados | campo que você preenche | Quando o id vem de fora (ex: CPF, código) |
| tipo `number` com `@PrimaryGeneratedColumn()` | INT no banco | banco de dados | `AUTO_INCREMENT` | Sequência numérica simples |
| tipo `string` com `@PrimaryGeneratedColumn('uuid')` | VARCHAR(36) no banco | banco de dados | função UUID do banco | Identificador portável entre sistemas |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
objeto sem id       →      repo.save() → banco executa    →   objeto retorna com
id = undefined              INSERT e gera o id                 id preenchido
```

---

# **Assunto:** `@Column` — Mapear Campo para Coluna

### O que é
Decorator que mapeia um atributo da classe para uma coluna no banco — sem ele, o campo existe no TypeScript mas é ignorado pelo TypeORM.

### Pra que serve
Controla exatamente como cada campo da classe vira coluna: nome, tipo, se aceita null, valor padrão, tamanho máximo e muito mais.

### Fluxo

```
[atributo TypeScript com @Column]
        ↓
[TypeORM mapeia para coluna com as opções configuradas]
        ↓
[SQL gerado com tipo, constraints e defaults corretos]
```

### Exemplo

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    // Coluna simples — tipo inferido do TypeScript (VARCHAR)
    @Column()
    nome: string;

    // Nome customizado no banco
    @Column({ name: 'email_address' })
    email: string;

    // Nullable — aceita NULL no banco
    @Column({ nullable: true })
    telefone: string | null;

    // Valor padrão
    @Column({ default: true })
    ativo: boolean;

    // Coluna única
    @Column({ unique: true })
    cpf: string;

    // Não atualiza depois do INSERT
    @Column({ update: false })
    criadoPor: string;
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@Column()` simples | Mapeia campo com tipo inferido do TS | coluna no banco | tipo TypeScript | Persistir o campo sem configuração extra |
| `{ name: 'email_address' }` | Coluna no banco tem nome diferente do atributo TS | DDL do banco | nome da coluna | Compatibilidade com bancos legados |
| `{ nullable: true }` | Permite NULL na coluna | banco de dados | `NULL` constraint | Campo opcional no banco |
| `{ default: true }` | Valor padrão se campo não informado | banco de dados | `DEFAULT` do SQL | Evitar NULL sem precisar passar o valor |
| `{ unique: true }` | Cria índice UNIQUE na coluna | banco de dados | `UNIQUE` constraint | Garantir unicidade a nível de banco |
| `{ update: false }` | Campo gravado no INSERT mas ignorado no UPDATE | TypeORM | INSERT/UPDATE | Campo imutável após criação |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Atributo TypeScript →      @Column + opções viram       →    Coluna no banco com
sem ligação ao banco        DDL (CREATE TABLE / ALTER)        tipo e constraints
```

---

# **Assunto:** Tipos de Coluna — `varchar`, `int`, `decimal`, `text` e mais

### O que é
Configuração explícita do tipo da coluna no banco via `{ type: '...' }` no `@Column` — controla precisão, tamanho e comportamento no banco real.

### Pra que serve
O TypeORM infere tipos básicos, mas sem configurar explicitamente você pode ter `varchar(255)` quando queria `varchar(100)`, ou `float` quando precisava de `decimal(10,2)` para dinheiro.

### Fluxo

```
[@Column({ type: 'varchar', length: 100 })]
        ↓
[TypeORM gera: nome VARCHAR(100) NOT NULL]
        ↓
[banco cria a coluna com as constraints exatas que você definiu]
```

### Exemplo

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    // VARCHAR com tamanho máximo
    @Column({ type: 'varchar', length: 100 })
    nome: string;

    // TEXT — sem limite de tamanho
    @Column({ type: 'text', nullable: true })
    descricao: string | null;

    // DECIMAL — essencial pra dinheiro (evita erro de ponto flutuante)
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco: number;

    // INT simples
    @Column({ type: 'int' })
    estoque: number;

    // BOOLEAN
    @Column({ type: 'boolean', default: true })
    ativo: boolean;

    // DATE — só data, sem hora
    @Column({ type: 'date', nullable: true })
    dataValidade: string | null;

    // DATETIME / TIMESTAMP
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    criadoEm: Date;

    // JSON — objeto armazenado como JSON no banco
    @Column({ type: 'json', nullable: true })
    metadados: Record<string, any> | null;

    // ENUM — só aceita valores definidos
    @Column({ type: 'enum', enum: ['ativo', 'inativo', 'pendente'], default: 'ativo' })
    status: string;
}
```

### 🔍 Tabela mastigada

| Tipo | SQL gerado | Quando usar | Cuidado |
|------|-----------|-------------|---------|
| `varchar` + `length` | `VARCHAR(N)` | Texto curto com limite definido | Sem `length` vira `VARCHAR(255)` padrão |
| `text` | `TEXT` | Descrições, conteúdo longo | Não indexável diretamente |
| `decimal` + `precision/scale` | `DECIMAL(10,2)` | **Dinheiro, notas, % — sempre** | `float/double` perde precisão em dinheiro |
| `int` | `INT` | Contadores, ids externos, estoque | Para números muito grandes use `bigint` |
| `boolean` | `TINYINT(1)` no MySQL | Flags, ativos/inativos | MySQL não tem BOOLEAN nativo |
| `date` | `DATE` | Só datas (nascimento, validade) | Sem hora — use `datetime` se precisar |
| `timestamp` | `TIMESTAMP` | Registro temporal com hora | Afetado por timezone no MySQL |
| `json` | `JSON` | Dados flexíveis, metadados | Não dá pra filtrar campos internos com índice |
| `enum` | `ENUM('a','b')` | Status, categorias fixas | Adicionar valor novo exige ALTER TABLE |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
@Column() sem tipo  →      TypeORM infere pelo tipo TS    →   Pode gerar tipo
ou com tipo errado          (string→varchar, number→int)       errado no banco
                                                               (float em vez de decimal)

@Column({ type:     →      TypeORM usa exatamente o       →   Coluna no banco com
'decimal',                  tipo e precisão que você           DECIMAL(10,2) correto
precision:10,scale:2})      definiu                            sem erro de arredondamento
```

### ⚠️ Armadilha

```
❌ Usar type: 'float' pra dinheiro — 19.99 pode virar 19.989999999 no banco
❌ Omitir length no varchar — vira 255 por padrão, pode desperdiçar espaço
❌ type: 'enum' — adicionar novo valor exige migration com ALTER TABLE no banco
❌ type: 'timestamp' sem timezone — comportamento diferente entre MySQL e PostgreSQL
```

---

# **Assunto:** `@CreateDateColumn` e `@UpdateDateColumn` — Datas Automáticas

### O que é
Decorators que preenchem automaticamente a data de criação e de última atualização do registro — sem precisar setar manualmente.

### Pra que serve
Rastreio temporal zero-config — você nunca esquece de atualizar `updatedAt` porque o TypeORM faz isso sozinho em todo `save()`.

### Fluxo

```
[repo.save(objeto) — primeiro INSERT]
        ↓
[@CreateDateColumn → preenchido com data/hora atual]
[@UpdateDateColumn → preenchido com data/hora atual]
        ↓
[repo.save(objeto) — UPDATE posterior]
        ↓
[@UpdateDateColumn → atualizado automaticamente | @CreateDateColumn → não muda]
```

### Exemplo

```typescript
import { Entity, PrimaryGeneratedColumn, Column,
         CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    // Preenchido no INSERT, nunca alterado
    @CreateDateColumn()
    criadoEm: Date;

    // Atualizado em todo repo.save()
    @UpdateDateColumn()
    atualizadoEm: Date;
}

// Uso:
const user = repo.create({ nome: 'Frieren' });
await repo.save(user);
// user.criadoEm   → 2024-01-15T10:30:00
// user.atualizadoEm → 2024-01-15T10:30:00

user.nome = 'Frieren Altissimo';
await repo.save(user);
// user.criadoEm   → 2024-01-15T10:30:00  ← não mudou
// user.atualizadoEm → 2024-01-15T11:45:00 ← atualizado
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@CreateDateColumn()` | Seta `CURRENT_TIMESTAMP` no INSERT e nunca mais muda | banco de dados | campo `Date` | Rastrear quando o registro foi criado |
| `@UpdateDateColumn()` | Atualiza pra `CURRENT_TIMESTAMP` em todo `save()` | banco de dados | campo `Date` | Rastrear última modificação automaticamente |
| tipo `Date` no TypeScript | Data como objeto Date no código | aplicação | `timestamp` no banco | Trabalhar com data como objeto, não string |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Campos de data      →      TypeORM intercepta o save()   →   criadoEm preenchido
undefined antes             e injeta o timestamp antes        no INSERT, atualizadoEm
do primeiro save            de executar o SQL                 em todo UPDATE
```

---

# **Assunto:** `@DeleteDateColumn` — Soft Delete

### O que é
Decorator que habilita soft delete — em vez de deletar o registro do banco, o TypeORM preenche uma coluna de data de exclusão e filtra automaticamente nos selects.

### Pra que serve
Soft delete preserva histórico — se alguém deletar um pedido por engano, você consegue recuperar. Hard delete (`DELETE FROM`) é irreversível.

### Fluxo

```
[repo.softDelete(id) chamado]
        ↓
[TypeORM preenche deletedAt com timestamp atual — NÃO executa DELETE]
        ↓
[todo repo.find() passa a ignorar registros com deletedAt != null automaticamente]
```

### Exemplo

```typescript
import { Entity, PrimaryGeneratedColumn, Column,
         CreateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @CreateDateColumn()
    criadoEm: Date;

    // Habilita soft delete nessa entidade
    @DeleteDateColumn()
    deletadoEm: Date | null;
}

// Soft delete — não apaga do banco
await repo.softDelete(1);
// SQL: UPDATE pedido SET deletado_em = NOW() WHERE id = 1

// Find normal — ignora deletados automaticamente
const pedidos = await repo.find();
// Não retorna registros com deletadoEm preenchido

// Buscar INCLUINDO deletados
const todos = await repo.find({ withDeleted: true });

// Restaurar
await repo.restore(1);
// SQL: UPDATE pedido SET deletado_em = NULL WHERE id = 1
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@DeleteDateColumn()` | Marca campo como coluna de soft delete | TypeORM filter | campo `Date | null` | Habilitar exclusão lógica na entidade |
| `repo.softDelete(id)` | UPDATE com timestamp em vez de DELETE | banco de dados | `deletadoEm` | Excluir sem apagar dados |
| `repo.find()` automático | Filtra `WHERE deletado_em IS NULL` automaticamente | resultado | `@DeleteDateColumn` | Ocultar deletados sem filtro manual |
| `{ withDeleted: true }` | Desabilita o filtro automático | resultado | `find()` | Buscar registros deletados quando necessário |
| `repo.restore(id)` | Seta `deletadoEm = NULL` | banco de dados | `deletadoEm` | Recuperar registro excluído logicamente |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
registro existe com →      softDelete() faz UPDATE       →   registro ainda no banco
deletadoEm = null           setando deletadoEm = NOW()        mas invisível nos
                                                               find() normais
```

---

# **Assunto:** Relacionamentos — `@OneToMany` e `@ManyToOne`

### O que é
Decorators que mapeiam relacionamento 1:N entre entidades — um `User` tem vários `Pedido`, cada `Pedido` pertence a um `User`.

### Pra que serve
Define a foreign key no banco via código — o TypeORM cria a coluna `user_id` na tabela `pedido` e gerencia os JOINs automaticamente.

### Fluxo

```
[User com @OneToMany → Pedido]
[Pedido com @ManyToOne → User]
        ↓
[TypeORM cria FK: pedido.user_id → user.id]
        ↓
[repo.find({ relations: ['pedidos'] }) → JOIN automático]
```

### Exemplo

```typescript
import { Entity, PrimaryGeneratedColumn, Column,
         OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    // Um User tem muitos Pedidos
    @OneToMany(() => Pedido, (pedido) => pedido.user)
    pedidos: Pedido[];
}

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    // Muitos Pedidos pertencem a um User
    // Esse lado é o dono da FK — user_id fica nessa tabela
    @ManyToOne(() => User, (user) => user.pedidos)
    user: User;
}

// Buscar user com pedidos (JOIN)
const user = await userRepo.findOne({
    where: { id: 1 },
    relations: ['pedidos']
});
// user.pedidos → array de Pedido[]
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@OneToMany(() => Pedido, pedido => pedido.user)` | Declara o lado "um" do relacionamento | `User.pedidos` | `Pedido.user` | Acessar pedidos a partir do user |
| `@ManyToOne(() => User, user => user.pedidos)` | Declara o lado "muitos" — **dono da FK** | `pedido.user_id` no banco | `User.id` | FK gerada nessa tabela |
| `relations: ['pedidos']` no find | Carrega os pedidos com JOIN | resultado | `@OneToMany` | Eager load manual dos relacionamentos |
| `pedidos: Pedido[]` | Array tipado dos relacionados | aplicação | `@OneToMany` | Acessar objetos relacionados no código |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Duas entidades sem  →      @ManyToOne cria coluna         →   user_id em pedido
relacionamento              user_id na tabela pedido           JOIN disponível via
                            com FK → user.id                   relations: ['pedidos']
```

---

# **Assunto:** Relacionamentos — `@OneToOne`

### O que é
Decorator para relacionamento 1:1 — um `User` tem exatamente um `Perfil`, e esse `Perfil` pertence a exatamente um `User`.

### Pra que serve
Separar dados opcionais ou pesados da entidade principal — dados de perfil raramente usados ficam em outra tabela e só são carregados quando necessário.

### Fluxo

```
[User com @OneToOne → Perfil]
[Perfil com @OneToOne + @JoinColumn → User (dono da FK)]
        ↓
[TypeORM cria: perfil.user_id UNIQUE → user.id]
        ↓
[relations: ['perfil'] carrega o objeto relacionado]
```

### Exemplo

```typescript
import { Entity, PrimaryGeneratedColumn, Column,
         OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @OneToOne(() => Perfil, (perfil) => perfil.user)
    perfil: Perfil;
}

@Entity()
export class Perfil {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    bio: string | null;

    @Column({ nullable: true })
    avatar: string | null;

    // @JoinColumn define quem guarda a FK
    // Sempre no lado "filho" do relacionamento
    @OneToOne(() => User, (user) => user.perfil)
    @JoinColumn()
    user: User;
}

// Buscar user com perfil
const user = await userRepo.findOne({
    where: { id: 1 },
    relations: ['perfil']
});
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@OneToOne(() => Perfil, ...)` | Declara relacionamento 1:1 dos dois lados | TypeORM metadata | `Perfil` | Mapear o relacionamento bidirecionalmente |
| `@JoinColumn()` | Define qual lado guarda a FK — **obrigatório no 1:1** | banco de dados | `user_id` na tabela `perfil` | Sem ele o TypeORM não sabe onde criar a FK |
| FK com UNIQUE automático | Garante que cada user tenha no máximo 1 perfil | banco de dados | constraint UNIQUE | Integridade do 1:1 a nível de banco |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Duas entidades sem  →      @JoinColumn define que perfil  →   perfil.user_id UNIQUE
vínculo                     guarda a FK user_id                garante 1:1 no banco
```

---

# **Assunto:** Relacionamentos — `@ManyToMany`

### O que é
Decorator para relacionamento N:N — um `Produto` pode ter várias `Categoria`, e uma `Categoria` pode ter vários `Produto` — TypeORM cria tabela pivot automaticamente.

### Pra que serve
Relacionamento N:N sem tabela pivot manual — o TypeORM cria e gerencia a tabela intermediária (ex: `produto_categoria`) por você.

### Fluxo

```
[Produto com @ManyToMany → Categoria]
[Categoria com @ManyToMany → Produto]
        ↓
[TypeORM cria tabela pivot: produto_categorias_categoria]
        ↓
[{ relations: ['categorias'] } → JOIN duplo automático]
```

### Exemplo

```typescript
import { Entity, PrimaryGeneratedColumn, Column,
         ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    // @JoinTable sempre no lado "dono" do relacionamento
    @ManyToMany(() => Categoria, (cat) => cat.produtos)
    @JoinTable()
    categorias: Categoria[];
}

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @ManyToMany(() => Produto, (prod) => prod.categorias)
    produtos: Produto[];
}

// Adicionar categorias a um produto
const produto = await produtoRepo.findOne({
    where: { id: 1 },
    relations: ['categorias']
});
produto.categorias.push(novaCategoria);
await produtoRepo.save(produto);
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe |
|------------------|-----------|--------------|-------------|----------------|
| `@ManyToMany(() => Categoria, ...)` | Declara N:N dos dois lados | TypeORM | `Categoria` | Mapear relação bidirecional N:N |
| `@JoinTable()` | Cria tabela pivot — **obrigatório em um dos lados** | banco de dados | tabela `produto_categorias_categoria` | Sem isso o TypeORM não sabe criar a pivot |
| tabela pivot automática | `produto_id` + `categoria_id` como chave composta | banco de dados | ambas as entidades | Armazenar os pares do relacionamento N:N |
| `produto.categorias.push(...)` + `save()` | Adiciona entrada na tabela pivot | banco de dados | `@JoinTable` | Gerenciar o N:N sem SQL manual na pivot |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Duas entidades sem  →      @JoinTable cria tabela pivot   →   Tabela pivot com
vínculo N:N                 produto_categorias_categoria       pares de ids gerenciada
                                                               pelo TypeORM
```

---

# **Assunto:** `Repository<T>` — Métodos de CRUD

### O que é
Interface do TypeORM que expõe todos os métodos de acesso ao banco para uma entidade específica — obtida via `AppDataSource.getRepository(Entidade)`.

### Pra que serve
Centraliza todas as operações de banco numa API consistente — em vez de escrever SQL pra cada operação, você chama `find()`, `save()`, `delete()` e o TypeORM faz o resto.

### Fluxo

```
[AppDataSource.getRepository(User) → repositório tipado para User]
        ↓
[métodos: find, findOne, save, create, update, delete, count...]
        ↓
[TypeORM gera e executa o SQL → retorna objetos tipados]
```

### Exemplo

```typescript
import { AppDataSource } from './data-source';
import { User } from './entity/User';

const repo = AppDataSource.getRepository(User);

// CREATE
const user = repo.create({ nome: 'Frieren', email: 'frie@elfen.com' });
await repo.save(user);         // INSERT INTO users...

// READ — todos
const users = await repo.find();

// READ — com filtro
const ativo = await repo.find({ where: { ativo: true } });

// READ — um
const user = await repo.findOne({ where: { id: 1 } });
const user = await repo.findOneBy({ id: 1 }); // atalho

// UPDATE
user.nome = 'Frieren Altissimo';
await repo.save(user);         // UPDATE users SET nome=? WHERE id=?

// UPDATE sem carregar entidade (direto)
await repo.update({ id: 1 }, { nome: 'Frieren' });

// DELETE com entidade carregada
await repo.remove(user);

// DELETE sem carregar entidade
await repo.delete({ id: 1 });

// COUNT
const total = await repo.count({ where: { ativo: true } });

// EXISTE
const existe = await repo.exist({ where: { email: 'frie@elfen.com' } });
```

### 🔍 Tabela mastigada

| Método | SQL gerado | Retorno | Quando usar |
|--------|-----------|---------|-------------|
| `create(data)` | Nenhum — cria objeto em memória | `Entity` | Instanciar sem salvar ainda |
| `save(entity)` | `INSERT` ou `UPDATE` automático | `Entity` salvo | Criar ou atualizar (detecta pelo id) |
| `find(options?)` | `SELECT * FROM ...` | `Entity[]` | Buscar vários com filtros opcionais |
| `findOne(options)` | `SELECT ... LIMIT 1` | `Entity \| null` | Buscar um registro específico |
| `findOneBy(where)` | `SELECT ... WHERE ... LIMIT 1` | `Entity \| null` | Atalho simples por campo |
| `update(where, data)` | `UPDATE ... SET ... WHERE ...` | `UpdateResult` | Atualizar sem carregar entidade |
| `delete(where)` | `DELETE FROM ... WHERE ...` | `DeleteResult` | Deletar sem carregar entidade |
| `remove(entity)` | `DELETE FROM ... WHERE id=?` | `Entity` removido | Deletar com entidade carregada |
| `count(options?)` | `SELECT COUNT(*) FROM ...` | `number` | Contar registros |
| `exist(options)` | `SELECT 1 FROM ... LIMIT 1` | `boolean` | Checar existência sem buscar dados |
| `softDelete(where)` | `UPDATE ... SET deleted_at=NOW()` | `UpdateResult` | Soft delete (precisa de `@DeleteDateColumn`) |
| `restore(where)` | `UPDATE ... SET deleted_at=NULL` | `UpdateResult` | Restaurar soft deleted |
| `findAndCount(options?)` | `SELECT ... + COUNT(*)` | `[Entity[], number]` | Paginação |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Chamada ao método   →      TypeORM monta o SQL com        →   SQL executado no banco
do repositório              base nos decorators da             resultado retornado
(ex: find, save)            entidade e opções passadas         como objeto tipado
```

---

# **Assunto:** `find()` com Opções Avançadas — `where`, `order`, `skip`, `take`

### O que é
Sistema de query builder declarativo do `find()` — filtros, ordenação e paginação sem escrever SQL, só passando um objeto de opções.

### Pra que serve
Fazer buscas complexas sem QueryBuilder — 80% dos casos de uso cabem no `find()` com opções, que é mais legível e tipado.

### Fluxo

```
[find({ where, order, skip, take, relations })]
        ↓
[TypeORM monta SELECT com WHERE, ORDER BY, LIMIT, OFFSET, JOIN]
        ↓
[resultado tipado como Entity[]]
```

### Exemplo

```typescript
import { Like, Between, In, IsNull, Not, MoreThan, LessThan } from 'typeorm';

// Filtro simples
await repo.find({ where: { ativo: true } });

// LIKE — busca por texto parcial
await repo.find({ where: { nome: Like('%frie%') } });

// BETWEEN — intervalo de valores
await repo.find({ where: { preco: Between(10, 100) } });

// IN — lista de valores
await repo.find({ where: { id: In([1, 2, 3]) } });

// IS NULL
await repo.find({ where: { deletadoEm: IsNull() } });

// NOT — negação
await repo.find({ where: { status: Not('inativo') } });

// Maior/menor que
await repo.find({ where: { estoque: MoreThan(0) } });
await repo.find({ where: { preco: LessThan(50) } });

// Ordenação
await repo.find({ order: { nome: 'ASC', preco: 'DESC' } });

// Paginação
await repo.find({ skip: 0, take: 10 }); // página 1
await repo.find({ skip: 10, take: 10 }); // página 2

// Carregar relacionamentos
await repo.find({ relations: ['pedidos', 'pedidos.itens'] });

// Combinando tudo
const resultado = await repo.find({
    where: { ativo: true, preco: Between(10, 500) },
    order: { nome: 'ASC' },
    skip: 0,
    take: 20,
    relations: ['categoria']
});
```

### 🔍 Tabela mastigada

| Opção | SQL gerado | Pra que existe |
|-------|-----------|----------------|
| `where: { campo: valor }` | `WHERE campo = valor` | Filtrar por igualdade |
| `where: { nome: Like('%x%') }` | `WHERE nome LIKE '%x%'` | Busca textual parcial |
| `where: { id: In([1,2,3]) }` | `WHERE id IN (1,2,3)` | Múltiplos valores aceitos |
| `where: { preco: Between(a,b) }` | `WHERE preco BETWEEN a AND b` | Intervalo numérico ou de datas |
| `where: { campo: IsNull() }` | `WHERE campo IS NULL` | Campo nulo |
| `where: { campo: Not(valor) }` | `WHERE campo != valor` | Negação |
| `order: { campo: 'ASC' }` | `ORDER BY campo ASC` | Ordenação dos resultados |
| `skip: N` | `OFFSET N` | Pular N registros (paginação) |
| `take: N` | `LIMIT N` | Máximo N resultados por página |
| `relations: ['x']` | `LEFT JOIN x ON ...` | Carregar relacionamento junto |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Objeto de opções    →      TypeORM transforma cada key    →   SQL completo com
{ where, order,             em cláusula SQL correspondente    WHERE + ORDER BY +
  skip, take }              e monta a query final             LIMIT + OFFSET + JOIN
```

---

# **Assunto:** `QueryBuilder` — Queries Complexas

### O que é
API fluente do TypeORM para montar queries SQL complexas em TypeScript — JOINs condicionais, subqueries, agrupamentos e tudo que o `find()` não alcança.

### Pra que serve
Quando `find()` não é suficiente — relatórios, queries com múltiplos JOINs condicionais, GROUP BY, HAVING ou subqueries precisam do QueryBuilder.

### Fluxo

```
[repo.createQueryBuilder('alias')]
        ↓
[encadeia métodos: .where(), .andWhere(), .leftJoinAndSelect(), .orderBy()...]
        ↓
[.getMany() ou .getOne() executa e retorna resultado tipado]
```

### Exemplo

```typescript
const repo = AppDataSource.getRepository(User);

// Básico
const users = await repo
    .createQueryBuilder('user')
    .where('user.ativo = :ativo', { ativo: true })
    .andWhere('user.nome LIKE :nome', { nome: '%frie%' })
    .orderBy('user.nome', 'ASC')
    .getMany();

// JOIN com relacionamento
const users = await repo
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.pedidos', 'pedido')
    .where('pedido.status = :status', { status: 'ativo' })
    .getMany();

// SELECT parcial (só alguns campos)
const nomes = await repo
    .createQueryBuilder('user')
    .select(['user.id', 'user.nome'])
    .where('user.ativo = true')
    .getRawMany();

// COUNT + GROUP BY
const contagem = await repo
    .createQueryBuilder('user')
    .select('user.status', 'status')
    .addSelect('COUNT(user.id)', 'total')
    .groupBy('user.status')
    .getRawMany();

// Paginação
const [users, total] = await repo
    .createQueryBuilder('user')
    .skip(0)
    .take(10)
    .getManyAndCount();
```

### 🔍 Tabela mastigada

| Método | SQL equivalente | Pra que existe |
|--------|----------------|----------------|
| `createQueryBuilder('user')` | `FROM users user` | Inicia a query com alias |
| `.where('user.id = :id', { id })` | `WHERE user.id = ?` | Filtro parametrizado (seguro contra SQL injection) |
| `.andWhere(...)` | `AND ...` | Adiciona condição sem sobrescrever o where |
| `.orWhere(...)` | `OR ...` | Condição alternativa |
| `.leftJoinAndSelect('user.pedidos', 'pedido')` | `LEFT JOIN pedidos pedido ON ...` | JOIN com carregamento do relacionamento |
| `.select(['user.id', 'user.nome'])` | `SELECT user.id, user.nome` | Selecionar apenas campos necessários |
| `.orderBy('user.nome', 'ASC')` | `ORDER BY user.nome ASC` | Ordenação |
| `.skip(N).take(N)` | `OFFSET N LIMIT N` | Paginação |
| `.getMany()` | Executa e retorna `Entity[]` | Múltiplos resultados |
| `.getOne()` | Executa e retorna `Entity \| null` | Um resultado |
| `.getRawMany()` | Retorna `any[]` sem mapear entidade | Queries parciais / GROUP BY |
| `.getManyAndCount()` | Retorna `[Entity[], number]` | Paginação com total |

### 🧠 Por baixo

```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────────     ──────────────────
Chamadas fluentes   →      TypeORM acumula as cláusulas   →   SQL completo montado
encadeadas                  e parametriza os valores          e executado com
                            de forma segura                    resultado tipado
```

### ⚠️ Armadilha

```
❌ Concatenar string no where: .where('user.id = ' + id) → SQL Injection
✅ Sempre use parâmetros: .where('user.id = :id', { id })
❌ getRawMany() retorna any[] — perde tipagem da entidade
❌ Esquecer o alias no createQueryBuilder — causa erro nos joins
```
