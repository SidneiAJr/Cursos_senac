import { User } from "../models/Usuario";
import { PostRepository } from "../repositories/PostRepository";
import { UserRepository } from "../repositories/UsuarioRepository";

export class NotFoundError extends Error{}

export const PostService={
     async ListAll(){
             return PostRepository.findAll();
         },
     
         async getByID(id: number){
             const post = await PostRepository.findById(id);
             if(!post){
                throw new NotFoundError("Post Não encontrado")
             }
             return post;
         },
     
         async create(data:{title:string , userId: number}){
            const user = await UserRepository.findById(data.userId);
            if(!user){
                throw new NotFoundError("Usuario não encontrado")
            }

            const post = await PostRepository.create({title: data.title, user}as any)
            return post;
         },

         async delete(id:number){
            const post = await PostRepository.findById(id);
            if(!post){
                 throw new NotFoundError("Post não encontrado")
            }
            const deletar = await PostRepository.delete(id)
            return deletar
         }
}