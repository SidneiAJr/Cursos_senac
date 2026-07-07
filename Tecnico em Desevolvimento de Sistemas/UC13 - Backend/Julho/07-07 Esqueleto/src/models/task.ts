import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("Task")
export class Usuario {

@PrimaryGeneratedColumn()
id:number

@Column({length:100, nullable:true , type: "varchar"})
title:string

@Column({length:100, nullable:true , type: "varchar"})
descricao:string

}
