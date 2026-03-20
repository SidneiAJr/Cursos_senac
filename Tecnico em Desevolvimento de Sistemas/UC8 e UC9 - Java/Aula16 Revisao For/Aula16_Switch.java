import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
           wise w1 = new wise(0);
           w1.verificar();

        }
}


class wise{
    protected int opcao;

    public wise(int opcao) {
        this.opcao = opcao;
    }

    public void verificar(){
        Scanner entrada = new Scanner(System.in);
        System.out.println("Escolha do 1 a 4");
        opcao = entrada.nextInt();
        switch (opcao){
            case 1:
                System.out.println("Annie será protegida");
                break;
            case 2:
                System.out.println("Invetigar Demsond");
                break;
            case 3:
                System.out.println("Missão Secreta SS");
                break;
            case 4:
                System.out.println("Visitar o Castelo para recrear");
                break;
            default:
                System.out.println("MISSÃO DESCONHECIDA");
                break;
        }
    }
}
