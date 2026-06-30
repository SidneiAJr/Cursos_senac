# 📦 Models

> Gerado automaticamente pelo **Albertool DocGen**

---

## 🎯 Post

**Arquivo:** `Post.ts`

### 📝 Campos

| Campo | Tipo | Coluna | ORM |
|-------|------|--------|-----|
| `id` | `number` | `—` | `—` |
| `length` | `100` | `length` | `` |
| `nullable` | `false` | `—` | `—` |
| `title` | `string` | `—` | `—` |
| `user` | `User` | `—` | `—` |

### 📄 Código Fonte

<details>
<summary>📂 Clique para ver o código</summary>

```typescript
import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from "typeorm";
import { User } from "./Usuario";

@Entity('posts')
export class Post{
    @PrimaryGeneratedColumn()
    id!:number
    @Column({type: "varchar", length: 100, nullable: false})
    title!: string;
    @ManyToOne(() => User, user => user.posts)
    user!: User;
}
```

</details>

---

## 🎯 Usuario

**Arquivo:** `Usuario.ts`

### 📝 Campos

| Campo | Tipo | Coluna | ORM |
|-------|------|--------|-----|
| `id` | `number` | `—` | `—` |
| `length` | `55` | `length` | `` |
| `unique` | `true` | `—` | `—` |
| `nullable` | `false` | `—` | `—` |
| `nome` | `string` | `—` | `—` |
| `email` | `string` | `—` | `—` |
| `posts` | `Post[]` | `—` | `—` |

### 📄 Código Fonte

<details>
<summary>📂 Clique para ver o código</summary>

```typescript
import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity("Usuario")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({length: 55 , unique: true, nullable:false})
    nome!:string
    @Column({length: 150 , unique:true, nullable:false})
    email!:string
    @Column({length: 255 , nullable:false})
    Password!: string

    @OneToMany(() => Post, post => post.user)
    posts!: Post[];
}

```

</details>

---

