import { TaskRepository } from "../repositories/TaskRepository";
import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { NotFoundError } from "./UsuarioService";

export class TaskService {
    private repository = new TaskRepository();
    private userRepository = new UsuarioRepository();

    // ============================================
    // 📝 CRIAR TASK
    // ============================================
    async create(data: { title: string; descricao: string; usuarioId: number }) {
        // Verifica se o usuário existe
        const usuario = await this.userRepository.listId(data.usuarioId);
        if (!usuario) {
            throw new NotFoundError('Usuário não encontrado.');
        }

        return this.repository.create(data);
    }

    // ============================================
    // ✏️ ATUALIZAR TASK
    // ============================================
    async update(id: number, data: { title?: string; descricao?: string }) {
        // Busca a task
        const task = await this.repository.findById(id);
        if (!task) {
            throw new NotFoundError('Task não encontrada.');
        }

        // Atualiza os campos
        if (data.title) task.title = data.title;
        if (data.descricao) task.descricao = data.descricao;

        return this.repository.save(task);
    }

    // ============================================
    // 🗑️ DELETAR TASK
    // ============================================
    async delete(id: number) {
        const task = await this.repository.findById(id);
        if (!task) {
            throw new NotFoundError('Task não encontrada.');
        }

        return this.repository.delete(id);
    }

    // ============================================
    // 🔍 BUSCAR TASK POR ID
    // ============================================
    async findById(id: number) {
        const task = await this.repository.findById(id);
        if (!task) {
            throw new NotFoundError('Task não encontrada.');
        }
        return task;
    }

    // ============================================
    // 📋 LISTAR TODAS AS TASKS
    // ============================================
    async findAll() {
        return this.repository.findAll();
    }

    // ============================================
    // 📋 LISTAR TASKS DE UM USUÁRIO
    // ============================================
    async findByUser(usuarioId: number) {
        // Verifica se o usuário existe
        const usuario = await this.userRepository.listId(usuarioId);
        if (!usuario) {
            throw new NotFoundError('Usuário não encontrado.');
        }

        return this.repository.findByUser(usuarioId);
    }
}