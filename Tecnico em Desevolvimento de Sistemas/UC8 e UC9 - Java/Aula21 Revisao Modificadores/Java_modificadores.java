public class Main {
    public static void main(String[] args) {
     agente g1 = new agente();
     g1.apresentar("Pedro");
     g1.executarMissao();
    g1.calcularSigilo(20,1);
    
    }
}


class agente{
    protected String nome;
    protected int Idade;

    public void executarMissao(){
        System.out.println("Missão em Andamento");
    }
    public int calcularSigilo(int base,int missao){
          return base+missao;
    }
    public void apresentar(String codinome){
        System.out.println("Agente Identificado como: "+ codinome);
    }
}


