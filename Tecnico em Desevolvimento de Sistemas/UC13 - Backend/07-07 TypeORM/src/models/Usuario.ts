import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("Usuario")
export class Usuario {
@PrimaryGeneratedColumn()
id:number

@Column({length:100, nullable:true , default: 0, type: "varchar"})

@Column({length:100, nullable:true , default: 0, type: "varchar"})

@Column({length:100, nullable:true , default: 0, type: "varchar"})

@Column({length:100, nullable:true , default: 0, type: "varchar"})

@Column({length:100, nullable:true , default: 0, type: "varchar"})

}
