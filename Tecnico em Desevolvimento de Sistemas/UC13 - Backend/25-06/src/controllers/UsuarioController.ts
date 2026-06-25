import { Request, Response } from 'express';
import { UserRepository } from '../repositories/UsuarioRepository';

const usuarioRepo = new UserRepository();

export class UsuarioController {
    
    static async findAll(req: Request, res: Response) {
        try {
            const usuarios = await usuarioRepo.findAll();
            res.json(usuarios);
        } catch (error) {
            console.error('❌ Erro ao listar:', error);
            res.status(500).json({ message: 'Erro ao listar usuários' });
        }
    }

    static async findById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const usuario = await usuarioRepo.findById(id);
            
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            
            res.json(usuario);
        } catch (error) {
            console.error('❌ Erro ao buscar:', error);
            res.status(500).json({ message: 'Erro ao buscar usuário' });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const usuario = await usuarioRepo.create(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            console.error('❌ Erro ao criar:', error);
            res.status(500).json({ message: 'Erro ao criar usuário' });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const usuario = await usuarioRepo.update(id, req.body);
            
            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            
            res.json(usuario);
        } catch (error) {
            console.error('❌ Erro ao atualizar:', error);
            res.status(500).json({ message: 'Erro ao atualizar usuário' });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const deleted = await usuarioRepo.delete(id);
            
            if (!deleted) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }
            
            res.json({ message: 'Usuário deletado com sucesso' });
        } catch (error) {
            console.error('❌ Erro ao deletar:', error);
            res.status(500).json({ message: 'Erro ao deletar usuário' });
        }
    }
}