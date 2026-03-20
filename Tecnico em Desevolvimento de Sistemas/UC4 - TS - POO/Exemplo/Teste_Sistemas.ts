// Interface de verificação
interface Verificao{
    VerificacaoUsuaio():void;
    VerificarAdmin():void;
}
// Classe Abstrata do Usuario de Acesso
abstract class UusuarioAcesso implements Verificao{
    constructor(public NomeUsuario:string,public Eadmin:boolean){}
    VerificacaoUsuaio(): void {
        
    }
    VerificarAdmin(): void {
        
    }
}
// Classe de Usuario
class Usuario extends UusuarioAcesso implements Verificao{
    VerificarAdmin(): void {
        if(this.Eadmin===true){
            console.log(`Pode Acessar ${this.NomeUsuario}`);
        }else{
            console.log(`Erro de Acesso`);
        }
    }

    VerificacaoUsuaio(): void {
        if(this.NomeUsuario==="Admin"||this.NomeUsuario==="Testador"){
            console.log(`Bem vindo Usuario ${this.NomeUsuario}`);
        }else{
            console.log(`Erro Não Cadastrado`);
        }
    }
}

const Usuario1 = new Usuario("Admin",true);
Usuario1.VerificacaoUsuaio();
Usuario1.VerificarAdmin();
