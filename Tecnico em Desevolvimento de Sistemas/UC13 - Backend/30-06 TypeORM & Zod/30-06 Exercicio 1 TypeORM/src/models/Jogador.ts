import { Entity, PrimaryGeneratedColumn, Column,ManyToOne } from "typeorm";
import { Selecao } from "./Selecao";

@Entity("Jogador")
export class Jogador {

@PrimaryGeneratedColumn()
id!: number;

@Column({length: 50 , nullable: false , unique:true})
nome: string;

@Column({ type: "int", nullable: false , unique:true})
numeroCamisa:number

@Column({length: 150 , nullable:false, unique:true})
posicao:string

@Column({ type: "int", nullable: false })
idade: number;

@Column({ type: "decimal", precision: 3, scale: 2, nullable: false })
altura!: number;

@Column({ type: "decimal", precision: 3, scale: 2, nullable: false })
peso!: number;

@Column({ type: "int", nullable: false })
gols: number;

@ManyToOne(() => Selecao, (selecao) => selecao.jogadores)
selecao: Selecao;
    
}
