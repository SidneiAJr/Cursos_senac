package exc1;
import java.util.Scanner;

public class Exc1 {

    public static void main(String[] args) {
      herois h1 = new herois("Pedro",5);
      h1.VerificarFome();
      h1.VerificarNome();
    }
    
}

interface Verificador{
    public void VerificarFome();
    public void VerificarNome();
}

class herois implements Verificador{
    protected String Nome;
    protected int NivelFome;

    public herois(String Nome, int NivelFome) {
        this.Nome = Nome;
        this.NivelFome = NivelFome;
    }

    @Override
    public void VerificarFome() {
        Scanner entrainfo = new Scanner(System.in);
        System.out.println("Infome o Nome do Heroi: ");
        Nome = entrainfo.next();
        System.out.println("Informe o Nivel da Fome: ");
        NivelFome = entrainfo.nextInt();
        System.out.println("esta com fome ");
        
        for (int i = 0; NivelFome >= 10; i++) {
            if (NivelFome < 5) {
                System.out.println(Nome + " está com pouca fome.");
            } else if (NivelFome >= 5 && NivelFome <= 7) {
                System.out.println(Nome + " está com fome.");
            } else {
                System.out.println(Nome + " está muito faminto!");
            }
        }
    }

    @Override
    public void VerificarNome() {
       if(Nome.equals("Meshi")){
           System.out.println("Humano Cozinha pra mim!");
       }else{
           System.out.println("QUERO COMIDA!!!");
       }
    }  
}
