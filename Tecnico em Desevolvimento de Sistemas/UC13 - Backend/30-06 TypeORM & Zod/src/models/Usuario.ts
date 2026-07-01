import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity("Usuario")  // ✅ Nome da tabela no banco
export class User {
    @PrimaryGeneratedColumn()  // ✅ Chave primária auto-increment
    id!: number;

    @Column({ length: 100, unique: true, nullable: false })  // ✅ Nome único, obrigatório
    nome!: string;

    @Column({ length: 150, unique: true, nullable: false })  // ✅ Email único, obrigatório
    email!: string;

    @Column({ length: 255, nullable: false, select: false })  // ✅ Senha não retornada em selects
    password!: string;

    @OneToMany(() => Post, (post) => post.user)  // ✅ Um usuário tem muitos posts
    posts: Post[];
}