import { AppDataSource } from "../config/database";
import { Usuarios } from "../models/Usuario";

export class UsuarioRepository {
    private repo = AppDataSource.getRepository(Usuarios);

    async create(usuario: Usuarios){
        return await this.repo.save(usuario)
    }

    async findAll() {
        return await this.repo.find();
    }

    async findById(id: number) {
        return await this.repo.findOne({ where: { id: id } });
    }

    async findByEmail(email: string){
        return await this.repo.findOne({ where: { email } });
    }

    async update(id: number, data: Partial<Usuarios>) {
        await this.repo.update(id, data);
        return await this.findById(id);
    }
    async delete(id: number){
        const result = await this.repo.delete(id);
        return result;
    }
}
