import { Request, Response } from 'express';
import { PostService } from '../services/PostService';

export class PostController {
    // ============================================
    // 📋 GET /posts -> lista todos os posts
    // ============================================
    async list(req: Request, res: Response) {
        try {
            const posts = await PostService.listAll();
            return res.json(posts);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    // ============================================
    // 🔍 GET /posts/:id -> busca um post específico
    // ============================================
    async getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const post = await PostService.getById(id);
            return res.json(post);
        } catch (error: any) {
            if (error.message === 'Post não encontrado.') {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: error.message });
        }
    }

    // ============================================
    // 📝 POST /posts -> cria um novo post
    // ============================================
    async create(req: Request, res: Response) {
        try {
            const { title, userId } = req.body;

            if (!title || !userId) {
                return res.status(400).json({
                    message: 'Título e ID do usuário são obrigatórios.'
                });
            }

            const post = await PostService.create({ title, userId });
            return res.status(201).json(post);
        } catch (error: any) {
            if (error.message === 'Usuário não encontrado.') {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: error.message });
        }
    }

    // ============================================
    // ✏️ PUT /posts/:id -> atualiza um post
    // ============================================
    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const { title, userId } = req.body;

            if (!title && !userId) {
                return res.status(400).json({
                    message: 'Pelo menos um campo deve ser enviado.'
                });
            }

            const post = await PostService.update(id, { title, userId });
            return res.json(post);
        } catch (error: any) {
            if (error.message === 'Post não encontrado.') {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === 'Usuário não encontrado.') {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: error.message });
        }
    }

    // ============================================
    // 🗑️ DELETE /posts/:id -> remove um post
    // ============================================
    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await PostService.delete(id);
            return res.status(204).send();
        } catch (error: any) {
            if (error.message === 'Post não encontrado.') {
                return res.status(404).json({ message: error.message });
            }
            return res.status(500).json({ message: error.message });
        }
    }
}