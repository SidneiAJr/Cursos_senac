import { User } from "../models/Usuario";
import { AppDataSource } from "../config/database";

const repository = AppDataSource.getRepository(User);
export const UserRepository = {

    async findAll() {
        return repository.find({ relations: ['posts'] });
    },
    async findById(id: number) {
        return repository.findOne({ where: { id }, relations: ['posts'] });
    },
     async create(data:any){
       const user = repository.create(data)
       return repository.save(user)
    },
    async findByEmailWithPassword(email: string) {
        return repository.createQueryBuilder('user').addSelect('user.password').where('user.email = :email', { email }).getOne();
    },
    async save(user: User) {
        return repository.save(user);
    },
    async delete(id: number) {
        return repository.delete(id);
    },
};

