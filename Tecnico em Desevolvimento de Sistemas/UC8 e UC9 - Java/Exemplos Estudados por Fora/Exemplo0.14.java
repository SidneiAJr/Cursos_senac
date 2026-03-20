class Main {
    public static void main(String[] args) {
        System.out.println("Bem Vindo Player");
        Personagem p1 = new Personagem("Guerreiro", "Aventureiro", 20, 0, true,1.5, 0.2, 100, 100, 35, 100, 50, "Platina");
        p1.VerificaReino();
        p1.HP();
        p1.Mana();
        p1.Armadura();
        p1.VelAtaque();
        p1.RouboVida();
        p1.ReduzDano();
        p1.NomeClasse2();
        System.out.println("-------------------");
    }
}

interface VerificaReino{
    void VerificaReino();
}

interface VerificaStatus{
    void HP();
    void Mana();
    void Armadura();
    void VelAtaque();
    void RouboVida();
    void NomeClasse2();
}

interface Reducaodano{
    void ReduzDano();
}

abstract class Classe implements VerificaReino,VerificaStatus,Reducaodano{
      public String NomeClasse;
      public String InfoClasse;
      public int Dano;
      public int AP;
      public boolean TemEvolucao;
      public double VelAtaque;
      public double RouboVida;
      public double MultDano;
      public int VidaMax ;
      public int Vida;
      public int ManaMax;
      public int Mana;
      public String Armadura;

    Classe(String NomeClasse,String InfoClasse,int Dano,int AP,boolean TemEvolucao,double VelAtaque,double RouboVida,double MultDano,int VidaMax,int Vida,int ManaMax,int Mana,String Armadura){
    this.NomeClasse = NomeClasse;
    this.InfoClasse = InfoClasse;
    this.Dano = Dano;
    this.AP = AP;
    this.TemEvolucao = TemEvolucao;
    this.VelAtaque = VelAtaque;
    this.RouboVida = RouboVida;
    this.MultDano = MultDano;
    this.VidaMax = VidaMax;
    this.Vida = Vida;
    this.ManaMax = ManaMax;
    this.Mana = Mana;
}
    public void VerificaReino(){

      }
    public void HP(){

      }
    public void Mana(){

      }
    public void Armadura(){

    }
    public void VelAtaque(){

    }
     public void RouboVida(){

    }
    public void ReduzDano(){
        
    }
    public void NomeClasse2(){

    }

}

class Personagem extends Classe implements VerificaReino,VerificaStatus,Reducaodano{
    Personagem(String NomeClasse,String InfoClasse,int Dano,int AP,boolean TemEvolucao,double VelAtaque,double RouboVida,double MultDano,int VidaMax,int Vida,int ManaMax,int Mana,String Armadura){
        super(NomeClasse, InfoClasse, Dano, AP, TemEvolucao, VelAtaque, RouboVida, MultDano, VidaMax, Vida, ManaMax, Mana,Armadura);
    }
   public void VerificaReino(){
        
    }
    public void HP(){
        if(VidaMax<=100){
            System.out.println("Vida Maxima |" + VidaMax + "Vida Atual|" + Vida);
        }else if(VidaMax<50){
          System.out.println("Vida Maxima |" + VidaMax + "Vida Atual|" + Vida);
        }else{
            System.out.println("Vida Maxima |" + VidaMax + "Vida Atual Critico Cuidado!" + Vida);
        }
    }
    public void Mana(){
        if(ManaMax<=100){
            System.out.println("Vida Maxima |" + ManaMax + "Vida Atual" + Mana);
        }else if(VidaMax<50){
          System.out.println("Vida Maxima |" + ManaMax + "Vida Atual" + Mana);
        }else{
            System.out.println("Vida Maxima |" + ManaMax + "Vida Atual Critico Cuidado!" + Mana);
        }
    }
    public void ReduzDano(){
       if(Armadura=="Platina"){
            double danorecebido =- 20;
            System.out.println("Tipo Armadura"+ Armadura);
        }else if(Armadura=="Diamante"){
             double danorecebido =- 50;
         System.out.println("Tipo Armadura"+ Armadura);
        }else if(Armadura=="Ferro"){
             double danorecebido =- 100;
           System.out.println("Tipo Armadura"+ Armadura);
        }
    }
    public void VelAtaque(){
        if(VelAtaque<2){
        double bonus = VelAtaque*0.02;
        System.out.println("Vel"+ VelAtaque);
        }else if(VelAtaque<1){
             double bonus = VelAtaque*0.05;
          System.out.println("Vel"+ VelAtaque);
        }else if(VelAtaque<0.5){
             double bonus = VelAtaque*0.06;
           System.out.println("Vel"+ VelAtaque);
        }
    }
    public void RouboVida(){
        if(RouboVida<7.5){
        double bonus = RouboVida*0.14;
        System.out.println("Roubo de Vida"+RouboVida);
        }else if(VelAtaque<1){
             double bonus = RouboVida*0.25;
           System.out.println("Roubo de Vida"+RouboVida);
        }else if(VelAtaque<0.5){
             double bonus = RouboVida*0.45;
            System.out.println("Roubo de Vida"+RouboVida);
        }
    }
    public void NomeClasse2(){
        if(NomeClasse=="Guerreiro"){
        System.out.println("Classe"+NomeClasse);
        }else if(NomeClasse=="Mago"){
          System.out.println("Classe"+NomeClasse);
        }else if(NomeClasse=="Titan"){
           System.out.println("Classe"+NomeClasse);
        }
    }
}
