import { UserRepository } from "../repositories/UsuarioRepository";
import bcrypt from 'bcrypt';
import { omitPassword } from "../utils/omitPassword";

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
        const user = await UserRepository.create({nome: data.nome,email:data.email,password: hashedPassword})
        return omitPassword(user)
    },

    async delete(id:number){
    const user = await UserRepository.delete(id);
    if(user.affected === 0){
        throw new NotFoundError("Post não encontrado")
    }
    if(!user){
    throw new NotFoundError("Post não encontrado")
    }
    const deletar = await UserRepository.delete(id)
    return deletar
},

   async Update(id:number,data:{nome?:string,email?:string,password?:string}){
       const user = await UserRepository.findById(id);
       if(!user){
            throw new NotFoundError("ID não encontrado")
       }
       if(data.nome) user.nome = data.nome
       if(data.email) user.email = data.email
       if(data.password) user.password = await bcrypt.hash(data.password,14)
       const updatedUser = await UserRepository.create(user)
       return omitPassword(updatedUser)
   }

}