import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
          wise w1 = new wise(50);
          w1.poder();

        }
}


class wise{
    protected int podersicranizador;

    public wise(int podersicranizador) {
        this.podersicranizador = podersicranizador;
    }

    void poder(){
        Scanner ent = new Scanner(System.in);

        System.out.println("Informe o valor sincronizador (0 a 1000)");
        podersicranizador = ent.nextInt();

        if (podersicranizador < 40) {
            System.out.println("Sincronização Insuficiente");
        } else if (podersicranizador >= 40 && podersicranizador < 80) {
            System.out.println("Piloto apto para combate");
        } else if (podersicranizador >= 80) {
            System.out.println("Risco de Modo Berserk");
        }
    }
}
