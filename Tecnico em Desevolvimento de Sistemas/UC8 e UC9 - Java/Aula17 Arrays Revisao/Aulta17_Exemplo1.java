import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
         int[]ar = {1,2,3,4,5};
         double[]b = {1.1,0.5,3.5};
         double soma = 0;
         String []c ={"Motor Ap","Motor De dobra","Motor esferico","Motor Esferico esferico"};

         for(int d=0; c.length>d; d++ ){
             System.out.println("Lista de Produtos: "+c[d]);
         }

         for(int a=0; b.length>a; a++){
             soma  +=b[a];
             System.out.println("Soma: "+soma);
         }

         for(int i=0; ar.length>i; i++){
             System.out.println("Numero: "+i);
         }

         ArrayList<String> array = new ArrayList<>();
         Scanner ent = new Scanner(System.in);
         System.out.println("Insira a Informação:");
         System.out.println("Insira o Numero para acabar");
         String entrada = ent.next();
         int numero = ent.nextInt();
         array.add(entrada);

         while (numero<5){
             for(int f=0; array.size()>f; f++){
                 System.out.println("Lista de Itens: "+array.get(f));
             }
         }








        }
    }




