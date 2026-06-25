import { UserRepository } from "../repositories/UsuarioRepository";
import { AppError } from "../errors/error-handles";
import { User } from "../models/Usuario";

export class UserService{
    private repo = new UserRepository()

    async getAllUser(){
        try {
            const users = await this.repo.findAll()
            if(users&& users == null)  throw new AppError("Nenhum Usuario Cadastrado",404)
            return users
        } catch (error) {
            throw new AppError('Erro ao buscar usuarios',500)

        }
    }

    async registerUser(nome:string,email:string,senha:string){
         try {
            const UserAlreadyExist = this.repo.findByEmail(email)
            if(!UserAlreadyExist!=null) throw new AppError("Email ja registrado",409) 
            const user = new User(0,nome,email,senha)
             const newUser = await this.repo.create(user)
             if(newUser == null) return new AppError("Erro ao inserir",500)
         } catch (error) {
            throw new AppError("Algo de Errado não deu certo",500)
         }
    }


}
