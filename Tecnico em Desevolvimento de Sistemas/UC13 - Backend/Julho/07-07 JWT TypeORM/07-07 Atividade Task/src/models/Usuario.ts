import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Task } from "./task";

@Entity("Usuario")
export class Usuario {

@PrimaryGeneratedColumn()
id:number

@Column({length:100, nullable:true , type: "varchar"})
nome:string

@Column({length:100, nullable:true , type: "varchar",unique:true})
email:string

@Column({length:255, nullable:true , default: 0, type: "varchar"})
password:string

@OneToMany(() => Task, (task) => task.usuario)
tasks!: Task[];

}
