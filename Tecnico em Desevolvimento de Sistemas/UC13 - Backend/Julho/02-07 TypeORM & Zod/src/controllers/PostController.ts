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

            return res.status(200).json({mensagem: "Post criado com sucesso!",post});
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
            return res.status(200).json({mensagem:"Post Deletado com sucesso"});
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
                   const {title, userId} = req.body
                   const user = await PostService.update(id,{title, userId});
                   return res.status(200).json({mensagem:"Usuario Atualizado com sucesso",user});
            } catch (error) {
                 next(error);
            }
           }
}