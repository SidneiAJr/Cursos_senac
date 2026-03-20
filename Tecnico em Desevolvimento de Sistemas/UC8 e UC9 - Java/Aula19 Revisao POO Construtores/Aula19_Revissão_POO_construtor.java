//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        // Chamada 1:
         teste1 t1 = new teste1();
         t1.exibirInfor();
        // Chamada 2:
        teste1 t2 = new teste1("Costelinha");
        t1.exibirInfor();
        // Chamada 3:
        teste1 t3 = new teste1("Deritos",true);
        t1.exibirInfor();
        //Chamada 4:
        teste1 t4 = new teste1("20 Queijos",93.20);
        t4.exibirInfor();
        teste1 t5 = new teste1("20 Queijos",true);
        t5.exibirInfor();

        }
    }

class teste1 {
    protected String Sabor;
    protected boolean bordaRecheada;
    protected double preco;
    protected double tamanho;

    // Constructor com parametro:
    public teste1(String sabor,boolean bordaRecheada, double preco, double tamanho) {
        Sabor = sabor;
        this.bordaRecheada = bordaRecheada;
        this.preco = preco;
        this.tamanho = tamanho;
    }

    // Consctrutor uma pizza vazia(Sem Parametros):
    public teste1(){
        System.out.println("Pizza Vazia!");
    }

    // Consctutor recebendo apensar o sabor, ideal para quando o cliente só escolhe o sabor
    public teste1(String sabor){
        this.Sabor=Sabor;
        this.preco=50;
    }

    // Consctutor com sabor pizza doce
    public teste1(String sabor,boolean BordaRecheada){
        this.Sabor=sabor;
        this.bordaRecheada = bordaRecheada;
        this.preco = 60.00;
        if(BordaRecheada){
            this.preco+=10;
        }
    }

    // Consctutor com sabor + preco
    public teste1(String Sabor,double preco){
        this.Sabor = Sabor;
        this.preco = preco;
    }


    void exibirInfor(){
        System.out.println("----Pizaria do TDS251T-----");
        System.out.println("Sabor: "+ Sabor);
        System.out.println("Borda Rechada: "+(bordaRecheada? "Sim": "Não"));
        System.out.println("Preço R$: "+preco);
        System.out.println();
    }






}


