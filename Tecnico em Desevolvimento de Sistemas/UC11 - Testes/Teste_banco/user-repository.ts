import { promises } from "dns";
import { conn } from "../database";
import { Usuario } from "../model/user";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { RequestHandler } from "express";

export class UsuarioReposity{
     async mostrarTodos():Promise<Usuario[]>{
        const [resultado] = await conn.query<RowDataPacket[]>("SELECT * FROM minha_tabela"); 
        return resultado.map((u) => new Usuario(u.id,u.nome,u.idade))
     }
     async inserir(nome:string,idade:string):Promise<Usuario>{
         const [resultado2] =  await conn.execute<ResultSetHeader>("INSERT INTO minha_tabela (nome,idade) values (?,?)",[nome,idade]);
         return new Usuario(resultado2.insertId,nome,idade);
     }
    async delete(id:Number):Promise<ResultSetHeader>{
         const [resultado3] =  await conn.query<ResultSetHeader>("DELETE FROM minha_tabela WHERE id = ?",[id]);
         return resultado3;
     }
     async update(id:Number,nome:string,idade:string):Promise<ResultSetHeader>{
         const [resultado4] =  await conn.query<ResultSetHeader>("UPDATE minha_tabela SET nome = ?, idade = ? WHERE id = ?",[nome,idade,id]);
         return resultado4;
     }

}
    
