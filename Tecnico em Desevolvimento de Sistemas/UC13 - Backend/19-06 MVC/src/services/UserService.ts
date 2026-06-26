import { pool } from "../config/database";
import { Usuario } from "../models/User";
import bcrypt from 'bcrypt';  

export class UsuarioService {
    async create(email: string, password: string) {
        if (email.length === 0 || password.length === 0) {
            throw new Error("Informação nao podem estar vazias")
        }
        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(password, saltRounds);

        const user = new Usuario(email, senhaCriptografada);

        const [result] = await pool.query(
            'Insert into usuarios (email,senha) values(?,?)',
            [user.getEmail(), user.getSenha()]
        )

        return result;
    }

    async update(id: number, email: string, password: string) {
        if (email.length === 0 || password.length === 0) {
            throw new Error("Informação nao podem estar vazias")
        }

        const [result]: any = await pool.query(
            'UPDATE usuarios SET email = ?, senha = ? WHERE id = ?',
            [email, password, id] 
        );

        if (result.affectedRows === 0) {
            throw new Error("Usuário não encontrado");
        }

        return result;
    }

    async updateParcial(id: number, email: string) {
        if (email.length === 0 ) {
            throw new Error("Informação nao podem estar vazias")
        }

        const [result]:any = await pool.query(
            'UPDATE usuarios SET email = ? WHERE id = ?',
            [email, id]  
        );

        if (result.affectedRows === 0) {
            throw new Error("Usuário não encontrado");
        }

        return result;
    }

    async delete(id: number) {
        if (!id || isNaN(id) || id <= 0) {
            throw new Error("ID inválido");
        }
        const [result]:any = await pool.query(
            'Delete from usuarios WHERE id = ?',
            [id]
        );

        if (result.affectedRows === 0) {
            throw new Error("Usuário não encontrado");
        }

        return result;
    }

    async findall() {
        const [rows] = await pool.query('SELECT * FROM usuarios');
        return rows;
    }

    async findID(id: number) {
        const [rows]: any = await pool.query(
            'SELECT * FROM usuarios WHERE id = ?',
            [id]
        );
        return rows[0];
    }

    async findEmail(email: string) {
        const [rows]: any = await pool.query(
            'SELECT * FROM usuarios WHERE email = ?',
            [email]
        );
        return rows[0];
    }
    
}