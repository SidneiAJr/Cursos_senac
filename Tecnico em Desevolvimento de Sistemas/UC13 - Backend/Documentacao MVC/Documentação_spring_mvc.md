# **Assunto:** Entity — Mapeamento de classe Java para tabela SQL (JPA/Hibernate)

### O que é
Classe anotada com `@Entity` que o JPA usa para mapear campos Java ↔ colunas SQL e gerar queries automaticamente.

### Pra que serve
Substitui SQL DDL manual — você define a estrutura uma vez na classe e o Hibernate sabe criar queries, joins e validar tipos.

### Fluxo
```
Classe Post anotada com @Entity
        ↓
JPA infere tabela 'post' (nome da classe em lowercase)
        ↓
@Column define restrições (nullable, length, unique)
        ↓
@ManyToOne / @OneToMany definem relacionamentos (FK)
```

### Exemplo
```java
// src/main/java/com/exemplo/models/Post.java
package com.exemplo.models;

import jakarta.persistence.*;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, nullable = false)
    private String title;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}
```

```java
// src/main/java/com/exemplo/models/User.java
package com.exemplo.models;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;

@Entity
@Table(name = "usuarios")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 100, unique = true, nullable = false)
    private String nome;

    @Column(length = 150, unique = true, nullable = false)
    private String email;

    @Column(length = 255, nullable = false)
    @JsonIgnore
    private String password;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Post> posts;

    // Getters e Setters
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe | Melhoria |
|------------------|-----------|--------------|-------------|----------------|----------|
| `@Entity` | Marca a classe como tabela gerenciada pelo JPA | Hibernate/JPA internamente | persistence.xml / auto-scan | Sem ela, JPA ignora a classe | — |
| `@Table(name = "posts")` | Define o nome da tabela explicitamente | DDL SQL | Migration / schema | Sem isso, JPA usa o nome da classe | Necessário quando foge da convenção |
| `@Id` | Define a chave primária | Coluna PK | JPA identity tracking | Obrigatório em toda entidade JPA | — |
| `@GeneratedValue(IDENTITY)` | PK auto-increment delegado ao banco | MySQL AUTO_INCREMENT | Banco de dados | Equivalente ao `@PrimaryGeneratedColumn()` do TypeORM | Usar `UUID` para APIs públicas |
| `@Column(nullable = false)` | NOT NULL no banco | DDL da tabela | Schema SQL | Integridade de dados | Combinar com Bean Validation (`@NotNull`) |
| `@JsonIgnore` | Exclui o campo da serialização JSON | Response da API | Jackson (serializer) | Equivalente ao `select: false` do TypeORM / `$hidden` do Laravel | Usar DTOs no lugar |
| `@ManyToOne` + `@JoinColumn` | FK — Post pertence a um User | Coluna `user_id` no banco | User entity | Relacionamento N:1 | — |
| `@OneToMany(mappedBy = "user")` | User tem muitos Posts | Lista carregada com JOIN | Post.user | Relacionamento 1:N — acesso reverso | `fetch = FetchType.LAZY` para não carregar sempre |

### 🧠 Por baixo

```
[antes]                         [durante]                              [depois]
──────────────────              ──────────────────────────             ──────────────────
application.properties config   Hibernate lê anotações via reflection  Mapa interno: classe ↔ tabela
@SpringBootApplication sobe     Registra entidades no contexto JPA     Queries geradas automaticamente
ddl-auto define sync/migration  Cria/valida schema conforme config      FK criada no banco (user_id)
```

---

# **Assunto:** application.properties — Configuração de banco e JPA

### O que é
Arquivo de configuração que centraliza datasource, credenciais e comportamento do JPA — equivalente ao `.env` + `DataSource` do TypeORM.

### Pra que serve
Sem ele, o Spring não sabe com qual banco conectar nem como tratar o schema.

### Fluxo
```
application.properties na raiz de resources/
        ↓
Spring Boot carrega automaticamente no startup
        ↓
DataSource é criado com as configs
        ↓
JPA/Hibernate conecta e valida o schema
```

### Exemplo
```properties
# src/main/resources/application.properties

