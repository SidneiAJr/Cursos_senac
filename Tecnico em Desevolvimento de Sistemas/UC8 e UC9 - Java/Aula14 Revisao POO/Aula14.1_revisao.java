package exc1;
import java.util.Scanner;

public class Exc1 {

    public static void main(String[] args) {
      entrada1 e1 = new entrada1("Frederico",10,"Informacao",5.5,5.5,5.5);
      e1.Verificar1();
    }
    
}

interface Verificar{
    public void Verificar1();
}

class entrada1 implements Verificar{
    protected String nome;
    protected int Idade;
    protected String informacao;
    protected double nota1;
    protected double nota2;
    protected double nota3;

    public entrada1(String nome, int Idade, String informacao, double nota1, double nota2, double nota3) {
        this.nome = nome;
        this.Idade = Idade;
        this.informacao = informacao;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
   
    @Override
    public void Verificar1(){
        Scanner entrada1 = new Scanner(System.in);
        System.out.printf("Informe a Idade: ");
        Idade = entrada1.nextInt();
        System.out.printf("Informe um nome ");
        nome = entrada1.next();
        System.out.printf("Informe uma Nota:\n ");
        nota1 = entrada1.nextDouble();
        System.out.printf("Informe uma Nota: \n ");
        nota2 = entrada1.nextDouble();
        System.out.printf("Informe uma Nota: \n");
        nota3 = entrada1.nextDouble();
        double soma = nota1+nota2+nota3;
        entrada1.close();
        System.out.printf(String.format("Soma: ",soma));
        System.out.println("Nome: "+nome+" Idade "+Idade);
        if(soma<=7){
            System.out.println(String.format("Nota %.2f",soma));
        }else if(soma<5){
            System.out.println(String.format("Nota %.2f",soma));
        }else{
            System.out.println(String.format("Nota %.2f",soma));
        }
    }
    
}
