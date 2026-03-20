import java.util.Arrays;
import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
             String ar [] = new String[4];
             Scanner entrada = new Scanner(System.in);
             String informacao;
             for(int i=0; i<ar.length; i++){
                 System.out.println("Insira Informações: ");
                 informacao= entrada.next();
                 ar[i]=informacao;
             }
        System.out.println("Infomrações do Array"+ Arrays.toString(ar));
             }
         }










