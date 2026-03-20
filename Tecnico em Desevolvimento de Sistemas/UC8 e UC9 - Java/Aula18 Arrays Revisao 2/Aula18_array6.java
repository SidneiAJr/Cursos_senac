package aula0212;
import java.util.Set;
import java.util.HashMap;
import java.util.Map;

public class Aula0212 {

    public static void main(String[] args) {
        Map<String,Double>lista = new HashMap<>();
        
        lista.put("Eldrin",750.0);
        lista.put("Mira",920.0);
        lista.put("Thalos",860.3);
        
        
        double poderAumentado= lista.put("Eldrin",800.0);
        double poderMira = lista.get("Mira");
        
        for(Map.Entry<String, Double> entry : lista.entrySet()){
             System.out.println("Mago: " + entry.getKey() + " | Poder: " + entry.getValue());
        }
        
        System.out.println("Poder de Mira: "+poderMira);
        System.out.println("Poder Aumentado: "+poderAumentado);
         System.out.println("Poder atual de Eldrin: " + lista.get("Eldrin"));
         
         int numeroMagos = lista.size();
         
         System.out.println("Quantidade Total de Magos: "+ numeroMagos);
         
        
        
    }
    
}
