package teste;
import java.util.Scanner;
import java.util.Arrays;  // Importar a classe Arrays

public class Teste {
    
    public static void main(String[] args) {
          int array[]=new int[6];
          Scanner entrada = new Scanner(System.in);
          System.out.println("Insira um Valor de (0 a 9)");
          int somatotal=0;
         
          for(int i=0; i<array.length; i++){
               int valor = entrada.nextInt();
               
               array[i]=valor;
               somatotal+=valor;
               
          }
          
          System.out.println("Array: "+Arrays.toString(array));
          System.out.println("Soma Total: "+somatotal);
          entrada.close();
         
          
          
         
          
    }
    
}

 
