package aula0212;
import java.util.Set;
import java.util.HashSet;


public class Aula0212 {

    public static void main(String[] args) {
        Set<String> tecnologia = new HashSet<>();
        
        tecnologia.add("Java");
        tecnologia.add("Assembly");
        tecnologia.add("Cobol");
        tecnologia.add("Java");
        tecnologia.add("C#");
        tecnologia.add("Python");
        
        int tamanho = tecnologia.size();
        
        System.out.println("Tamanho : "+tamanho);
        
        for(String tech: tecnologia){
            System.out.println("Tecnologias Disponiveis: "+tech);
        }
        
        
        
        
         
        
        
    }
    
}
