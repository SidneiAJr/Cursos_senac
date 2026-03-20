package javaapplication_teste;


public class JavaApplication_teste {

    
    public static void main(String[] args) {
        // TODO code application logic here
        System.out.println("Ola Bem vindo");
                Filtro f1 = new Filtro("Pedro Mesa",20,"RS","COM CNH");
                f1.Verificar_Cidade();
                f1.Verificar_idade();
                Calculadora c1 = new Calculadora(5,5.55,5.5);
                c1.Soma();
                c1.soma2();
                c1.div();
                c1.mult();
                Gato g1 = new Gato("Vapo",20,0.30);
                g1.MostrarRacapeso();
                Cachorro c2 = new Cachorro("Doberman",20,1.40);
                c2.MostrarRacapeso();
                Mamifero m1 = new Mamifero("marrom", "Urso",300,1);
                Reptil r1 = new Reptil("Lagarto", 20, 30);
                m1.MostrarRacapeso();
                r1.MostrarRacapeso();
    }
    
}

class Pessoa {
     protected String Nome_Completo;
     protected int Idade;
     protected String Cidade;
     protected String Informacao;

    public Pessoa(String Nome_Completo, int Idade, String Cidade, String Informacao) {
        this.Nome_Completo = Nome_Completo;
        this.Idade = Idade;
        this.Cidade = Cidade;
        this.Informacao = Informacao;
    }

   
}

interface Verificar{
    public void Verificar_idade();
    public void Verificar_Cidade();
}

abstract class Fulano extends Pessoa implements  Verificar{

    Fulano(String Nome_Completo,int Idade,String Cidade,String Informacao) {
        super(Nome_Completo,Idade,Cidade,Informacao);
    }

   
    @Override
    public abstract void Verificar_idade();
    
    @Override
    public abstract void Verificar_Cidade();
    
}


class Filtro extends Fulano{
    Filtro(String Nome_Completo,int Idade,String Cidade,String Informacao) {
        super(Nome_Completo,Idade,Cidade,Informacao);
    }

  

    @Override
     public void Verificar_idade(){
         if(Idade<=18){
             System.out.println("Menor Idade");
         }else{
             System.out.println("Maior de Idade");
         }
     }
    
    @Override
     public void Verificar_Cidade(){
         switch(Cidade){
             case "RS":
                 System.out.println("Gaucho");
                 break;
             case "SC":
                System.out.println("Catarinese");
                 break; 
             case "PR":
                System.out.println("Paranaese");
                 break; 
             default:
                 System.out.println("Implementado....");
              break;
         }
     }
}

class Calculadora{
    protected double nota1;
    protected double nota2;
    protected double nota3;

    public Calculadora(double nota1, double nota2, double nota3) {
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
    
    public double Soma(){
      double soma = nota1+nota2+nota3;
      if(soma<7){
          System.out.printf("Soma %.2f",soma);
      }else if(soma<=5){
          System.out.printf("Soma %.2f",soma);
      }else{
          System.out.println("Reprovado");
      }
      return soma;
    }
    
    double resultado = 0;
    public double soma2(){
        resultado = this.nota1+this.nota2;
        System.out.printf("Resultado: %.2f \n",resultado);
        return resultado ;
    }
    public double sub(){
        resultado = this.nota1-this.nota2;
        System.out.printf("Resultado: %.2f \n",resultado);
        return resultado;
    }
    public double div(){
        resultado = this.nota1/this.nota2;
        if(this.nota1==0){
            return 0;
        }
        System.out.printf("Resultado: %.2f \n",resultado);
        return resultado;
    }
    public double mult(){
        resultado = this.nota1*this.nota2;
        System.out.printf("Resultado: %.2f \n",resultado);
        return resultado;
    }
}


class Animal{
    protected String raca;
    protected double Peso;
    protected double Tamanho;

    public Animal(String raca, double Peso, double Tamanho) {
        this.raca = raca;
        this.Peso = Peso;
        this.Tamanho = Tamanho;
    }
    
    public String MostrarRacapeso(){
        return "O Animal é um(a)"+this.raca+"Peso"+this.Peso+"kg"+ "Tamnhao"+this.Tamanho;
    }
    
    public String FazerSom(){
         return "O Animal Esta fazendo Som";
     }
}

class Cachorro extends Animal{

    public Cachorro(String raca, double Peso, double Tamanho) {
        super(raca, Peso, Tamanho);
    }
    
    
    public String MostrarRacapeso(){
        System.out.println("O Animal é um(a)"+ this.raca + "Peso"+ this.Peso + "Kg"+ "Tamnhao" + this.Tamanho);
        return "O Animal é um(a)"+this.raca+"Peso"+this.Peso+"Kg"+ "Tamnhao"+this.Tamanho;
    }
    public String FazerSom(){
         return "O Animal Esta fazendo Som";
     }
}


class Gato extends Animal{

    public Gato(String raca, double Peso, double Tamanho) {
        super(raca, Peso, Tamanho);
    }
    
       public String MostrarRacapeso(){
        System.out.println("O Animal é um(a)" + this.raca + "Peso" + this.Peso + "Kg"+ "Tamnhao" + this.Tamanho);
        return "O Animal é um(a)"+this.raca+"Peso"+this.Peso+"Kg"+ "Tamnhao"+this.Tamanho;
    }
       public String FazerSom(){
         return "O Animal Esta fazendo Som";
     }
}

class Reptil extends Animal{

    protected boolean TemEscama;
    public Reptil(String raca, double Peso, double Tamanho) {
        super(raca, Peso, Tamanho);
        this.TemEscama=TemEscama;
    }
     public String MostrarRacapeso(){
        System.out.println("O Animal é um(a)" + this.raca + "Peso" + this.Peso + "Kg"+ "Tamnhao" + this.Tamanho);
        return "O Animal é um(a)"+this.raca+"Peso"+this.Peso+"Kg"+ "Tamnhao"+this.Tamanho;
    }
     
     @Override
     public String FazerSom(){
         return "O Animal Esta fazendo Cantando";
     }
}

class Mamifero extends Animal{
    protected String CorPelo;

    public Mamifero(String CorPelo, String raca, double Peso, double Tamanho) {
        super(raca, Peso, Tamanho);
        this.CorPelo = CorPelo;
    }
    
     public String MostrarRacapeso(){
        System.out.println("O Animal é um(a)" + this.raca + "Peso" + this.Peso + "Kg"+ "Tamnhao" + this.Tamanho);
        return "O Animal é um(a)"+this.raca+"Peso"+this.Peso+"Kg"+ "Tamnhao"+this.Tamanho;
    }
     
     
     public String FazerSom(){
         return "O Animal Esta fazendo som de motor";
     }
     
}
