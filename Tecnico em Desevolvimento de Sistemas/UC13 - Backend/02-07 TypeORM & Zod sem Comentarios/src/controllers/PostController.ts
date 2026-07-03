import { NextFunction, Request, Response } from "express";
import { PostService } from "../services/PostService";

export class PostController{
   async list(req: Request, res: Response, next: NextFunction) {
        try {
            const posts = await PostService.ListAll();
            return res.json(posts);
        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                return res.status(400).json({
                    message: "ID inválido"
                });
            }

            const post = await PostService.getByID(id);

            return res.json(post);
        } catch (error) {
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { title, userId } = req.body;

            const post = await PostService.create({
                title,
                userId
            });

            return res.status(201).json(post);
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction){
        try {
            const id = Number(req.params.id);
              if (isNaN(id)) {
                return res.status(400).json({
                    message: "ID inválido"
                });
            }
            await PostService.delete(id)
            return res.status(204).json({mensagem:"Post Deletado com sucesso"});
        } catch (error) {
            next(error);
        }
    }

    async Update(req: Request, res: Response, next: NextFunction){
            try {
                const id = Number(req.params.id);
                     if (isNaN(id)) {
                       return res.status(400).json({
                           message: "ID inválido"
                       });
                   }
                   const {nome,email,password} = req.body
                   const user = await PostService.Update(id,{nome,email,password});
                   return res.status(204).json({mensagem:"Usuario Atualizado com sucesso",user});
            } catch (error) {
                 next(error);
            }
           }
}