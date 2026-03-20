public class Main {
    public static void main(String[] args) {
       Carro c1 = new Carro("Santana",100,"Carro",98,"VW",true);
       c1.mover();
    }
}

class Veiculos{
    protected String NomeVeiculos;
    protected int potencia;
    protected String tipo;
    protected int ano;
    protected String Marca;
    protected boolean semove;

    public Veiculos(String nomeVeiculos, int potencia, String tipo, int ano, String marca,boolean semove) {
        NomeVeiculos = nomeVeiculos;
        this.potencia = potencia;
        this.tipo = tipo;
        this.ano = ano;
        Marca = marca;
        this.semove = semove;
    }

    void mover(){
     if(semove==true){
         System.out.println("Motor Ligado: "+semove);
     }else{
         System.out.println("Carro Desligado");
     }
    }
}

class Carro extends Veiculos{
    public Carro(String nomeVeiculos, int potencia, String tipo, int ano, String marca, boolean semove) {
        super(nomeVeiculos, potencia, tipo, ano, marca, semove);
    }
    @Override
    void mover(){
        if(semove==true){
            System.out.println(NomeVeiculos+"Veiculo:"+"Carro está Ligado "+semove);
        }else{
            System.out.println("Carro Desligado");
        }
    }
    }

    class moto extends Veiculos{
        public moto(String nomeVeiculos, int potencia, String tipo, int ano, String marca, boolean semove) {
            super(nomeVeiculos, potencia, tipo, ano, marca, semove);
        }
        void mover(){
            if(semove==true){
                System.out.println("Moto está Acelerando: "+semove);
            }else{
                System.out.println("Carro Desligado");
            }
        }
    }


