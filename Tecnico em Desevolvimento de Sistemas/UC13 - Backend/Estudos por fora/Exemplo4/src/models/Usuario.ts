import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";  // 👈 ESSENCIAL!

@Entity("Usuarios")
export class Usuario {
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({ length: 55, unique: true })
    Email: string;

    @Column({ length: 255 })
    Password: string;

    constructor(Email: string, Password: string) {
        this.Email = Email;
        this.Password = Password;
    }
}