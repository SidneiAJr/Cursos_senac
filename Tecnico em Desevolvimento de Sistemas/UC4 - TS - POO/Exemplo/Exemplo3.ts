interface VerificarUsuario{
    VerificarAcesso():void;
    VerificarAutenticacao():void;
    VerificaInfo():void;
    VerificarToken():void;
}
interface Grafico{
    ExibirGrafico():void;
}
interface ExibirHistorico{
    ExibirHistorico():void;
}
interface CadastroUsuario{
    RealizarCadastro():void;
}
interface Login{
    RealizarLogin():void;
}
interface Inserir{
    RealizarInsercao():void;
}

class Acesso implements VerificarUsuario{
    constructor(protected NomeUsuario:string,protected Senha:string, protected Token2FA:string ){}
    VerificarAcesso(): void {
       
    }
    VerificarAutenticacao(): void {
        
    }
    VerificaInfo(): void {
        
    }
    VerificarToken(): void {
        
    }

}

class Cadastro implements VerificarUsuario,CadastroUsuario{
    constructor(protected NomeUsuario:string,protected Senha:string, protected Token2FA:string ){}
    VerificarAcesso(): void {
        
    }
    VerificarAutenticacao(): void {
        
    }
    VerificaInfo(): void {
        
    }
    VerificarToken(): void {
        
    }
    RealizarCadastro(): void {
        
    }
    
}

class InfoAcesso implements VerificarUsuario{
    constructor(protected NomeUsuario:string,protected Senha:string, protected Token2FA:string ){}
    VerificarAcesso(): void {
        
    }
    VerificarAutenticacao(): void {
        
    }
    VerificaInfo(): void {
        
    }
    VerificarToken(): void {
        
    }
}

class Login implements VerificarUsuario{
    constructor(protected NomeUsuario:string,protected Senha:string, protected Token2FA:string ){}
    VerificarAcesso(): void {
        
    }
    VerificarAutenticacao(): void {
        
    }
    VerificaInfo(): void {
        
    }
    VerificarToken(): void {
        
    }
}

class Inserir implements VerificarUsuario{
    constructor(protected NomeUsuario:string,protected Senha:string, protected Token2FA:string ){}
    VerificaInfo(): void {
        
    }
    VerificarAutenticacao(): void {
        
    }
    VerificarToken(): void {
        
    }
    VerificarAcesso(): void {
        
    }
}
class VerificarNivel implements VerificarUsuario{
     constructor(protected NomeUsuario:string,protected Senha:string, protected Token2FA:string ){}
    VerificaInfo(): void {
        
    }
    VerificarAutenticacao(): void {
        
    }
    VerificarToken(): void {
        
    }
    VerificarAcesso(): void {
        
    }
}
class VerificarChuva implements VerificarUsuario{
     constructor(protected NomeUsuario:string,protected Senha:string, protected Token2FA:string ){}
    VerificaInfo(): void {
        
    }
    VerificarAutenticacao(): void {
        
    }
    VerificarToken(): void {
        
    }
    VerificarAcesso(): void {
        
    }
}
class ExibirGrafico implements VerificarUsuario{
    constructor(protected NomeUsuario:string,protected Senha:string, protected Token2FA:string ){}
    VerificaInfo(): void {
        
    }
    VerificarAutenticacao(): void {
        
    }
    VerificarToken(): void {
        
    }
    VerificarAcesso(): void {
        
    }
}
class Historico implements VerificarUsuario{
    constructor(protected NomeUsuario:string,protected Senha:string, protected Token2FA:string ){}
    VerificaInfo(): void {
        
    }
    VerificarAutenticacao(): void {
        
    }
    VerificarToken(): void {
        
    }
    VerificarAcesso(): void {
        
    }
}
