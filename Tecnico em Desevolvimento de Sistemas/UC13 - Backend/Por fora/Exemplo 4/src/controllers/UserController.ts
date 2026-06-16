import { Request, Response } from "express";
import { UsuarioService } from "../services/UserService";

const usuarioService = new UsuarioService();

export class UsuarioController {
   static async register(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;

            if (!email || !senha) {
                return res.status(400).json({ message: "Email e senha são obrigatórios!" });
            }

            const usuario = await usuarioService.criarUsuario (email, senha);
            return res.status(201).json({
                message: "Usuário criado com sucesso!",
            });
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;

            if (!email || !senha) {
                return res.status(400).json({ message: "Email e senha são obrigatórios!" });
            }

            const usuario = await usuarioService.login(email, senha);
            return res.status(200).json({
                message: "Login realizado com sucesso!",
                usuario: { id: usuario.id_usuario, email: usuario.Email }
            });
        } catch (error: any) {
            return res.status(401).json({ message: error.message });
        }
    }

    static async listar(req: Request, res: Response) {
        try {
            const usuarios = await usuarioService.listarTodos();
            return res.status(200).json(usuarios);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async buscarPorId(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const usuario = await usuarioService.buscarPorId(id);
            return res.status(200).json(usuario);
        } catch (error: any) {
            return res.status(404).json({ message: error.message });
        }
    }

    static async atualizar(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const { email, senha } = req.body;

            const usuario = await usuarioService.atualizarUsuario(id, email, senha);
            return res.status(200).json({
                message: "Usuário atualizado com sucesso!",
                usuario
            });
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    static async deletar(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await usuarioService.deletarUsuario(id);
            return res.status(200).json({ message: "Usuário deletado com sucesso!" });
        } catch (error: any) {
            return res.status(404).json({ message: error.message });
        }
    }
}
