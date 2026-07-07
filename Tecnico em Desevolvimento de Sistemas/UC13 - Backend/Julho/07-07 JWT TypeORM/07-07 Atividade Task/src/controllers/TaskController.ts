import { TaskService } from "../services/TaskService";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { createTaskScheme, updateTaskScheme } from "../schemas/TaskSchemas";

export class TaskController {
    private service = new TaskService();

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            // 🔥 VALIDA COM ZOD
            const data = createTaskScheme.parse(req.body);

            const task = await this.service.create(data);
            return res.status(201).json(task);

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
            const data = updateTaskScheme.parse(req.body);

            const task = await this.service.update(id, data);
            return res.json(task);

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

            const task = await this.service.findById(id);
            return res.json(task);

        } catch (error) {
            next(error);
        }
    }

    async listall(req: Request, res: Response, next: NextFunction) {
        try {
            const tasks = await this.service.findAll();
            return res.json(tasks);

        } catch (error) {
            next(error);
        }
    }
}