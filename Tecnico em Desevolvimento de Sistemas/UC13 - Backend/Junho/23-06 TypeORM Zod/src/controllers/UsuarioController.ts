import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";

export class UsuarioController {
    // ============================================
    // 📝 CREATE - Criar usuário
    // ============================================
    static async register(req: Request, res: Response) {
    try {
        const { nome_usuario, idade_usuario, email, info } = req.body;

        // Validação
        if (!nome_usuario || !idade_usuario || !email || !info) {
            return res.status(400).json({ 
                message: "Todos os campos são obrigatórios!" 
            });
        }

        // 👇 AGORA O SERVICE ACEITA TUDO!
        const usuario = await UsuarioService.createUsuario({ 
            nome_usuario, 
            idade_usuario, 
            email,
            info
        });

        return res.status(201).json({
            message: "Usuário criado com sucesso!",
            data: usuario
        });

    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return res.status(500).json({
            message: "Erro interno ao criar usuário",
            error: error instanceof Error ? error.message : "Erro desconhecido"
        });
    }
}
    // ============================================
    // 📋 READ ALL - Listar todos os usuários
    // ============================================
    static async findAll(req: Request, res: Response) {
        try {
            const usuarios = await UsuarioService.getAllUsuarios();

            return res.status(200).json({
                message: "Usuários listados com sucesso!",
                data: usuarios
            });

        } catch (error) {
            console.error('Erro ao listar usuários:', error);
            return res.status(500).json({
                message: "Erro interno ao listar usuários",
                error: error instanceof Error ? error.message : "Erro desconhecido"
            });
        }
    }

    // ============================================
    // 🔍 READ ONE - Buscar usuário por ID
    // ============================================
    static async findById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    message: "ID é obrigatório!"
                });
            }

            const usuario = await UsuarioService.getUsuarioById(Number(id));

            if (!usuario) {
                return res.status(404).json({
                    message: "Usuário não encontrado!"
                });
            }

            return res.status(200).json({
                message: "Usuário encontrado!",
                data: usuario
            });

        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
            return res.status(500).json({
                message: "Erro interno ao buscar usuário",
                error: error instanceof Error ? error.message : "Erro desconhecido"
            });
        }
    }

    // ============================================
    // ✏️ UPDATE - Atualizar usuário COMPLETO
    // ============================================
    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { nome_usuario, idade_usuario } = req.body;

            if (!id) {
                return res.status(400).json({
                    message: "ID é obrigatório!"
                });
            }

            if (!nome_usuario && !idade_usuario) {
                return res.status(400).json({
                    message: "Pelo menos um campo deve ser atualizado!"
                });
            }

            const usuarioAtualizado = await UsuarioService.updateUsuario(
                Number(id),
                { nome_usuario, idade_usuario }
            );

            if (!usuarioAtualizado) {
                return res.status(404).json({
                    message: "Usuário não encontrado!"
                });
            }

            return res.status(200).json({
                message: "Usuário atualizado com sucesso!",
                data: usuarioAtualizado
            });

        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            return res.status(500).json({
                message: "Erro interno ao atualizar usuário",
                error: error instanceof Error ? error.message : "Erro desconhecido"
            });
        }
    }

    // ============================================
    // 🗑️ DELETE - Deletar usuário
    // ============================================
    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    message: "ID é obrigatório!"
                });
            }

            const usuarioDeletado = await UsuarioService.deleteUsuario(Number(id));

            if (!usuarioDeletado) {
                return res.status(404).json({
                    message: "Usuário não encontrado!"
                });
            }

            return res.status(200).json({
                message: "Usuário deletado com sucesso!",
                data: usuarioDeletado
            });

        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            return res.status(500).json({
                message: "Erro interno ao deletar usuário",
                error: error instanceof Error ? error.message : "Erro desconhecido"
            });
        }
    }
   
}