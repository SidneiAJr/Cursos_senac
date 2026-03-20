import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        maga m1 = new maga(3,6,"");
        m1.Verificar1();

        }
}

interface Verificar{
    void Verificar1();
}

class maga implements Verificar {
    protected int mana;
    protected int tamanho;
    protected String nome;

    public maga(int mana, int tamanho, String nome) {
        this.mana = mana;
        this.tamanho = tamanho;
        this.nome = nome;
    }

    @Override
    public void Verificar1() {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Insira A mana");
        mana= entrada.nextInt();
        System.out.println("Insira o Alcance");
        tamanho = entrada.nextInt();
        System.out.println("Insira o Nome");
        nome = entrada.next();
        boolean teste1 = mana <20;
        boolean teste2 = tamanho <5;
        boolean teste3 = !teste1;
        boolean teste4 = !teste3;

        if(mana<20||tamanho<5||nome.equals("Frieren")){
            System.out.println("Magia Pode ser Usada");
        }else{
            System.out.println("Não Pode ser usada");
        }
    }
}

