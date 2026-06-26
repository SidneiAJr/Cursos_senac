import { Usuario } from "../models/Usuario";
import { AppDataSource } from "../config/database";

export class UsuarioRepository {
   private repository = AppDataSource.getRepository(Usuario);

   async criar(usuario: Usuario){
        const saved = await this.repository.save(usuario);
        return saved; // JÁ VEM COM O ID
   }

    async buscarTodos(): Promise<Usuario[]> {
        return await this.repository.find();
    }

    async buscarPorId(id: number): Promise<Usuario | null> {
        return await this.repository.findOneBy({ id_usuario: id });
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        return await this.repository.findOneBy({ Email: email });
    }

    async atualizar(usuario: Usuario): Promise<Usuario> {
        return await this.repository.save(usuario);
    }

    async deletar(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
