import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("------------------------------");
         for (int i = 0; i<11; i++){
             System.out.println("Numeros "+i);
         }
        System.out.println("------------------------------");
        int poder = 0 ;
        while(poder<=50){
            poder+=10;
            System.out.println("Poder Aumentando"+poder);
        }
        System.out.println("------------------------------");
        int circulocomeço = 0;
        for(int i=0; i<10; i++){
            System.out.println("Quantidade de Circulos Criado: "+i);
        }
        
    }
}

