import p.Pessoa;

public class Main {
    public static void main(String[] args) {
        System.out.printf("================================================================= \n");
        Pessoa p1 = new Pessoa("Kalleo",21,"SL",false);
        p1.VerificarNome();
        p1.VerificarIdade();
        p1.CidadePessoa();
        p1.Apresentacao();
        p1.Rei();
        System.out.printf("================================================================= \n");
        Pessoa p2 = new Pessoa("Arthur",22,"SP",false);
        p2.VerificarNome();
        p2.VerificarIdade();
        p2.CidadePessoa();
        p2.Apresentacao();
        p2.Rei();
        System.out.printf("================================================================= \n");
        Pessoa p3 = new Pessoa("Dalvano Prime",30,"SL",false);
        p3.Apresentacao();
        p3.CidadePessoa();
        p3.VerificarNome();
        p3.VerificarNome();
        p3.Rei();
        System.out.printf("================================================================= \n");
        Pessoa p4 = new Pessoa("Silveiro Lima",900,"SL",true);
        p4.Apresentacao();
        p4.CidadePessoa();
        p4.VerificarNome();
        p4.VerificarNome();
        p4.Rei();
        }
    }

