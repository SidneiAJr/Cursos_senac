import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Digite o primeiro numero DUDU: ");
        int num1= input.nextInt();
        System.out.println("Digite o Segundo numero DUDU: ");
        int num2= input.nextInt();

        try{
            int resultado =  num1 /num2;
            System.out.println("Resultado: "+resultado);
        } catch (ArithmeticException e) {
            System.out.println("❌ ERRO: Não é Possivel dividir por Zero DUDU");
        }finally {
            System.out.println("Operação Finalizada");
        }
        input.close();
    }
}


class divisao{


}





