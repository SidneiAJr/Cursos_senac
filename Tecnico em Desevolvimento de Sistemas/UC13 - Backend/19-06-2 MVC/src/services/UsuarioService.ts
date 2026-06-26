import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { Usuarios } from "../models/Usuario";

export class UsuarioService {
    private repository: UsuarioRepository;

    constructor() {
        this.repository = new UsuarioRepository();
    }

    async criarUsuario() {
        const usuario = new Usuarios();
        return await this.repository.create(usuario);
    }

    async listarUsuarios() {
        return await this.repository.findAll();
    }

    async buscarPorId(id: number) {
        return await this.repository.findById(id);
    }

    async atualizarUsuario(id: number, email: string) {
        return await this.repository.update(id, { email });
    }

    async deletarUsuario(id: number){
        return await this.repository.delete(id);
    }
}