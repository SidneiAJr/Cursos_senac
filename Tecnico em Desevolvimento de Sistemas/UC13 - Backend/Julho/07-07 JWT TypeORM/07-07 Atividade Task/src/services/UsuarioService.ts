import { UsuarioRepository } from "../repositories/UsuarioRepository";

export class NotFoundError extends Error {}

export class UsuarioService {
    private repository = new UsuarioRepository();
    async create(data: { nome: string; email: string; password: string }) {

        return this.repository.create(data);
    }
    async update(id: number, data: { nome?: string; email?: string; password?: string }) {
        // Busca o usuário
        const usuario = await this.repository.listId(id);
        if (!usuario) {
            throw new NotFoundError('Usuário não encontrado.');
        }

        // Atualiza os campos
        if (data.nome) usuario.nome = data.nome;
        if (data.email) usuario.email = data.email;
        if (data.password) usuario.password = data.password;

        return this.repository.save(usuario);
    }

    async delete(id: number) {
        const usuario = await this.repository.listId(id);
        if (!usuario) {
            throw new NotFoundError('Usuário não encontrado.');
        }

        return this.repository.delete(id);
    }

    async findById(id: number) {
        const usuario = await this.repository.listId(id);
        if (!usuario) {
            throw new NotFoundError('Usuário não encontrado.');
        }
        return usuario;
    }
    async findAll() {
        return this.repository.listall();
    }
}