# Datasource
spring.datasource.url=jdbc:mysql://localhost:3306/meuprojeto
spring.datasource.username=${DB_USER}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
```

```properties
# application-dev.properties (perfil de desenvolvimento)
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe | Melhoria |
|------------------|-----------|--------------|-------------|----------------|----------|
| `spring.datasource.url` | Define host, porta e banco da conexão | Pool de conexões (HikariCP) | MySQL | Equivalente ao `host + port + database` do DataSource TS | — |
| `${DB_USER}` | Lê variável de ambiente em runtime | `datasource.username` | SO / container env vars | Evita hardcodar credenciais | Usar Spring Vault / AWS Secrets em prod |
| `ddl-auto=validate` | Valida schema contra as entidades, sem alterar | Startup do contexto | Hibernate + banco | Equivalente ao `synchronize: false` do TypeORM | Usar Flyway/Liquibase para migrations reais |
| `ddl-auto=update` | Altera schema automaticamente (dev only) | Tabelas no banco | Hibernate | Equivalente ao `synchronize: true` — ⚠️ nunca em prod | — |
| `show-sql=true` | Loga queries SQL no console | Console / log | Hibernate | Equivalente ao `logging: true` do TypeORM | Usar logging estruturado em prod |
| `database-platform` | Define o dialeto SQL | Queries geradas | Hibernate | Cada banco tem sintaxe diferente — MySQL, PostgreSQL, etc | — |

### 🧠 Por baixo

```
[antes]                         [durante]                              [depois]
──────────────────              ──────────────────────────             ──────────────────
application.properties existe   Spring Boot auto-configura DataSource  HikariCP pool pronto
Variáveis de ambiente setadas   Hibernate valida schema (ddl-auto)     JPA EntityManager ativo
                                Dialeto MySQL carregado                Pronto pra queries
```

---

# **Assunto:** Repository — Interface JPA que gera queries automaticamente

### O que é
Interface que estende `JpaRepository` — o Spring Data JPA implementa os métodos em runtime sem você escrever SQL.

### Pra que serve
Equivalente ao `PostRepository.ts` — centraliza acesso ao banco. Aqui você nem precisa implementar: só declarar a interface.

### Fluxo
```
Interface PostRepository extends JpaRepository<Post, Long>
        ↓
Spring Data gera implementação em runtime
        ↓
Métodos herdados: findAll, findById, save, delete
        ↓
Métodos customizados por nome: findByTitle, findByUserId
```

### Exemplo
```java
// src/main/java/com/exemplo/repositories/PostRepository.java
package com.exemplo.repositories;

import com.exemplo.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    // Spring gera: SELECT * FROM posts WHERE user_id = ?
    List<Post> findByUserId(Long userId);

    // JPQL customizado com JOIN FETCH (eager loading explícito)
    @Query("SELECT p FROM Post p JOIN FETCH p.user WHERE p.id = :id")
    Post findByIdWithUser(Long id);
}
```

```java
// src/main/java/com/exemplo/repositories/UserRepository.java
package com.exemplo.repositories;

import com.exemplo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe | Melhoria |
|------------------|-----------|--------------|-------------|----------------|----------|
| `extends JpaRepository<Post, Long>` | Herda findAll, findById, save, delete, etc | Implementação gerada em runtime | Spring Data JPA | Sem implementar nada, você já tem CRUD completo | — |
| `<Post, Long>` | Tipo da entidade + tipo da PK | Métodos tipados | Post.id (Long) | JPA precisa saber a entidade e o tipo do ID | — |
| `findByUserId(Long userId)` | Spring gera query a partir do nome do método | `SELECT * FROM posts WHERE user_id = ?` | Convenção Spring Data | Evita JPQL manual para queries simples | — |
| `@Query("SELECT p FROM Post p ...")` | JPQL customizado quando a convenção não resolve | Query específica | Hibernate | Controle total da query sem SQL nativo | Usar `nativeQuery = true` pra SQL puro |
| `JOIN FETCH p.user` | Carrega o relacionamento na mesma query | Evita N+1 | Post.user (ManyToOne) | Equivalente ao `relations: ['user']` do TypeORM | — |
| `Optional<User>` | Retorna presente/ausente sem null | `.orElseThrow(...)` no Service | Service layer | Evita NullPointerException — Java idiomático | — |

### 🧠 Por baixo

```
[antes]                         [durante]                              [depois]
──────────────────              ──────────────────────────             ──────────────────
Interface declarada             Spring Data cria proxy em runtime      Bean injetável disponível
Spring context sobe             Implementa cada método via reflection  findAll() gera SELECT *
                                Métodos por nome viram queries JPQL    save() faz INSERT ou UPDATE
