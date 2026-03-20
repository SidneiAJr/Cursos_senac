package javaapplication1;
import java.util.Scanner;


public class JavaApplication1 {

    
public static void main(String[] args) {
       CadastroUsuario cd = new CadastroUsuario("a","","");
       cd.verificar();
    }
}


class CadastroUsuario{

    private String Usuario;
    private String Senha;
    private String email;

    public CadastroUsuario(String Usuario, String Senha, String email) {
        this.Usuario = Usuario;
        this.Senha = Senha;
        this.email = email;
    }
    
    void verificar(){
        
        Scanner entrada = new Scanner(System.in);
        
        System.out.println("Insira seu Usuario: ");
        Usuario = entrada.nextLine();
        
        System.out.println("Insira sua Senha: ");
        Senha = entrada.next();
        
        System.out.println("Insira o Email: ");
        email = entrada.next();
        
        if(!Usuario.isEmpty()&&!Senha.isEmpty()&&!email.isEmpty()){
            System.out.println("Bem vindo!");
        }else{
            System.out.println("Favor Inserir Usuario Senha e Email!");
        }
    }



}




