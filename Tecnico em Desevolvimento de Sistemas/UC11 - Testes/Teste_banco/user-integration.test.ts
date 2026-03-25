import { conn } from "../../config/database";
import { UsuarioReposity } from "../../config/repositories/user-repository";

describe("Teste de Integração de Usuario",()=>{
    const repo = new UsuarioReposity();
    beforeAll(async()=>{
        await conn.execute('CREATE TABLE IF NOT EXISTS minha_tabela (id int primary key auto_increment not null, nome varchar(50) not null, idade varchar(50) not null);');
    });
    beforeEach(async()=>{
        await conn.execute('Delete from minha_tabela;')
    })
    test("Deve criar um usuario",async()=>{
        const user = await repo.inserir("Daniel","Seis"); 
        expect (user).not.toBeUndefined();
        expect (user.id).not.toBeNull();
        expect (user.nome).toBe("Daniel");
        expect (user.idade).toBe("Seis");
    })
    test("Deve Apagar um Usuario",async()=>{
        const user2 = await repo.delete(1); 
        expect (user2).not.toBeNull;
    })
     test("Deve fazer Update do Usuario",async()=>{
        const user3 = await repo.update(1,"Pedro Mesa","Vinte"); 
        expect (user3).not.toBeNull;
    })
    afterAll(async()=>{
       await conn.end()
    })
});
