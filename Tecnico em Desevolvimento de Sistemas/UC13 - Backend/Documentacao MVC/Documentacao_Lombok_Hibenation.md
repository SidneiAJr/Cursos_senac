# **Assunto:** Lombok + Hibernate + JPA — Intermediário

---

## 📦 Lombok

### O que é
Biblioteca Java que gera código boilerplate (getters, setters, construtores, equals, hashCode) em tempo de compilação via anotações.

### Pra que serve
Eliminar dezenas de linhas repetitivas em toda entidade/DTO — você escreve a classe, o Lombok escreve o resto.

### Fluxo
```
classe Java com @anotações Lombok
        ↓
compilador processa as anotações (APT)
        ↓
bytecode gerado com getters/setters/construtores como se você tivesse escrito
```

### Exemplo
```java
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long id;
    private String nome;
    private String email;
}
```

### 🔍 Tabela mastigada

| Anotação | O que faz | Pra onde vai | Conecta com | Pra que existe |
|----------|-----------|--------------|-------------|----------------|
| `@Getter` | Gera `getNome()`, `getId()`... | Bytecode compilado | Qualquer campo da classe | Evitar escrever getter manualmente |
| `@Setter` | Gera `setNome()`, `setId()`... | Bytecode compilado | Qualquer campo não `final` | Evitar escrever setter manualmente |
| `@ToString` | Gera `toString()` com todos os campos | Bytecode compilado | Logs, debug | Ver o objeto legível no console |
| `@EqualsAndHashCode` | Gera `equals()` e `hashCode()` | Bytecode compilado | Collections, comparações | Comparar objetos por valor, não referência |
| `@NoArgsConstructor` | Gera `new User()` sem parâmetros | Bytecode compilado | JPA (obrigatório), frameworks | JPA exige construtor vazio para instanciar entidades |
| `@AllArgsConstructor` | Gera construtor com todos os campos | Bytecode compilado | Testes, criação rápida | Criar objeto preenchido em uma linha |
| `@RequiredArgsConstructor` | Gera construtor só com campos `final` | Bytecode compilado | Injeção de dependência Spring | Evitar `@Autowired` em campo |
| `@Data` | Atalho: `@Getter` + `@Setter` + `@ToString` + `@EqualsAndHashCode` + `@RequiredArgsConstructor` | Bytecode compilado | DTOs, POJOs simples | Uma anotação no lugar de cinco |
| `@Builder` | Gera padrão Builder: `User.builder().nome("João").build()` | Bytecode compilado | Criação de objetos complexos | Construção fluente sem construtor gigante |
| `@Value` | Como `@Data` mas tudo `final` — imutável | Bytecode compilado | DTOs de resposta, records | Objetos que não devem mudar depois de criados |
| `@Slf4j` | Gera `private static final Logger log = ...` | Bytecode compilado | Logging com SLF4J/Logback | Não precisar declarar o logger toda vez |
| `@NonNull` | Gera `if (param == null) throw NullPointerException` | Bytecode compilado | Parâmetros de método/construtor | Validação de null sem if manual |

### 🧠 Por baixo
```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────         ──────────────────
classe .java         →     APT (Annotation Processing    →    .class com os métodos
com @Data                  Tool) lê as anotações              gerados como se você
sem getters/setters        e injeta os métodos no AST         tivesse escrito tudo
```

```java
// O que você escreve:
@Data
public class User {
    private String nome;
}

// O que o compilador gera (equivalente):
public class User {
    private String nome;

    public String getNome() { return this.nome; }
    public void setNome(String nome) { this.nome = nome; }

    public boolean equals(Object o) { /* compara nome */ }
    public int hashCode() { /* hash do nome */ }
    public String toString() { return "User(nome=" + this.nome + ")"; }

    public User(String nome) { this.nome = nome; } // @RequiredArgsConstructor
}
```

---

## 📦 Hibernate

### O que é
Implementação do JPA (Java Persistence API) — faz o mapeamento entre classes Java e tabelas do banco de dados relacionais.

### Pra que serve
Escrever zero SQL para operações básicas — você manipula objetos Java e o Hibernate traduz pra INSERT, SELECT, UPDATE, DELETE.

### Fluxo
```
objeto Java (@Entity)
        ↓
Hibernate gera SQL automaticamente
        ↓
banco de dados executa e devolve resultado
```

### Exemplo
```java
@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_completo", nullable = false, length = 100)
    private String nome;

    @Column(unique = true, nullable = false)
    private String email;
}
```

