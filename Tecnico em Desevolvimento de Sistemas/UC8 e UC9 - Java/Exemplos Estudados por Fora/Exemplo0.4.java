import java.util.Scanner;

class Main {
    static Scanner sc = new Scanner(System.in); // cria o scanner

    public static void main(String[] args) {
        System.out.print("Selecione uma Opcao \n 1-Somar Notas \n 2-Dividir nota ");
        int op = sc.nextInt(); // Chama o Scanner para Insert do Usuario

        switch(op){
            case 1:
                teste();
                break;
            case 2:
                teste2();
                break;
            default:
                System.out.println("Opção Inválida!!");
        }
    }

    public static void teste() {
        System.out.print("Insira sua nota 1: ");
        double n1 = sc.nextDouble();

        System.out.print("Insira sua nota 2: ");
        double n2 = sc.nextDouble();

        System.out.print("Insira sua nota 3: ");
        double n3 = sc.nextDouble();

        double soma = (n1 + n2 + n3)/3;
        System.out.printf("Nota %.2f " , soma);
    }

    public static void teste2() {
        System.out.print("Insira um Número: ");
        int n = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            System.out.println("Contando: " + i);
        }
    }
}
