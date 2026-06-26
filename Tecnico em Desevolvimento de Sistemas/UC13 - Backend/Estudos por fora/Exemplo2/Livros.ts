import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    saldo: number;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    credito_disponivel: number;

    @Column({ length: 14, unique: true })
    cpf: string;

    @Column({ length: 100 })
    nome: string;

    @Column({ type: "text", nullable: true })
    observacao: string;
}
