package javaapplication2;

public class JavaApplication2 {

    public static void main(String[] args) {

        System.out.println("=== Bem vindo ===");

        Personagem pl = new Personagem("Guerreiro", 50, 34, 0, 80, 100, 0.5, 3.5);
        Personagem pl2 = new Personagem("Mago", 40, 20, 120, 70, 90, 0.8, 2.0);

        pl.VerificarAP();
        pl.VerificarArmadura();
        pl.VerificarDano();
        pl.VerificarHP();

        System.out.println("------------------");

        pl2.VerificarAP();
        pl2.VerificarArmadura();
        pl2.VerificarDano();
        pl2.VerificarHP();
    }
}

// Interface
interface VerificarStatus {
    void VerificarHP();
    void VerificarArmadura();
    void VerificarDano();
    void VerificarAP();
}

// Classe Abstrata
abstract class ClassePer implements VerificarStatus {
    public String NomePersonagem;
    public int Dano;
    public int Armadura;
    public int AP;
    public int HP;
    public int VidaMax;
    public double AtaqueSpeed;
    public double RouboVida;

    ClassePer(String NomePersonagem, int Dano, int Armadura, int AP, int HP, int VidaMax, double AtaqueSpeed, double RouboVida) {
        this.AP = AP;
        this.Armadura = Armadura;
        this.AtaqueSpeed = AtaqueSpeed;
        this.NomePersonagem = NomePersonagem;
        this.Dano = Dano;
        this.RouboVida = RouboVida;
        this.HP = HP;
        this.VidaMax = VidaMax;
    }
}

// Classe concreta
class Personagem extends ClassePer {

    Personagem(String NomePersonagem, int Dano, int Armadura, int AP, int HP, int VidaMax, double AtaqueSpeed, double RouboVida) {
        super(NomePersonagem, Dano, Armadura, AP, HP, VidaMax, AtaqueSpeed, RouboVida);
    }

    @Override
    public void VerificarHP() {
        System.out.println("HP de " + NomePersonagem + ": " + HP + "/" + VidaMax);
    }

    @Override
    public void VerificarArmadura() {
        System.out.println("Armadura de " + NomePersonagem + ": " + Armadura);
    }

    @Override
    public void VerificarDano() {
        System.out.println("Dano de " + NomePersonagem + ": " + Dano);
    }

    @Override
    public void VerificarAP() {
        System.out.println("AP de " + NomePersonagem + ": " + AP);
    }
}
