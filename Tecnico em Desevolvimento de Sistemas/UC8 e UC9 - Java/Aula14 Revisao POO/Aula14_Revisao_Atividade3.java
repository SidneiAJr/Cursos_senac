import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("======");
        System.out.println("Bem Vindo!");
        Personagem p1 = new Personagem(50);
        p1.VerificarEnergia();
        }
}


interface Verificar{
    void VerificarEnergia();
}

class Personagem implements Verificar{
    protected int NivelEnergia;

    public Personagem(int nivelEnergia) {
        NivelEnergia = nivelEnergia;
    }


 @Override
    public void VerificarEnergia(){
     System.out.println("Insire o nivel de energia Atual: ");
     Scanner entrada = new Scanner(System.in);
     NivelEnergia = entrada.nextInt();
        if(NivelEnergia>50){
            System.out.println("Nivel de Energia Alcançado  com Sucesso!");
        }else{
            System.out.println("Ta Faltando Energia Chefe!");
        }
    }
}
