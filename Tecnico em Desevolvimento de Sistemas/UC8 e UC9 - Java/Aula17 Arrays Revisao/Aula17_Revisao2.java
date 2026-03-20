import java.util.Arrays;
import java.util.Scanner;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Insira Uma palavra");
        String palavraUsuario = entrada.next().trim();
        boolean pesquisa = palavraUsuario.contains("ola");
        boolean pesquisa2 = palavraUsuario.contains("teste");

        if(pesquisa||pesquisa2){
            System.out.println("Existe essa palavra");
        }else{
            System.out.println("Não tem nada");
        }


    }
         }










