import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Usuario")
export class Usuarios {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  email!: string;
}