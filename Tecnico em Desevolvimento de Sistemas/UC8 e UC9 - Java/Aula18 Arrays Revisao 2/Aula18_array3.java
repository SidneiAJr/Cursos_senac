package aula1;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;


public class Aula1 {

    public static void main(String[] args) {
       
       List<String> Playlist = new ArrayList<>();
       
       Playlist.add("Musica 1");
       Playlist.add("Musica 2");
       Playlist.add("Musica 3");
       Playlist.add("Musica 4");
       Playlist.add("Musica 5");
       
       Playlist.set(0, "Musica6");
       
       boolean TemMusica = Playlist.contains("Lofi Beats");
       
       int indeice = Playlist.indexOf("Jazz Night");
       
       System.out.println("Tem Musica: "+TemMusica);
       System.out.println("Poisição: "+ indeice);
       
        
              
    }
}