```

---

# **Assunto:** Service — Lógica de negócio no Spring Boot

### O que é
Classe anotada com `@Service` que contém as regras de negócio — valida existência de registros, orquestra repositories e lança exceções semânticas.

### Pra que serve
Mesma responsabilidade do `PostService.ts` e `PostService.php` — Controller fica burro (só HTTP), Repository fica burro (só SQL).

### Fluxo
```
Controller chama PostService.create(dto)
        ↓
Service valida se User existe (lança exceção se não)
        ↓
Cria Post, seta relacionamento
        ↓
Chama postRepository.save(post)
        ↓
Retorna Post salvo
```

### Exemplo
```java
// src/main/java/com/exemplo/services/PostService.java
package com.exemplo.services;

import com.exemplo.dtos.CreatePostDTO;
import com.exemplo.exceptions.ResourceNotFoundException;
import com.exemplo.models.Post;
import com.exemplo.models.User;
import com.exemplo.repositories.PostRepository;
import com.exemplo.repositories.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;
    private final UserRepository userRepository;

    public PostService(PostRepository postRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    public List<Post> listAll() {
        return postRepository.findAll();
    }

    public Post getById(Long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Post não encontrado"));
    }

    public Post create(CreatePostDTO dto) {
        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado"));

        Post post = new Post();
        post.setTitle(dto.getTitle());
        post.setUser(user);

        return postRepository.save(post);
    }

    public void delete(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Post não encontrado"));
        postRepository.delete(post);
    }

    public Post update(Long id, CreatePostDTO dto) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Post não encontrado"));

        if (dto.getTitle() != null) post.setTitle(dto.getTitle());
        if (dto.getUserId() != null) {
            User user = userRepository.findById(dto.getUserId())
                    .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado"));
            post.setUser(user);
        }

        return postRepository.save(post);
    }
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe | Melhoria |
|------------------|-----------|--------------|-------------|----------------|----------|
| `@Service` | Marca como bean gerenciado pelo Spring DI | Injetável em controllers | Spring IoC Container | Spring sabe que pode injetar essa classe | — |
| Construtor com dependências | Injeção de dependência via construtor | Campos `final` | Spring DI | Equivalente ao `__construct` do Laravel — Spring injeta automaticamente | Preferível a `@Autowired` no campo |
| `.orElseThrow(...)` | Lança exceção se Optional estiver vazio | `ResourceNotFoundException` | Exception Handler | Equivalente ao `throw new NotFoundError` do TS / `findOrFail` do Laravel | — |
| `postRepository.save(post)` | INSERT se novo, UPDATE se já tem ID | Banco via JPA | JPA EntityManager | Equivalente ao `repository.save()` do TypeORM | — |
| `CreatePostDTO dto` | Recebe dados desacoplados da entidade | Campos do DTO | Controller | Evita expor a entidade direto no endpoint | — |
| `if (dto.getTitle() != null)` | Só atualiza campo se foi enviado | Entidade `post` | PATCH semântico | Equivalente ao `if (data.title) post.title = data.title` do TS | — |

### 🧠 Por baixo

```
[antes]                         [durante]                              [depois]
──────────────────              ──────────────────────────             ──────────────────
Controller chamou com DTO       Service busca entidades (orElseThrow)  Objeto Post retornado
já validado pelo @Valid          Aplica regras de negócio               ao Controller → ResponseEntity
                                Chama repository.save() para persistir ou exceção → ExceptionHandler
```

---

# **Assunto:** Controller — Camada HTTP no Spring Boot

### O que é
Classe anotada com `@RestController` que mapeia rotas HTTP para chamadas de serviço e retorna `ResponseEntity<>` com status e body JSON.

### Pra que serve
Equivalente ao `PostController.ts` e `PostController.php` — só sabe de HTTP, delega tudo pro Service.

