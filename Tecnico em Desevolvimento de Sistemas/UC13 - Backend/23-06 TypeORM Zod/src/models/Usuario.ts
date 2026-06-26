import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity("Usuario")
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100 , nullable: false})
  nome_usuario: string;

  @Column({type:"int" ,nullable: false})
  idade_usuario: number;

  @Column({length: 100 , nullable: false})
  email: string

  @Column({length:100 ,nullable: false})
  info:string
}
