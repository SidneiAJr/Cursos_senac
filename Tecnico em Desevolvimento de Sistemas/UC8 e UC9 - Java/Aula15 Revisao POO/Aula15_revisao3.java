import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
       personagem p1 = new personagem(50,true,6);
       p1.ver();

        }
}

interface Verificar{
    void ver();
}

class personagem implements Verificar{
    protected int estresse;
    protected int diasemana;
    protected boolean Grito;

    public personagem(int estresse, boolean grito, int diasemana) {
        this.estresse = estresse;
        Grito = grito;
        this.diasemana = diasemana;
    }

    @Override
    public void ver() {
        Scanner en = new Scanner(System.in);
        System.out.println("Nivel de estress (0 a 100)");
        estresse = en.nextInt();
        System.out.println("Nivel da semana (1 a 7)");
        diasemana = en.nextInt();
        System.out.println("Grito true/false");
        Grito = en.nextBoolean();
        if(estresse<70&&diasemana==5||Grito!=true){
            System.out.println("Modo Vocal Ativo");
        }else{
            System.out.println("Não ativar");
        }
        en.close();
    }


}
