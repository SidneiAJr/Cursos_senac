import { Request, Response } from "express";
import { UsuarioService } from "../services/UserService.ts";

export class UsuarioController {
    private service = new UsuarioService()

    async creatUsuario(req:Request,res:Response){
     try {
        const{email,password} = req.body
        if(!email || !password){
            return res.status(400).json({mensagem:"Email e senha"})
        }
        await this.service.create(email,password)
        return
     } catch (error) {
        
     }
    }
    
}
