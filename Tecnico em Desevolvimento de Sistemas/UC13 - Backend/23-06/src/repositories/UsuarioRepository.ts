import { Usuario } from "../models/Usuario"
import { AppDataSource } from "../config/database"

export class UsuarioRepository {
     
    private repository = AppDataSource.getRepository(Usuario);

    async CreateUsuario(usuario:Usuario){
        const saved = await this.repository.save(usuario);
        return saved;
    }

    async FindAll(){
         return await this.repository.find();
    }

    async FindID(id:number){
         return await this.repository.findOneBy({id:id})
    }

    async Deleteuser(id:number){
        await this.repository.delete(id);
    }

    async update(usuario:Usuario){
        return await this.repository.save(usuario)
    }

    async partialupdate(id: number, nome: string, email: string, info:string) {
   const dadosAtualizados = {
        nome_usuario: nome,
        email: email,
        info: info
    };
    return await this.repository.update(id, dadosAtualizados);
}
}
