package com.mycompany.teste;

public class Teste {

    public static void main(String[] args) {
        Usuario usuario1 = new Usuario("Pedro",true,"1234");
        usuario1.VerificarUsuario();
        usuario1.VerificarPermissao();
        Usuario usuario2 = new Usuario("Daniel",true,"1234");
        usuario2.VerificarUsuario();
        usuario2.VerificarPermissao();
        Usuario usuario3 = new Usuario("Daniel",false,"1234");
        usuario3.VerificarUsuario();
        usuario3.VerificarPermissao();
        entidade entidade1 = new entidade("Pessoa",16);
        entidade1.VerificarEntidade();
    }
}

interface Verificar{
    void VerificarInfoUser();
    void VerificarUsuario();
    void VerificarPermissao();
    void Verificasenha();
}

interface VerificarEntidade{
    void VerificarEntidade();
}


abstract class InfoUsuario implements Verificar{
    public String NomeUsuario;
    public boolean eadmin;
    public String senha;
    
    InfoUsuario(String NomeUsuario,boolean eadmin,String senha){
      this.NomeUsuario = NomeUsuario;
      this.eadmin = eadmin;
      this.senha = senha;
    }
    
    
    public void VerificarInfoUser(){
        
    }
    public void VerificarUsuario(){
        
    }
    public void VerificarPermissao(){
       
    }
    public void Verificasenha(){
        
    }
}

class entidade implements VerificarEntidade{
    public String Entidade;
    public int IdadeEntidade;
     entidade(String Entidade,int IdadeEntidade){
         this.Entidade = Entidade;
         this.IdadeEntidade = IdadeEntidade;
     }
    
     public void VerificarEntidade(){
        if(Entidade=="Pessoa"){
            System.out.println("Olá"+ Entidade);
            if(IdadeEntidade<=18){
                 System.out.println("Idade da entidade"+IdadeEntidade);
            }else{
                System.out.println("Entidade nâo Pode entrar"+IdadeEntidade);
            }
        }else{
             System.out.println("Olá"+ Entidade);
        }
    }
}

class Usuario extends InfoUsuario{
   Usuario(String NomeUsuario, boolean eadmin, String senha) {
        super(NomeUsuario, eadmin, senha);
    }
    public void VerificarInfoUser(){
        if(NomeUsuario=="Pedro"){
            System.out.println("Olá"+ NomeUsuario);
        }else if(NomeUsuario=="Daniel"){
            System.out.println("Olá!"+ NomeUsuario);
        }
    }
    public void VerificarUsuario(){
        if(NomeUsuario=="Pedro"){
            System.out.println("Olá"+ NomeUsuario);
        }else if(NomeUsuario=="Daniel"){
            System.out.println("Olá!"+ NomeUsuario);
        }
    }
    public void VerificarPermissao(){
       if(eadmin==true){
            System.out.println("Olá Bem vindo Ao sistema" + NomeUsuario);
        }else{
            System.out.println("Não tem Permissão");
        }
    }
    public void Verificasenha(){
        if(senha=="1234"){
            System.out.println("A senha Tem que ter caracter especial");
        }else{
            System.out.println("A senha esta correta");
        }
    }
     
}
