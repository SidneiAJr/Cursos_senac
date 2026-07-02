import { UserRepository } from "../repositories/UsuarioRepository";
import bcrypt from 'bcrypt';

export class NotFoundError extends Error{}

export const UserService={
    async ListAll(){
        return UserRepository.findAll();
    },

    async getByID(id: number){
        const user = await UserRepository.findById(id);
        if(!user){
           throw new NotFoundError("Usuario Não Econtrado!")
        }
        return user;
    },

    async create(data:{nome:string,email:string, password:string}){
        const hashedPassword = await bcrypt.hash(data.password,14);
        const user = UserRepository.create({nome: data.nome,email:data.email,password: hashedPassword})
        const savedUser = await UserRepository.create(user)
        if(!savedUser){
            
        }
    }

}