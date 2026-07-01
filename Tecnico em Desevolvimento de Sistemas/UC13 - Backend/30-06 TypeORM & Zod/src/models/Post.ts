import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./Usuario"; 

@Entity('posts')  // ✅ Nome da tabela no banco
export class Post {
    @PrimaryGeneratedColumn()  // ✅ Chave primária auto-increment
    id!: number;

    @Column({ type: "varchar", length: 100, nullable: false })  // ✅ Título obrigatório
    title!: string;

    @ManyToOne(() => User, (user) => user.posts)  // ✅ Muitos posts pertencem a um usuário
    user!: User;
}