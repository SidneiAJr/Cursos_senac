import { UserRepository } from "../repositories/UsuarioRepository";
import { AppError } from "../errors/error-handles";
import { User } from "../models/Usuario";

export class UserService{
    private repo = new UserRepository()

    async getAllUser(){
        try {
            const users = await this.repo.findAll()
            if(!users) throw new AppError("Nenhum usuario cadastrado",404);
            return users
        } catch (error) {
            throw new AppError('Erro ao buscar usuarios',500)

        }
    }

    async registerUser(email:string){
         try {
            const UserAlreadyExist = this.repo.findByEmail(email)
            if(UserAlreadyExist) throw new Error("",)
         } catch (error) {
            
         }
    }


}