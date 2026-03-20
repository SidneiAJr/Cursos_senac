import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        magico m1 = new magico(20);
        m1.verificarpoder();

        }
}
interface Verificar{
    void verificarpoder();
}


class magico implements Verificar{
    protected int valorMagia;

    public magico(int valorMagia) {
        this.valorMagia = valorMagia;
    }

     public void verificarpoder(){
        Scanner ent = new Scanner(System.in);
         System.out.println("Informe o Poder (0 a 100)");
        valorMagia = ent.nextInt();
        if (valorMagia>71){
            System.out.println("Magia Avançada");
        }else if(valorMagia>=30 && valorMagia<=70){
            System.out.println("Magia Mediana");
        }else if(valorMagia<30){
            System.out.println("Magia Fraca");
        }
    }
}
