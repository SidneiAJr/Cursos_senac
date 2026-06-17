import { Request, Response } from "express";
import { UsuarioService } from "../services/UserService";

export class UsuarioController {
    private service = new UsuarioService();

    async createUsuario(req: Request, res: Response) {
        try {
            const { email, password} = req.body;

            if (!email || !password) {
                return res.status(400).json({ mensagem: "Email e senha são obrigatórios" });
            }

            await this.service.create(email, password);
            return res.status(201).json({ mensagem: "Usuário criado com sucesso!" });

        } catch (error: any) {
            return res.status(500).json({ mensagem: "Erro interno: " + error.message });
        }
    }

    async updateUsuario(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);  
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ mensagem: "Email e senha são obrigatórios" });
            }

            await this.service.update(id, email, password);
            return res.status(200).json({ mensagem: "Usuário atualizado com sucesso" });

        } catch (error: any) {
            return res.status(500).json({ mensagem: "Erro interno: " + error.message });
        }
    }

    async updateParcialUsuario(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const { email,password } = req.body;

            if (!email) {
                return res.status(400).json({ mensagem: "Email é obrigatório" });
            }

            await this.service.updateParcial(id, email,password);
            return res.status(200).json({ mensagem: "Usuário atualizado parcialmente" });

        } catch (error: any) {
            return res.status(500).json({ mensagem: "Erro interno: " + error.message });
        }
    }

    async listarUsuarios(req: Request, res: Response) {
        try {
            const usuarios = await this.service.findall();
            return res.status(200).json(usuarios);
        } catch (error: any) {
            return res.status(500).json({ mensagem: "Erro interno: " + error.message });
        }
    }

    async deletarUsuario(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (!id || isNaN(id)) {
                return res.status(400).json({ mensagem: "ID inválido" });
            }

            await this.service.delete(id);
            return res.status(200).json({ mensagem: "Usuário deletado com sucesso" });

        } catch (error: any) {
            return res.status(500).json({ mensagem: "Erro interno: " + error.message });
        }
    }
}
