import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity("Usuario")  // ✅ Nome da tabela no banco
export class User {
    @PrimaryGeneratedColumn()  // ✅ Chave primária auto-increment
    id: number;

    @Column({ length: 100, unique: true, nullable: false })  
    nome: string;

    @Column({ length: 150, unique: true, nullable: false }) 
    email: string;

    @Column({ length: 255, nullable: false, select: false })  
    password: string;

    @OneToMany(() => Post, (post) => post.user,{nullable:false})  
    posts: Post[];
}

