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

       public void atacar(){
         Console.WriteLine($"Personagem {nome} Ataca com forca de {forca}, e tem de velocidade de ataque {velataque}, com roubo de vida de {roubovida}");
       }
       public void Andar(){
        Console.WriteLine($"{nome} esta Andando em direcao ao monstro");
       }
       public personagem(string nomepersonagem,int forcaInicial,int VidaInicial, double velataque2,double roubo){
          nome = nomepersonagem;
          forca = forcaInicial;
          vida = VidaInicial;
          velataque = velataque2;
          roubovida = roubo;
       }
}

class inimigo{
    public string nome;
    public int forca;
    public int vida;
    public string tipo;
    public void atacar(personagem meuPersonagem){
         meuPersonagem.vida -= forca;
         Console.WriteLine($"O inimigo {tipo},ataca Personagem {meuPersonagem.nome} abaixando sua vida, para {meuPersonagem.vida} Pontos de vida");
       }
       public void Andar(){
       }
       public inimigo(string nomeinimigo, int forcaInicial, int vidaIni){
          tipo = "Monstro";
          nome = nomeinimigo;
          forca = forcaInicial;
          vidaIni= vida;
       }
}


class Jogo
{
            static void Main(string[] arg){
                //Criar um personagem
                personagem personagem1 = new personagem("Dama Vermelha",5,100,0.45,0.75);
                personagem1.atacar();
                personagem1.Andar();
                inimigo inimigo1 = new inimigo("Monstro",50,400);
                inimigo1.atacar(personagem1);
                inimigo1.Andar();
                //Verifica a vida do personagem.
                if(personagem1.vida>100){
                    Console.WriteLine("******Dama Vermelha com a vida cheia*****");
                }else if(personagem1.vida<30){
                   Console.WriteLine("*******Dama Vermelha esta morrendo*******"); 
                }else{
                    Console.WriteLine("Dama Vermelha Tomou dano critico");
                }
                //Aplica status e Buff.
                if(personagem1.vida>100){
                 Console.WriteLine("Dama Vermelha esta sem status");   
                }else if(personagem1.vida>40){
                 Console.WriteLine("******Status de Roubo de vida e cura aumentado,Buff Ativado!******");
                }else{
                  Console.WriteLine("A vida do personagem esta muito baixa, Cuidado!");  
                }
                
              for(int i=0; personagem1.vida<100; personagem1.vida++){
               Console.WriteLine($"O personagem {personagem1.nome}: {personagem1.vida}");
               personagem1.vida=personagem1.vida+1;
               personagem1.vida ++;
              }
              

            }
}    
