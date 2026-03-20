/*
Tipo de variaveis em Java
Double
Float
String
*/

package teste;

public class Teste {
    
    public static void main(String[] args) {
       
    }
    
}

 abstract class Especie{
    protected String NomeEspecie;
    protected String TipoEspecie;
    protected int IdadeEspecie;
    protected double PesoEspecie;
    protected String InfoEspecie;

    public Especie(String NomeEspecie, String TipoEspecie, int IdadeEspecie, double PesoEspecie, String InfoEspecie) {
        this.NomeEspecie = NomeEspecie;
        this.TipoEspecie = TipoEspecie;
        this.IdadeEspecie = IdadeEspecie;
        this.PesoEspecie = PesoEspecie;
        this.InfoEspecie = InfoEspecie;
    }
    
    public void VerificaEspecie(){};
    public void VerificarIdadeEspecie(){}
    public void VerificarPesoEspecie(){}
   
}

class Gato extends Especie{

    public Gato(String NomeEspecie, String TipoEspecie, int IdadeEspecie, double PesoEspecie, String InfoEspecie) {
        super(NomeEspecie, TipoEspecie, IdadeEspecie, PesoEspecie, InfoEspecie);
    }
    
    public void VerificaEspecie(){
      double idadeConvertidaCachorro = IdadeEspecie*7;
      double IdadeconvertidaBaleia = IdadeEspecie*10;
        switch(IdadeEspecie){
            case 20:
                System.out.printf(String.format("Idade",IdadeEspecie));
         break;
         default:
         break;
        }
    }
}
