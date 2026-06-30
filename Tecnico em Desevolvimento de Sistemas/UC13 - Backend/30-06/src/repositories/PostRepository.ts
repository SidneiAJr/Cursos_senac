import { Post } from "../models/Post";
import { AppDataSource } from "../config/database";

const repository = AppDataSource.getRepository(Post);

export class PostRepositor {
      
async FindAll(){
        return repository.find({relations:['user']});
    }

    async FindById(id:number){
        return repository.findOne({where: {id}, relations: ['posts']})
    }

    create(data:Partial<Post>){
        return repository.create(data)
    }

    async save(post:Post){
        return repository.save(post)
    }

    async delete(id:number){
        return repository.delete(id)
    }
}
