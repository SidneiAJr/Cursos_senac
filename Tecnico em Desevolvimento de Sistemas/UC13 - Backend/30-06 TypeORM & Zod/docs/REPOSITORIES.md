# 🗄️ Repositories

> Gerado automaticamente pelo **Albertool DocGen**

---

## 🎯 PostRepository

**Arquivo:** `PostRepository.ts`

**Tipo:** `TypeORM`

**Entidade:** `Post`

### 📋 Métodos

| Método | Parâmetros | Retorno | Descrição |
|--------|------------|---------|-----------|
| `create` | `usuario:Post` | `void` |  |
| `buscarTodos` | `—` | `Promise<Post[]>` |  |
| `buscarPorId` | `id:number` | `Promise<Post | null>` |  |
| `buscarPorTitulo` | `title: string` | `Promise<Post | null>` |  |
| `atualizar` | `usuario: Post` | `Promise<Post>` |  |
| `deletar` | `id: number` | `Promise<void>` |  |

### 📄 Código Fonte

<details>
<summary>📂 Clique para ver o código</summary>

```typescript
import { Post } from "../models/Post";
import { AppDataSource } from "../config/database";

export class PostRepositor {
      private repository = AppDataSource.getRepository(Post);

   async create(usuario:Post){
     const saved = await this.repository.save(usuario);
     return saved;
   }

    async buscarTodos(): Promise<Post[]> {
        return await this.repository.find();
    }

    async buscarPorId(id:number): Promise<Post | null> {
        return await this.repository.findOneBy({ id:id });
    }

    async buscarPorTitulo(title: string): Promise<Post | null> {
        return await this.repository.findOneBy({ title: title });
    }

    async atualizar(usuario: Post): Promise<Post> {
        return await this.repository.save(usuario);
    }

    async deletar(id: number): Promise<void> {
        await this.repository.delete(id);
    }

}

```

</details>

---

## 🎯 UsuarioRepository

**Arquivo:** `UsuarioRepository.ts`

**Tipo:** `TypeORM`

**Entidade:** `User`

### 📋 Métodos

| Método | Parâmetros | Retorno | Descrição |
|--------|------------|---------|-----------|
| `create` | `usuario:User` | `void` |  |
| `buscarTodos` | `—` | `Promise<User[]>` |  |
| `buscarPorId` | `id: number` | `Promise<User | null>` |  |
| `buscarPorEmail` | `email: string` | `Promise<User | null>` |  |
| `atualizar` | `usuario: User` | `Promise<User>` |  |
| `deletar` | `id: number` | `Promise<void>` |  |

### 📄 Código Fonte

<details>
<summary>📂 Clique para ver o código</summary>

```typescript
import { User } from "../models/Usuario";
import { AppDataSource } from "../config/database";

export class UsuarioRepository {
      private repository = AppDataSource.getRepository(User);

   async create(usuario:User){
     const saved = await this.repository.save(usuario);
     return saved;
   }

    async buscarTodos(): Promise<User[]> {
        return await this.repository.find();
    }

    async buscarPorId(id: number): Promise<User | null> {
        return await this.repository.findOneBy({ id: id });
    }

    async buscarPorEmail(email: string): Promise<User | null> {
        return await this.repository.findOneBy({ email: email });
    }

    async atualizar(usuario: User): Promise<User> {
        return await this.repository.save(usuario);
    }

    async deletar(id: number): Promise<void> {
        await this.repository.delete(id);
    }

}

```

</details>

---

