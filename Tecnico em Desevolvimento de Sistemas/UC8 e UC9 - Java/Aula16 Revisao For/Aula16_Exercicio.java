package java1;

import java.util.Scanner;

public class Java1 {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Insira uma Opcao\n1-Ninja\n2-Inimigo\n3-Quantidade de Lutas");
        int opcao = 0;
        while(opcao!=4){
            opcao = entrada.nextInt();
             switch(opcao){
            case 1:
               ninja n1 = new ninja(100, "Inimigo", 5);
               n1.ver();
             break;
             case 2:
                inimigo i1 = new inimigo(100,2);
                i1.ver();
                break;
             case 3:
                luta l1 = new luta(1, 100, 2);
                l1.ver();
             default:
                 System.out.println("Opção Indisponivel");
                 break;
        }
System.out.println("Insira uma Opcao\n1-Ninja\n2-Inimigo\n3-Quantidade de Lutas");
    }
        }
}


interface verificar{
    void ver();
}

class ninja implements verificar{
    protected int vida;
    protected double dano;
    protected String Nome;

    public ninja(double dano, String Nome,int vida) {
        this.dano = dano;
        this.Nome = Nome;
        this.vida = vida;
    }

    @Override
    public void ver() {
        vida = 100;
        dano = 1;
        while(vida>0){
            vida --;
            dano +=0.02;
            System.out.println("Ninja esta lutando contra "+Nome+" Vida esta diminuindo "+vida+" E o dano esta Aumentando "+dano);
        }
        System.out.println("Ninja Morreu kkkk!");
    }
}

class inimigo implements verificar{
    protected int VidaInimogo;
    protected int Dano;

    public inimigo(int VidaInimogo, int Dano) {
        this.VidaInimogo = VidaInimogo;
        this.Dano = Dano;
    }
    
    public void ver(){
        VidaInimogo = 100;
            while(VidaInimogo>0){
                 VidaInimogo --;
                System.out.println("Inimigo Lutando contra Ninja "+VidaInimogo+" Dano Inimgo "+Dano);
            }
                System.out.println("Inimigo Morreu kk!");
            }
            
        

    
}

class luta implements verificar {
    protected int quantidadeLuta;

    public luta(int quantidadeLuta, int VidaInimigo, int Dano) {
        this.quantidadeLuta = quantidadeLuta;
    }

    @Override
    public void ver() {
        Scanner entrada = new Scanner(System.in);

        int vidaNinja = 100; // ninja inicia com 100
        System.out.println("Quantos inimigos deseja enfrentar? (1 a 5)");
        quantidadeLuta = entrada.nextInt();

        if (quantidadeLuta < 1 || quantidadeLuta > 5) {
            System.out.println("Quantidade inválida!");
            return;
        }

        // Loop das batalhas
        for (int i = 1; i <= quantidadeLuta; i++) {

            int vidaInimigo = 50;   // cada inimigo inicia com 50
            int danoInimigo = 10;   // dano fixo do inimigo

            System.out.println("\n=== BATALHA "+i+" ===");

            while (vidaNinja > 0 && vidaInimigo > 0) {
                System.out.println("Escolha uma acao:\n1 - Atacar\n2 - Defender");
                int acao = entrada.nextInt();

                if (acao == 1) { 
                    // atacar
                    vidaInimigo -= 20;
                    vidaNinja -= danoInimigo;

                    System.out.println("Voce atacou! Inimigo ficou com: " + vidaInimigo);
                    System.out.println("Voce tomou dano e está com: " + vidaNinja);

                } else if (acao == 2) {
                    // defender
                    vidaNinja -= (danoInimigo / 2);

                    System.out.println("Voce defendeu! Dano reduzido.");
                    System.out.println("Vida do ninja: " + vidaNinja);

                } else {
                    System.out.println("Opcao inválida!");
                }
            }

            if (vidaNinja <= 0) {
                System.out.println("\n⚠ Ninja morreu!");
                System.out.println("Falhou no Exame Chunin!");
                return;
            }

            System.out.println("\nInimigo derrotado!!!");
        }

        // Se chegou aqui, venceu todos
        System.out.println("\n🎉 Aprovado no Exame Chunin!");
    }
}

   
