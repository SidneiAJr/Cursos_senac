import { AppDataSource } from "../config/database";
import { Usuario } from "../models/Usuario";

const repo = AppDataSource.getRepository(Usuario)

export class UsuarioRepository {
    async create(data:{nome:string,email:string,password:string}){
       const user = repo.create(data)
       return repo.save(user)
    }
    async save(user:Usuario){
        return repo.save(user)
    }
    async delete(id:number){
       return repo.delete(id)
    }
    async listId(id:number){
       return repo.findOne({where:{id}, relations: ['tasks']})
    }
    async listall(){
      return repo.find();
    }
}
