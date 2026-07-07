import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UsuarioController {

    // ============================================
    // 📋 GET /users -> lista todos os usuários
    // ============================================
    async list(req: Request, res: Response) {
        try {
            const users = await UserService.listAll();
            return res.json(users);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    // ============================================
    // 🔍 GET /users/:id -> busca um usuário específico
    // ============================================
    async getByID(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const user = await UserService.getById(id);
            return res.json(user);
        } catch (error: any) {
            if (error.message === 'Usuário não encontrado.') {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: error.message });
        }
    }

    // ============================================
    // 📝 POST /users -> cria um novo usuário
    // ============================================
    async create(req: Request, res: Response) {
        try {
            const { nome, email, password } = req.body;

            if (!nome || !email || !password) {
                return res.status(400).json({
                    message: 'Nome, email e senha são obrigatórios.'
                });
            }

            const user = await UserService.create({ nome, email, password });
            return res.status(201).json(user);
        } catch (error: any) {
            if (error.message === 'Email já cadastrado.') {
                return res.status(409).json({ message: error.message });
            }
            return res.status(500).json({ message: error.message });
        }
    }

    // ============================================
    // ✏️ PUT /users/:id -> atualiza um usuário
    // ============================================
    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const { nome, email, password } = req.body;

            if (!nome && !email && !password) {
                return res.status(400).json({
                    message: 'Pelo menos um campo deve ser enviado.'
                });
            }

            const user = await UserService.update(id, { nome, email, password });
            return res.json(user);
        } catch (error: any) {
            if (error.message === 'Usuário não encontrado.') {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: error.message });
        }
    }

    // ============================================
    // 🗑️ DELETE /users/:id -> remove um usuário
    // ============================================
    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await UserService.delete(id);
            return res.status(204).send();
        } catch (error: any) {
            if (error.message === 'Usuário não encontrado.') {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: error.message });
        }
    }
}