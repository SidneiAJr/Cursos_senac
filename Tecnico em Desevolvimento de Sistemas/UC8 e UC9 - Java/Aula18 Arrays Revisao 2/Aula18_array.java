package aula1;
import java.util.Scanner;


public class Aula1 {

    public static void main(String[] args) {
       
         Scanner entrada = new Scanner(System.in);

        double array[]= new double[6];

        for(int i=0; i<array.length; i++ ){
            System.out.println("Insira Um valor: "+i);
            array[i]=entrada.nextDouble();
        }

        System.out.println("Informações do Array \n: ");
        for(int i = 0; i < array.length; i++){
            System.out.println("Posição " + i + ": " + array[i]);
        }
           entrada.close();
    }
    
}
