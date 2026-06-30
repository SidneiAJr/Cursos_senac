import { User } from "../models/Usuario";
import { AppDataSource } from "../config/database";
import { number } from "zod";

const repository = AppDataSource.getRepository(User);

export class UsuarioRepository {

    async FindAll(){
        return repository.find({relations:['posts']});
    }

    async FindById(id:number){
        return repository.findOne({where: {id}, relations: ['posts']})
    }

    async FindEmailPassword(email:string){
        return repository.createQueryBuilder('user').addSelect('user.password').where('user.email = :email',{email}).getOne();
    }

    create(data:Partial<User>){
        return repository.create(data)
    }

    async save(user:User){
        return repository.save(user)
    }

    async delete(id:number){
        return repository.delete(id)
    }
    
}
