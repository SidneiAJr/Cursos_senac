using System;
    class personagem
    {

       //Atributos atributos são variaives  que minha classe usa
       // Constructor e uma função/metodo definido como os objetos
       // Metodos sao função que representam o que objeto dessa classe pode fazer
       public string nome;
       public int forca;
       public double roubovida;
       public int vida;
       public double velataque;
       public double cura;
       public double armadura;

       public void atacar(){
         Console.WriteLine($"Personagem {nome} Ataca com forca de {forca}, e tem de velocidade de ataque {velataque}, com roubo de vida de {roubovida}, a sua cura é {cura}.");
       }
       public personagem(string nomepersonagem,int forcaInicial,int VidaInicial, double velataque2,double roubo,double curabase, double armaduraIni){
          nome = nomepersonagem;
          forca = forcaInicial;
          vida = VidaInicial;
          velataque = velataque2;
          roubovida = roubo;
          cura = curabase;
          armadura= armaduraIni;
       }
}



class Jogo
{
            static void Main(string[] arg){
                //Criar um personagem
                personagem personagem1 = new personagem("Dama Vermelha",15,200,0.45,0.75,0.45,40);
                personagem1.atacar();
                //Verifica a vida do personagem.
                
              while(personagem1.vida >0){
                  Console.WriteLine($"{personagem1.vida}A vida do personagem esta aumentado {personagem1.roubovida} a cura{personagem1.cura} a forca{personagem1.forca} e {personagem1.armadura}");
                  personagem1.forca++;
                  personagem1.roubovida++;
                  personagem1.velataque++;
                  personagem1.cura++;
                  
              }
              
              
              

            }
}    