### 🔍 Tabela mastigada — Anotações de Mapeamento

| Anotação | O que faz | Pra onde vai | Conecta com | Pra que existe |
|----------|-----------|--------------|-------------|----------------|
| `@Entity` | Marca a classe como entidade gerenciada pelo JPA | Hibernate/JPA | `@Table`, `@Id` | Diz ao Hibernate que essa classe vira tabela |
| `@Table(name="x")` | Define o nome da tabela no banco | DDL gerado | `@Entity` | Quando o nome da classe difere da tabela |
| `@Id` | Marca o campo como chave primária | Hibernate | `@GeneratedValue` | Toda entidade precisa de PK |
| `@GeneratedValue(strategy=...)` | Define como a PK é gerada | Banco de dados | `@Id` | AUTO: Hibernate decide / IDENTITY: auto_increment / SEQUENCE: sequence do banco |
| `@Column(name="x")` | Mapeia campo para coluna específica | DDL/DML gerado | Qualquer campo | Customizar nome, tamanho, nullable da coluna |
| `@Transient` | Campo ignorado pelo Hibernate | Nada — não vai pro banco | Campos calculados | Ter campos na classe que não persistem |
| `@Enumerated(EnumType.STRING)` | Salva o enum como texto no banco | Coluna VARCHAR | Campos `enum` | Evitar salvar número (ORDINAL) que quebra ao reordenar |
| `@Temporal(TemporalType.DATE)` | Define precisão de data/hora | Coluna DATE/TIME/TIMESTAMP | `java.util.Date` | Controle do tipo de data (legado — prefira `LocalDate`) |
| `@Lob` | Salva como BLOB/CLOB (conteúdo grande) | Coluna LOB | `byte[]`, `String` longa | Armazenar arquivos, textos longos |
| `@CreationTimestamp` | Preenche automaticamente na criação | Campo de data | `LocalDateTime` | Não precisar setar `createdAt` manualmente |
| `@UpdateTimestamp` | Atualiza automaticamente em cada save | Campo de data | `LocalDateTime` | Auditoria de última modificação |

### 🔍 Tabela mastigada — Relacionamentos

| Anotação | O que faz | Tipo SQL | Exemplo real | Dono do relacionamento |
|----------|-----------|----------|-------------|----------------------|
| `@OneToOne` | 1 para 1 entre entidades | JOIN com FK única | User ↔ Perfil | Quem tem `@JoinColumn` |
| `@OneToMany` | 1 para N (lista) | FK na tabela filha | Pedido → List&lt;Item&gt; | Lado `@ManyToOne` (filha) |
| `@ManyToOne` | N para 1 | FK na tabela atual | Item → Pedido | Quem tem `@JoinColumn` |
| `@ManyToMany` | N para N | Tabela intermediária | User ↔ Role | Quem tem `@JoinTable` |
| `@JoinColumn(name="x")` | Define a FK no banco | Coluna FK | `pedido_id` na tabela item | Define qual coluna é a FK |
| `@JoinTable` | Define a tabela intermediária do ManyToMany | Tabela extra | `user_roles` | Nomear e configurar a tabela de junção |

### 🔍 Fetch e Cascade

| Opção | O que faz | Quando usar | Quando NÃO usar |
|-------|-----------|-------------|-----------------|
| `FetchType.LAZY` | Carrega o relacionamento só quando acessado | Relacionamentos grandes, listas | Quando você sempre precisa do dado junto |
| `FetchType.EAGER` | Carrega junto com a entidade pai sempre | `@ManyToOne` simples | Listas grandes — causa N+1 |
| `CascadeType.ALL` | Propaga todas as operações (save, delete...) | Parent total responsável pelo filho | Quando filho tem vida própria |
| `CascadeType.PERSIST` | Propaga só o save | Criar pai e filho juntos | — |
| `CascadeType.REMOVE` | Propaga só o delete | Filho não existe sem o pai | Filho compartilhado entre pais |
| `orphanRemoval = true` | Deleta filho se removido da coleção | Composição forte | Relacionamentos compartilhados |

### 🧠 Por baixo
```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────         ──────────────────
objeto Java modificado →   Hibernate detecta mudança    →     SQL gerado e executado
dentro de uma              via dirty checking no               no banco automaticamente
@Transactional             EntityManager (Session)
```

```java
// O que você escreve:
usuario.setNome("João");

// O que o Hibernate executa no commit da transação:
// UPDATE usuarios SET nome_completo = 'João' WHERE id = 1;
```

