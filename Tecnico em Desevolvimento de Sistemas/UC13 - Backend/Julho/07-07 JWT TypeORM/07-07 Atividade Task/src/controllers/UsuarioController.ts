import { UsuarioService } from "../services/UsuarioService";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { createUserScheme, updateUserScheme } from "../schemas/UsuarioSchemas";

export class UsuarioController {
    private service = new UsuarioService();

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            // 🔥 VALIDA COM ZOD
            const data = createUserScheme.parse(req.body);

            const usuario = await this.service.create(data);
            return res.status(201).json(usuario);

        } catch (error) {
            // 🔥 SE FOR ERRO DO ZOD, RETORNA 400
            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    message: "Dados inválidos",
                    errors: error.flatten().fieldErrors
                });
            }
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);

            // 🔥 VALIDA COM ZOD (PARCIAL)
            const data = updateUserScheme.parse(req.body);

            const usuario = await this.service.update(id, data);
            return res.json(usuario);

        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    message: "Dados inválidos",
                    errors: error.flatten().fieldErrors
                });
            }
            next(error);
        }
    }
    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);

            await this.service.delete(id);
            return res.status(204).send();

        } catch (error) {
            next(error);
        }
    }
    async listId(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);

            const usuario = await this.service.findById(id);
            return res.json(usuario);

        } catch (error) {
            next(error);
        }
    }

    async listall(req: Request, res: Response, next: NextFunction) {
        try {
            const usuarios = await this.service.findAll();
            return res.json(usuarios);

        } catch (error) {
            next(error);
        }
    }
}