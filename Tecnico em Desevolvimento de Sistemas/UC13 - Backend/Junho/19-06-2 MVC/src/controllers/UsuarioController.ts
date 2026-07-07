import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";

export class UsuarioController {
    private service: UsuarioService;

    constructor() {
        this.service = new UsuarioService();
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { email, nome } = req.body;

            if (!email || !nome) {
                return res.status(400).json({ 
                    mensagem: "Email e senha são obrigatórios" 
                });
            }

            const usuario = await this.service.criarUsuario();
            return res.status(201).json({
                mensagem: "Usuário criado com sucesso!",
                usuario: {
                    id: usuario.id,
                    email: usuario.email
                }
            });
        } catch (error: any) {
            return res.status(400).json({ mensagem: error.message });
        }
    }
    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const usuarios = await this.service.listarUsuarios();
            return res.status(200).json(usuarios);
        } catch (error: any) {
            return res.status(500).json({ mensagem: error.message });
        }
    }

    async findById(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);

            if (!id || isNaN(id)) {
                return res.status(400).json({ mensagem: "ID inválido" });
            }

            const usuario = await this.service.buscarPorId(id);
            
            if (!usuario) {
                return res.status(404).json({ mensagem: "Usuário não encontrado" });
            }

            return res.status(200).json(usuario);
        } catch (error: any) {
            return res.status(500).json({ mensagem: error.message });
        }
    }
    async update(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            const { email, senha } = req.body;

            if (!id || isNaN(id)) {
                return res.status(400).json({ mensagem: "ID inválido" });
            }

            const usuario = await this.service.atualizarUsuario(id, email);
            
            if (!usuario) {
                return res.status(404).json({ mensagem: "Usuário não encontrado" });
            }

            return res.status(200).json({
                mensagem: "Usuário atualizado com sucesso!",
                usuario
            });
        } catch (error: any) {
            return res.status(400).json({ mensagem: error.message });
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);

            if (!id || isNaN(id)) {
                return res.status(400).json({ mensagem: "ID inválido" });
            }

            const deletado = await this.service.deletarUsuario(id);
            
            if (!deletado) {
                return res.status(404).json({ mensagem: "Usuário não encontrado" });
            }

            return res.status(200).json({ 
                mensagem: "Usuário deletado com sucesso!" 
            });
        } catch (error: any) {
            return res.status(500).json({ mensagem: error.message });
        }
    }
}