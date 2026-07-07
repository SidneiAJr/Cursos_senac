import { AppDataSource } from "../config/database";
import { Usuario } from "../models/Usuario";

const repo = AppDataSource.getRepository(Usuario)

export class UsuarioRepository {
    async create(data:{}){
       const user = repo.create(Usuario)
       return repo.save(user)
    }
    async update(user:Usuario){
        return repo.save(Usuario)
    }
    async delete(id:number){
       return repo.delete(id)
    }
    async listId(id:number){
       return repo.findOne({})
    }
    async listall(){
      return repo.find();
    }
}