### Fluxo
```
Requisição HTTP chega na rota
        ↓
@RequestMapping / @GetMapping / etc faz match
        ↓
@Valid valida o body automaticamente
        ↓
Controller chama PostService.método(...)
        ↓
Retorna ResponseEntity com status + body
```

### Exemplo
```java
// src/main/java/com/exemplo/controllers/PostController.java
package com.exemplo.controllers;

import com.exemplo.dtos.CreatePostDTO;
import com.exemplo.models.Post;
import com.exemplo.services.PostService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public ResponseEntity<List<Post>> list() {
        return ResponseEntity.ok(postService.listAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getById(@PathVariable Long id) {
        return ResponseEntity.ok(postService.getById(id));
    }

    @PostMapping
    public ResponseEntity<Post> create(@Valid @RequestBody CreatePostDTO dto) {
        Post post = postService.create(dto);
        return ResponseEntity.status(201).body(post);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        postService.delete(id);
        return ResponseEntity.noContent().build(); // 204
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Post> update(@PathVariable Long id,
                                       @RequestBody CreatePostDTO dto) {
        return ResponseEntity.ok(postService.update(id, dto));
    }
}
```

### 🔍 Tabela mastigada

| Linha / Elemento | O que faz | Pra onde vai | Conecta com | Pra que existe | Melhoria |
|------------------|-----------|--------------|-------------|----------------|----------|
| `@RestController` | `@Controller` + `@ResponseBody` — serializa retorno pra JSON | Jackson serializa automaticamente | Jackson | Sem precisar de `res.json()` explícito | — |
| `@RequestMapping("/posts")` | Prefixo base para todas as rotas da classe | Mapeamento de rotas | Router do Spring | Evita repetir `/posts` em cada método | — |
| `@GetMapping`, `@PostMapping`, etc | Mapeamento de método HTTP + path | Handler do request | DispatcherServlet | Equivalente ao `routes.get(...)` do Express | — |
| `@PathVariable Long id` | Extrai `{id}` da URL já convertido pra Long | Parâmetro do método | URL path | Equivalente ao `Number(req.params.id)` — sem `isNaN` manual | — |
| `@Valid @RequestBody CreatePostDTO dto` | Desserializa body JSON e valida anotações do DTO | Service | Bean Validation (Jakarta) | `@Valid` dispara validação do DTO automaticamente | — |
| `ResponseEntity.ok(...)` | Resposta com status 200 + body | Resposta HTTP | Cliente | Equivalente ao `res.status(200).json(...)` | — |
| `ResponseEntity.noContent().build()` | Resposta 204 sem body | Resposta HTTP | Cliente | Padrão REST para DELETE bem-sucedido | — |

### 🧠 Por baixo

```
[antes]                         [durante]                              [depois]
──────────────────              ──────────────────────────             ──────────────────
DispatcherServlet recebeu req   @Valid dispara Bean Validation no DTO  ResponseEntity enviado
Spring resolveu qual controller @PathVariable converte tipo            ou exceção → ExceptionHandler
injetar via DI                  Controller chama Service limpo         Jackson serializa pra JSON
```

---

# **Assunto:** DTO + Bean Validation — Validação de input no Spring Boot

### O que é
Classe simples (POJO) com anotações de validação (`@NotNull`, `@Size`, etc.) que representa o body da requisição — desacoplada da entidade.

### Pra que serve
Equivalente ao Zod schema + `validatePost` middleware do TS / Form Request do Laravel — valida antes de chegar no Service.

### Exemplo
```java
// src/main/java/com/exemplo/dtos/CreatePostDTO.java
package com.exemplo.dtos;

import jakarta.validation.constraints.*;

public class CreatePostDTO {

    @NotBlank(message = "Título é obrigatório")
    @Size(min = 1, max = 100, message = "Título deve ter entre 1 e 100 caracteres")
    private String title;

    @NotNull(message = "userId é obrigatório")
    @Positive(message = "userId deve ser positivo")
    private Long userId;

    // Getters e Setters
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
}
```

```java
// src/main/java/com/exemplo/dtos/CreateUserDTO.java
public class CreateUserDTO {

    @NotBlank(message = "Nome é obrigatório")
  