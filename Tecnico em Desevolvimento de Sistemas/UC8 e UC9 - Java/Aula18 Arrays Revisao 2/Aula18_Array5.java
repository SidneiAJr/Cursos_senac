package aula1;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;


public class Aula1 {

    public static void main(String[] args) {
       
       // Criar A lista
       List<String> Herois = new ArrayList<>();
       
        //Adicionar Herois Na Lista
        Herois.add("Capitao Vinganca");
        Herois.add("Sombra Dourada");
        Herois.add("Dinamite Azul");
        Herois.add("Estrela Cibernetica");
        Herois.add("Raio Fantasma");
        Herois.add("Tempestade de Ferro");
        Herois.add("Falcao de Aco");
        Herois.add("Vingador Sombrio");
        Herois.add("Relampago Prateado");
        Herois.add("Guardiao Espectral");
        
        
        //Quantidade Total de herois
        int quantidadeHeroi = Herois.size();
        
        // Heroi na Posição 0
        String primeiroHeroi = Herois.get(0);
        
        //Adicionando na Posição 2
        Herois.set(2,"Capitao Mesa");
        
        //Remover a ocorrencia do heroi parecer que ele foi chamado
        String HeroiRemovido = Herois.remove(1);
        
        System.out.println("Heroi Foi chamado: "+HeroiRemovido);
        
        //Lista de Heroi
        System.out.println(Herois);
        
        System.out.println("Quantidade de Herois: "+quantidadeHeroi);
        
        System.out.println("Posicao 0: "+primeiroHeroi);
        
        System.out.println("\nHerois aguardando teste:");
        for (String heroi : Herois) {
            System.out.println(heroi);  // Exibe cada herói da lista
        }
    }
}
