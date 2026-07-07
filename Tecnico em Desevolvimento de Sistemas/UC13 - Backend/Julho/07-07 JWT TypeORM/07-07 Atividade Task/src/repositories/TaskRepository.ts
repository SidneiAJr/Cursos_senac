import { AppDataSource } from "../config/database";
import { Task } from "../models/task";  
import { Usuario } from "../models/Usuario";  

const repo = AppDataSource.getRepository(Task);

export class TaskRepository {
    async create(data: { title: string; descricao: string; usuarioId: number }) {
        const userRepo = AppDataSource.getRepository(Usuario);
        const usuario = await userRepo.findOne({ where: { id: data.usuarioId } });
        
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        const task = repo.create({
            title: data.title,
            descricao: data.descricao,
            usuario: usuario  
        });

        return repo.save(task);
    }
    async save(task: Task) {
        return repo.save(task);
    }
    async delete(id: number) {
        return repo.delete(id);
    }
    async findById(id: number) {
        return repo.findOne({
            where: { id },
            relations: ['usuario']  
        });
    }
    async findAll() {
        return repo.find({
            relations: ['usuario']  
        });
    }
    async findByUser(usuarioId: number) {
        return repo.find({
            where: { usuario: { id: usuarioId } },
            relations: ['usuario']
        });
    }
    async update(id: number, data: { title?: string; descricao?: string }) {
        const task = await repo.findOne({ where: { id } });
        if (!task) {
            throw new Error('Task não encontrada');
        }

        if (data.title) task.title = data.title;
        if (data.descricao) task.descricao = data.descricao;

        return repo.save(task);
    }
}