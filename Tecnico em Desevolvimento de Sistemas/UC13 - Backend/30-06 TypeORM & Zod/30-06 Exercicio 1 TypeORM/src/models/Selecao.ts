import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm";
import { Jogador } from "./Jogador";

@Entity("Selecao")
export class Selecao {

@PrimaryGeneratedColumn()
id!: number;

@Column({type: "varchar" ,length: 50 , nullable: false , unique:true})
nome: string;

@Column({type: "varchar", length: 50 , nullable: false , unique:true})
pais:string

@Column({type: "varchar",length: 150 , nullable:false, unique:true})
tecnico:string

@Column({type: "int", nullable: false })
rankingFifa!: number;

@Column({type: "date", nullable: true })
anoFundacao?: Date;

 @OneToMany(() => Jogador, (jogador) => jogador.selecao)
jogadores: Jogador[];

}
