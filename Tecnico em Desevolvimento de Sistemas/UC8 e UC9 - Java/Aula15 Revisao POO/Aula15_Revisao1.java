import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
           personagem p1 = new personagem(50,90);
           p1.Verificar();
        }
}

interface Verificar{
    void Verificar();
}

class personagem implements Verificar{
    protected int concetracao;
    protected int energia;

    public personagem(int concetracao, int energia) {
        this.concetracao = concetracao;
        this.energia = energia;
    }

    @Override
    public void Verificar() {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Informe o Nivel de concentração: ");
        concetracao = entrada.nextInt();
        System.out.println("Informe o Nivel de Energia: ");
        energia = entrada.nextInt();
        if(concetracao>=70&&energia>50){
            System.out.println("Tanjiro Pode Usar Tecnica!");
        }else{
            System.out.println("Não pode Usar");
        }
        entrada.close();
    }
}
