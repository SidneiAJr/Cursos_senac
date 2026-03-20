
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        personagem p1 = new personagem(75.5,"Frieren",2000,200,200);
        p1.VerificarCoragem();
        p1.VerificarPortal();
        p1.VerificarEnergia();
        p1.VerificarNivelAlma();
        personagem p2 = new personagem(25.5,"Gabriela",2500,50,250);
        p2.VerificarNivelAlma();
        p2.VerificarEnergia();
        p2.VerificarPortal();
        p2.VerificarCoragem();
        personagem p3 = new personagem(55.5,"Prime",50,55,500);
        p3.VerificarNivelAlma();
        p3.VerificarEnergia();
        p3.VerificarPortal();
        p3.VerificarCoragem();
        }
}

interface Verificar{
     void VerificarNivelAlma();
     void VerificarCoragem();
     void VerificarEnergia();
     void VerificarPortal();
}

class personagem implements Verificar{
    protected double Alma;
    protected String NomePersonagem;
    protected int Idade;
    protected int Coragem;
    protected int Energia;

    public personagem(double alma, String nomePersonagem, int idade, int coragem, int energia) {
        Alma = alma;
        NomePersonagem = nomePersonagem;
        Idade = idade;
        Coragem = coragem;
        Energia = energia;
    }
   @Override
    public void VerificarNivelAlma(){
       System.out.println("Informe o Valor da Alma: ");
        Scanner entrada = new Scanner(System.in);
        Alma = entrada.nextInt();
        if(Alma>=70) {
            System.out.println("Valor da Alma: " + Alma); // O valor de Alma já é fornecido no construtor
            if (Alma >= 75.5) {
                System.out.println("Alma muito alta");
            } else if (Alma > 70) {
                System.out.println("Alma alta");
            } else if (Alma <= 50) {
                System.out.println("Alma média");
            } else {
                System.out.println("Alma baixa");
            }
        }
    }
    @Override
    public void VerificarCoragem(){
        System.out.println("Informe o Valor da Coragem: ");
        Scanner entrada = new Scanner(System.in);
        Coragem = entrada.nextInt();
        if(Coragem>50){
            System.out.println("Coragem");
        }else{
            System.out.println("Sem Coragem");
        }
    }
    @Override
    public void VerificarEnergia(){
        System.out.println("Informe o Valor da Energia");
        Scanner entrada = new Scanner(System.in);
        Energia = entrada.nextInt();
        if(Energia>=100){
            System.out.println("Nivel de energia Cheia!");
        }else if(Energia<=50){
            System.out.println("Energia Abaixo do Maximo");
        }else{
            System.out.println("Cabo....");
        }
    }
    @Override
    public void VerificarPortal(){
        if(Alma>=70){
            System.out.println("Portal de Frieren");
        }else if(Coragem>50){
            System.out.println("Portal Demon Slayer");
        }else if(Energia!=0){
            System.out.println("Portal FMA Brotherhood");
        }
    }
}

