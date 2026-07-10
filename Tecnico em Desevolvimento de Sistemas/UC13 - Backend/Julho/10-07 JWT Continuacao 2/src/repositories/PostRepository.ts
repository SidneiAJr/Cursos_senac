import { Post } from "../models/Post";
import { AppDataSource } from "../config/database";

const repository = AppDataSource.getRepository(Post);

export const PostRepository = {

    async findAll() {
        return repository.find({ relations: ['user'] });
    },

    async findById(id: number) {
        return repository.findOne({
            where: { id },
            relations: ['user']
        });
    },
   async create(data:Post){
          const post = repository.create(data)
          return repository.save(post)
       },

    async save(post: Post) {
        return repository.save(post);
    },
    async delete(id: number) {
        return repository.delete(id);
    }
};