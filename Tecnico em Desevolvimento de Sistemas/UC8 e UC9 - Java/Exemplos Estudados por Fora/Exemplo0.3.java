import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); // cria o scanner
        
        System.out.print("Digite um numero  ");
        double n1 = sc.nextDouble(); // Chama o Scanner Pacote para Insert do Usuario
       
        System.out.print("Digite um numero  ");
        double n2 = sc.nextDouble(); // Chama o Scanner Pacote para Insert do Usuario
        
         System.out.print("Digite um numero  ");
        double n3 = sc.nextDouble(); // Chama o Scanner Pacote para Insert do Usuario
        
        Double resultado = n1+n2+n3;
        System.out.printf("Soma Total %.2f ", resultado);
       
    }
}