---

## 📦 JPA — Queries

### O que é
Interface padrão Java para persistência — define como escrever queries usando JPQL, Criteria API ou métodos derivados do Spring Data.

### Pra que serve
Escrever queries sem depender de SQL específico de banco — troca MySQL por PostgreSQL sem mudar o código.

### Fluxo
```
método no Repository / query JPQL
        ↓
JPA/Hibernate traduz pra SQL do banco configurado
        ↓
resultado mapeado de volta pra objetos Java
```

### Exemplo
```java
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    List<Usuario> findByNome(String nome);
    Optional<Usuario> findByEmailAndAtivo(String email, boolean ativo);
    List<Usuario> findByIdadeGreaterThanOrderByNomeAsc(int idade);

    @Query("SELECT u FROM Usuario u WHERE u.email LIKE %:dominio%")
    List<Usuario> buscarPorDominio(@Param("dominio") String dominio);
}
```

### 🔍 Tabela mastigada — Métodos Derivados (Spring Data)

| Palavra-chave | O que gera | Exemplo de método | SQL equivalente |
|---------------|-----------|-------------------|-----------------|
| `findBy` | SELECT WHERE | `findByNome(String n)` | `WHERE nome = ?` |
| `findAllBy` | SELECT todos WHERE | `findAllByAtivo(boolean a)` | `WHERE ativo = ?` |
| `countBy` | COUNT WHERE | `countByAtivo(boolean a)` | `SELECT COUNT(*) WHERE ativo = ?` |
| `existsBy` | EXISTS WHERE | `existsByEmail(String e)` | `SELECT COUNT(*) > 0 WHERE email = ?` |
| `deleteBy` | DELETE WHERE | `deleteByNome(String n)` | `DELETE WHERE nome = ?` |
| `And` | WHERE x AND y | `findByNomeAndEmail` | `WHERE nome = ? AND email = ?` |
| `Or` | WHERE x OR y | `findByNomeOrEmail` | `WHERE nome = ? OR email = ?` |
| `GreaterThan` | `>` | `findByIdadeGreaterThan(int n)` | `WHERE idade > ?` |
| `LessThan` | `<` | `findByIdadeLessThan(int n)` | `WHERE idade < ?` |
| `Between` | BETWEEN | `findByIdadeBetween(int a, int b)` | `WHERE idade BETWEEN ? AND ?` |
| `Like` | LIKE | `findByNomeLike(String p)` | `WHERE nome LIKE ?` (você passa o %) |
| `Containing` | LIKE %x% | `findByNomeContaining(String s)` | `WHERE nome LIKE '%s%'` |
| `StartingWith` | LIKE x% | `findByNomeStartingWith(String s)` | `WHERE nome LIKE 's%'` |
| `In` | IN (...) | `findByIdIn(List<Long> ids)` | `WHERE id IN (?,?,?)` |
| `IsNull` | IS NULL | `findByEmailIsNull()` | `WHERE email IS NULL` |
| `IsNotNull` | IS NOT NULL | `findByEmailIsNotNull()` | `WHERE email IS NOT NULL` |
| `OrderBy...Asc` | ORDER BY ASC | `findByAtivoOrderByNomeAsc` | `ORDER BY nome ASC` |
| `OrderBy...Desc` | ORDER BY DESC | `findByAtivoOrderByNomeDesc` | `ORDER BY nome DESC` |
| `Top` / `First` | LIMIT | `findTop3ByAtivo` | `LIMIT 3` |

### 🔍 Tabela mastigada — @Query JPQL

| Tipo | Exemplo | Quando usar |
|------|---------|-------------|
| JPQL simples | `@Query("SELECT u FROM Usuario u WHERE u.nome = :nome")` | Query que método derivado não consegue expressar |
| JPQL com JOIN | `@Query("SELECT u FROM Usuario u JOIN u.pedidos p WHERE p.total > :valor")` | Filtrar pela entidade relacionada |
| Native Query | `@Query(value = "SELECT * FROM usuarios WHERE ...", nativeQuery = true)` | SQL específico do banco, funções nativas |
| Update/Delete | `@Modifying @Query("UPDATE Usuario u SET u.ativo = false WHERE u.id = :id")` | Atualização em massa sem carregar objetos |
| Projeção | `@Query("SELECT u.nome, u.email FROM Usuario u")` | Buscar só alguns campos (retorna `Object[]` ou interface) |

