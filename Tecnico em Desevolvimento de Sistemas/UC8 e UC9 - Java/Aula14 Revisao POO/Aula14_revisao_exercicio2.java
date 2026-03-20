package exc1;
import java.util.Scanner;

public class Exc1 {

    public static void main(String[] args) {
     carta c1 = new carta(550);
     c1.VerificarTexto();
    }
    
}

interface Verificador{
    public void VerificarTexto();
}

class carta implements Verificador{
    protected int Tamanhotexto;

    public carta(int Tamanhotexto) {
        this.Tamanhotexto = Tamanhotexto;
    }
    @Override
    
    public void VerificarTexto(){
        Scanner entra = new Scanner(System.in);
        System.out.printf("Insira o Numero de palavras que vai ter sua carta: ");
        Tamanhotexto = entra.nextInt();
        if(Tamanhotexto>300){
           System.out.printf("Seu Texto tem "+Tamanhotexto);
        }else{
            System.out.printf("Texto Pequeno"+Tamanhotexto);
        }
       
    }
    
}
  
   
    
