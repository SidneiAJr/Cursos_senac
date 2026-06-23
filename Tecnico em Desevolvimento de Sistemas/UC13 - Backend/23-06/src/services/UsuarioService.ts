import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { Usuario } from "../models/Usuario";

export class UsuarioService {
    private static repository = new UsuarioRepository();

    // CREATE - CORRIGIDO!
    static async createUsuario(data: { 
        nome_usuario: string; 
        idade_usuario: number; 
        email: string;
        info: string;
    }) {
        const usuario = new Usuario();
        usuario.nome_usuario = data.nome_usuario;
        usuario.idade_usuario = data.idade_usuario;
        usuario.email = data.email;
        usuario.info = data.info;

        return await this.repository.CreateUsuario(usuario);
    }

    // READ ALL
    static async getAllUsuarios() {
        return await this.repository.FindAll();
    }

    // READ BY ID
    static async getUsuarioById(id: number) {
        return await this.repository.FindID(id);
    }

    // UPDATE
    static async updateUsuario(id: number, data: { 
        nome_usuario?: string; 
        idade_usuario?: number;
        email?: string;
        info?: string;
    }) {
        const usuarioExistente = await this.repository.FindID(id);

        if (!usuarioExistente) {
            return null;
        }

        if (data.nome_usuario) usuarioExistente.nome_usuario = data.nome_usuario;
        if (data.idade_usuario) usuarioExistente.idade_usuario = data.idade_usuario;
        if (data.email) usuarioExistente.email = data.email;
        if (data.info) usuarioExistente.info = data.info;

        return await this.repository.update(usuarioExistente);
    }

    // DELETE
    static async deleteUsuario(id: number) {
        const usuarioExistente = await this.repository.FindID(id);

        if (!usuarioExistente) {
            return null;
        }

        await this.repository.Deleteuser(id);
        return usuarioExistente;
    }
}