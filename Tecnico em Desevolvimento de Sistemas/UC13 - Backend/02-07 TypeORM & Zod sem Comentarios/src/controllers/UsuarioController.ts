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
}