class Main {
    public static void main(String[] args) {
        System.out.println("Bem vindo ao Jogo dos Guri");
        Player p1 = new Player(100, 100, 1.5, 20, 10, 0.5, 0.2, "Guerreiro", 0, 0);
        p1.AP();
        p1.Dano();
        p1.Inventario();
        p1.Mana();
        p1.RouboVida();
        p1.VelAtaqueSpeed();
        p1.RouboVida();
    }
}

interface VerificarInventario{
    void Inventario();
    void Itens();
}

interface VerificarPersonagem{
    void Vida();
    void Mana();
    void AP();
    void Dano();
    void VelAtaqueSpeed();
    void RouboVida();
    void percDano();
}

abstract class StatusBase implements VerificarInventario,VerificarPersonagem{
    
    protected int VidaMax;
    protected int vida;
    protected double velocidadeatack;
    protected double speed;
    protected double dano;
    protected double roubovida;
    protected double multdano;
    protected String infoclasse;
    protected int EspacoInv;
    protected int EspacoMaxInv;

    StatusBase(int VidaMax,int vida,double velocidadeatack,double speed,double dano, double roubovida,double multdano,String infoclasse,int EspacoInv,int EspacoMaxInv){
       this.VidaMax = VidaMax;
       this.vida = vida;
       this.velocidadeatack = velocidadeatack;
       this.speed = speed;
       this.dano = dano;
       this.roubovida = roubovida;
       this.multdano = multdano;
       this.infoclasse = infoclasse;
       this.EspacoInv = EspacoInv;
       this.EspacoMaxInv = EspacoMaxInv;
    }

    public void Inventario(){}
    public void Itens(){}
    public void Vida(){}
    public void Mana(){}
    public void AP(){}
    public void Dano(){}
    public void VelAtaqueSpeed(){}
    public void RouboVida(){}
    public void percDano(){}

}

class Player extends StatusBase{
    
     Player(int VidaMax,int vida,double velocidadeatack,double speed,double dano, double roubovida,double multdano,String infoclasse,int EspacoInv,int EspacoMaxInv){
       super(VidaMax,vida,velocidadeatack,speed,dano,roubovida,multdano,infoclasse,EspacoInv,EspacoMaxInv);
    }

    public void Inventario(){
        int Inv = EspacoMaxInv;
        if(Inv>=10){
            System.out.println("Inventario Cheio "+Inv);
        }else if(Inv>9){
            System.out.println("Inventario Quase Cheio "+Inv);
        }else{
            System.out.println("Quantidade de Itens no Inventario "+Inv);
        }
    }
    public void Itens(){
    }
    public void Vida(){
        switch (infoclasse) {
            case "Guerreiro":
                if(infoclasse=="Guerreiro Leve"){
                    System.out.println("Classe Guerreiro Leve"+"|"+VidaMax+"HP"+"|"+vida);
                }
                break;
             case "Mago":
                if(infoclasse=="Mago Comum"){
                    System.out.println("Mago Comum"+"|"+VidaMax+"HP"+"|"+vida);
                }
                break;
                case "Titan":
                if(infoclasse=="Titan"){
                    System.out.println("Titan Comum"+"|"+VidaMax+"HP"+"|"+vida);
                }
                break;
            default:
                break;
        }
    }
    public void Mana(){
    }
    public void AP(){
        if(infoclasse=="Mago"){
            double danoaumentado = (multdano*dano)*0.02;
            System.out.println("Dano Aumentado"+danoaumentado);
        }else{
          System.out.println("Personagem nao usa Poder de Habilidade");
        }
    }
    public void Dano(){
        switch (infoclasse) {
            case "Guerreiro":
            double DanoAl = (multdano*dano)*0.05;
            System.out.println("Dano Aumentado para Classe Guerreiro"+DanoAl);
            break;
            case "Mago":
            double DanoAl2 = (multdano*dano)*0.03;
            System.out.println("Dano Aumentado para Classe Guerreiro"+DanoAl2);
            break;
            case "Titan":
            double DanoAl3 = ((vida/VidaMax)*1)*0.10; // Para cada 1% de vida perdida ganha 0.10% de aumento de dano
            System.out.println("Dano Aumentado para Classe Guerreiro"+DanoAl3);
            break;
            default:
            break;
        }
    }
    public void VelAtaqueSpeed(){
    }
    public void RouboVida(){}
    public void percDano(){}






}
