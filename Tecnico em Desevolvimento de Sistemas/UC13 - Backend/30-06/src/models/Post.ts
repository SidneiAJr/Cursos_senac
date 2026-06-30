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