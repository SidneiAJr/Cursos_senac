import {Entity,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Livros{
    @PrimaryGeneratedColumn()
    id_livros: number;
    @Column({length: 150})
    nome_livro: string;
    @Column({type:"int"})
    quantidade_paginas: number;
    @Column({type: "int" , nullable: true})
    edicao_livro:number;
    @Column({type: "text", nullable: true})
    descricao: string;
}
