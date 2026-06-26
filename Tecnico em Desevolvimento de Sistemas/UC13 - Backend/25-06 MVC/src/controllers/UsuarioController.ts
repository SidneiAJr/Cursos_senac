import { Request, Response } from 'express';
import { UserService } from '../services/UsuarioService';

const userService = new UserService();

export class UserController {
    
    // ============================================
    // 📋 LISTAR TODOS
    // ============================================
    static async getAll(req: Request, res: Response) {
        try {
            const users = await userService.getAllUser();
            res.json(users);
        } catch (error: any) {
            res.status(error.statusCode || 500).json({ message: error.message });
        }
    }

    // ============================================
    // 🔍 BUSCAR POR ID
    // ============================================
    static async getById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const user = await userService.getAllUser;
            res.json(user);
        } catch (error: any) {
            res.status(error.statusCode || 500).json({ message: error.message });
        }
    }

    // ============================================
    // ✏️ REGISTRAR
    // ============================================
    static async register(req: Request, res: Response) {
        try {
            const { nome, email, senha } = req.body;
            const user = await userService.registerUser(nome, email, senha);
            res.status(201).json(user);
        } catch (error: any) {
            res.status(error.statusCode || 500).json({ message: error.message });
        }
    }

    // ============================================
    // ✏️ ATUALIZAR
    // ============================================
    static async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const { nome, email, senha } = req.body;
            const user = await userService.updateUser(id, { nome, email, senha });
            res.json(user);
        } catch (error: any) {
            res.status(error.statusCode || 500).json({ message: error.message });
        }
    }

    // ============================================
    // 🗑️ DELETAR
    // ============================================
    static async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            const result = await userService.deleteUser(id);
            res.json(result);
        } catch (error: any) {
            res.status(error.statusCode || 500).json({ message: error.message });
        }
    }

    // ============================================
    // 🔐 LOGIN
    // ============================================
    static async login(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;
            const result = await userService.login(email, senha);
            res.json(result);
        } catch (error: any) {
            res.status(error.statusCode || 500).json({ message: error.message });
        }
    }
}