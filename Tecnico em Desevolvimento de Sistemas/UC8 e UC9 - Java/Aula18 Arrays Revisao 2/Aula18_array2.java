package aula1;

// Importa as classes necessárias para entrada de dados (Scanner) e listas (ArrayList e List)
import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;

public class Aula1 {

    public static void main(String[] args) {
       
       // Cria uma lista de Strings chamada "lista"
       List<String> lista = new ArrayList<>();
       
       // Adiciona elementos (nomes) na lista
       lista.add("Arthur"); // posição 0
       lista.add("Jian");   // posição 1
       lista.add("Super Kalleo"); // posição 2
       lista.add("Joao da massa"); // posição 3
       lista.add("Luskao"); // posição 4
       
       // Remove o elemento "Joao da massa" da lista
       lista.remove("Joao da massa"); // agora a lista tem 4 elementos
       
       // Acessa elementos individuais usando o índice
       String p1 = lista.get(0); // pega o primeiro elemento ("Arthur")
       String p2 = lista.get(1); // pega o segundo elemento ("Jian")
       String p3 = lista.get(2); // pega o terceiro elemento ("Super Kalleo")
       
       // Substitui o elemento na posição 2 por um novo valor
       lista.set(2,"Lukao o brabo"); // "Super Kalleo" é substituído por "Lukao o brabo"
       
       // Armazena o tamanho atual da lista em uma variável
       int tamanhoLista = lista.size(); // 4 elementos atualmente
       
       // Exibe o tamanho da lista
       System.out.println("Tamanho da Lista: "+ tamanhoLista);
       
       // Exibe todos os elementos da lista
       System.out.println(lista); // imprime: [Arthur, Jian, Lukao o brabo, Luskao]
       
       // lista.remove(lista); 
       // Isso vai causar um erro de compilação ou de tempo de execução
       // Se quiser remover todos os elementos, use lista.clear();
       // lista.clear(); // limpa a lista completamente
       
       // Exibe os valores individuais armazenados antes da alteração
       System.out.println("Posiçao 1: "+p1); // "Arthur"
       System.out.println("Posiçao 2: "+p2); // "Jian"
       System.out.println("Posiçao 3: "+p3); // "Super Kalleo"
       
       // IMPORTANTE: p3 ainda vai mostrar "Super Kalleo" mesmo depois do set,
       // porque p3 foi atribuído antes da alteração com set()
              
    }
}