### 🔍 Tabela mastigada — Anotações de Query

| Anotação | O que faz | Pra que existe |
|----------|-----------|----------------|
| `@Query` | Define JPQL ou SQL nativo no método | Queries complexas além do método derivado |
| `@Param("x")` | Nomeia parâmetro para usar `:x` no JPQL | Deixar a query legível com parâmetros nomeados |
| `@Modifying` | Indica que a query altera dados (UPDATE/DELETE) | Obrigatório com `@Query` que não é SELECT |
| `@Transactional` | Envolve o método numa transação | UPDATE/DELETE exigem transação ativa |
| `Pageable` | Parâmetro que adiciona paginação | `findAll(Pageable p)` → retorna `Page<T>` |
| `Sort` | Parâmetro de ordenação dinâmica | `findByAtivo(boolean a, Sort s)` |

### 🧠 Por baixo
```
[antes]                    [durante]                          [depois]
──────────────────         ──────────────────────────         ──────────────────
findByNomeContaining  →    Spring Data gera proxy em     →    SQL: WHERE nome
("João")                   runtime que traduz o nome          LIKE '%João%'
                           do método pra JPQL/SQL             resultado → List<Usuario>
```

```java
// Sem Spring Data (puro JPA):
TypedQuery<Usuario> query = em.createQuery(
    "SELECT u FROM Usuario u WHERE u.nome LIKE :nome", Usuario.class
);
query.setParameter("nome", "%" + nome + "%");
List<Usuario> resultado = query.getResultList();

// Com Spring Data (equivalente):
List<Usuario> resultado = repo.findByNomeContaining(nome);
```

---

## 🔗 Conectando tudo

```java
// Entidade com Lombok + Hibernate
@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(unique = true, nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    private Status status;

    @CreationTimestamp
    private LocalDateTime criadoEm;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Pedido> pedidos;
}

// Repository com Spring Data JPA
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);
    List<Usuario> findByStatusOrderByNomeAsc(Status status);

    @Query("SELECT u FROM Usuario u WHERE SIZE(u.pedidos) > :qtd")
    List<Usuario> comMaisDePedidos(@Param("qtd") int qtd);
}
```

| Peça | Papel aqui | Por que assim |
|------|------------|---------------|
| `@Data` + `@Builder` | Gera todo boilerplate + construção fluente | Sem Lombok seriam ~40 linhas extras |
| `@NoArgsConstructor` | JPA instancia a classe sem argumentos | JPA exige construtor vazio — sem isso quebra |
| `@Entity` + `@Table` | Liga a classe à tabela `usuarios` | Nome da classe ≠ nome da tabela |
| `FetchType.LAZY` nos pedidos | Não carrega pedidos junto com o usuário | Lista pode ter milhares de registros |
| `CascadeType.ALL` | Salvar/deletar usuário propaga pros pedidos | Pedido não existe sem usuário |
| `@Query` com `SIZE()` | JPQL — não existe em método derivado | Filtrar por tamanho de coleção não tem palavra-chave no Spring Data |

---

## 📋 Referência rápida

| Conceito | O que é | Quando usar | Quando NÃO usar |
|----------|---------|-------------|-----------------|
| `@Data` | Atalho pra getter+setter+toString+equals | DTOs, POJOs simples | Entidades JPA — `@EqualsAndHashCode` em entidade causa problema com lazy loading |
| `@Builder` | Construção fluente de objeto | Objetos com muitos campos opcionais | Classes simples com 1-2 campos |
| `@Entity` | Mapeia classe para tabela | Toda entidade persistida | Classes de transferência (DTOs) — use sem `@Entity` |
| `FetchType.LAZY` | Carrega relacionamento sob demanda | Listas, relacionamentos pesados | Quando sempre precisa do dado (vai gerar N+1) |
| `FetchType.EAGER` | Carrega junto com o pai | `@ManyToOne` simples e sempre necessário | Coleções — mata performance |
| Método derivado | Query gerada pelo nome do método | Queries simples com 1-3 filtros | Queries complexas com JOIN — use `@Query` |
| `@Query` JPQL | Query manual orientada a objetos | Queries complexas, JOINs, funções | Quando método derivado já resolve |
| `nativeQuery=true` | SQL puro do banco | Funções específicas do banco, performance crítica | Quando precisar trocar de banco depois |
| `CascadeType.ALL` | Propaga tudo pro filho | Composição forte (filho não existe sem pai) | Entidades compartilhadas entre pais diferentes |
