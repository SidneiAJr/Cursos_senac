package aula1;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;


public class Aula1 {

    public static void main(String[] args) {
       
       List<String> CarrinhoCompras = new ArrayList<>();
       
       CarrinhoCompras.add("Pneu");
       CarrinhoCompras.add("Smartphone");
       CarrinhoCompras.add("Agua");
       CarrinhoCompras.add("Meteoro");
       CarrinhoCompras.add("Pão");
       
        System.out.println("Carrinho de Compras: "+CarrinhoCompras);
        
        CarrinhoCompras.clear();
        
        if(CarrinhoCompras.isEmpty()){
            System.out.println("Carrinho ta vazio!");
        }else{
            System.out.println("Carrinho Não esta Vazio!");
        }
       
       
       
        
              
    }
}
