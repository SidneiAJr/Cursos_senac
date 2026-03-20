import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        personagem p1 = new personagem(20,30,300);
        p1.ver();

        }
}

interface Verificar{
    void ver();
}

class personagem implements Verificar{

    protected int Idade;
    protected int poder;
    protected int ControleEmocional;

    public personagem(int idade, int controleEmocional, int poder) {
        Idade = idade;
        ControleEmocional = controleEmocional;
        this.poder = poder;
    }

    @Override
    public void ver() {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Idade: ");
        Idade = entrada.nextInt();
        System.out.println("Poder: ");
        poder = entrada.nextInt();
        System.out.println("Controle Emocional");
        ControleEmocional = entrada.nextInt();
     if(Idade>=15||poder>=50){
         System.out.println("Aluno Aprovado na SHS!");
     }else{
         System.out.println("Reprovado!");
     }

     if(poder<=80&&ControleEmocional>=60){
         System.out.println("Entrada permitida");
     }else if(poder>=80){
         System.out.println("Heroi muito fortes podem ser descontrolados como o Bakugo");
     }

    }
}
