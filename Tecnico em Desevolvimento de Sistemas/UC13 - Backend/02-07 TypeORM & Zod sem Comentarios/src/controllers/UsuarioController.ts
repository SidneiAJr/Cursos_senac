import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/UserService";


export class UserController{

   async list(req:Request,res:Response,next:NextFunction){
       try {
        const users = await UserService.ListAll()
        return res.json(users)
       } catch (error) {
        next(error)
       }
   }

   async getById(req: Request, res: Response, next: NextFunction) {
    try {
        const id = Number(req.params.id);

        const user = await UserService.getByID(id);

        return res.json(user);
    } catch (error) {
        next(error);
    }
}

   async create(req:Request,res:Response,next:NextFunction){
      try {
        const {nome,email,password} = req.body
        const user = UserService.create({nome,email,password})
        return res.status(201).json(user)
      } catch (error) {
         next(error)
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
               await UserService.delete(id)
               return res.status(204).json({mensagem:"Usuario Deletado com sucesso"});
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
               const user = await UserService.Update(id,{nome,email,password});
               return res.status(204).json({mensagem:"Usuario Atualizado com sucesso",user});
        } catch (error) {
             next(error);
        }
       }


}