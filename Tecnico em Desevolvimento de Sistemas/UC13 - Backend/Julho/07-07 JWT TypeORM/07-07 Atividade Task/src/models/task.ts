import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Usuario } from "./Usuario";

@Entity("tasks")
export class Task {

@PrimaryGeneratedColumn()
id:number

@Column({length:100, nullable:true , type: "varchar"})
title:string

@Column({length:100, nullable:true , type: "varchar"})
descricao:string

@ManyToOne(() => Usuario, (usuario) => usuario.tasks)
usuario!: Usuario;

}
