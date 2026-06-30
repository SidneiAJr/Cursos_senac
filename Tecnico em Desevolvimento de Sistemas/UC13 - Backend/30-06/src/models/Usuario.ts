import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity("Usuario")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({length: 100 , unique: true, nullable:false})
    nome!:string
    @Column({length: 150 , unique:true, nullable:false})
    email!:string
    @Column({length: 255 , nullable:false , select: false})
    Password!: string

    @OneToMany(() => Post, post => post.user)
    posts!: Post[];
}
