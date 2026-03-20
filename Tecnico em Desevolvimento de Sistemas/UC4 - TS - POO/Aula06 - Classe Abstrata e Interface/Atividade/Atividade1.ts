/*
De Pesquisa
=============================================================================================================
  1) Qual a principal diferença entre classe abstrata e interface no TypeScript?
  A principal diferença entre uma interface e uma classe abstrata no TypeScript é que,A interface serve apenas para definir a estrutura (ou o "contrato") de uma classe,Já a classe abstrata pode definir tanto a estrutura quanto parte da implementação.
  ============================================================================================================
  2) Em quais casos você escolheria uma classe abstrata ao invés de uma interface?Você deve escolher uma classe abstrata quando,Deseja compartilhar código comum entre várias classes.

*/

//Atividade 1:
abstract class Animal{
    constructor(public NomeAnimel:string,public IdadeAnimal:number){}

    abstract falar():void;

}

class Gato extends Animal{
       public Nomegato:string;
       public Idade:number;
        constructor(Nomegato:string,Idade:number){
            super(Nomegato, Idade);
            this.Nomegato = Nomegato;
            this.Idade = Idade;
        }
        VerAnimal1(){
        console.log(`Nome Animal ${this.Nomegato}`)
    }
    falar(): void {
        console.log(`${this.Nomegato} diz: Miau!`);
    }
}
class Cachorro extends Animal{
     public NomeCachorro:string;
       public IdadeCachorro:number;
        constructor(NomeCachorro:string,IdadeCachorro:number){
            super(NomeCachorro, IdadeCachorro);
            this.NomeCachorro = NomeCachorro;
            this.IdadeCachorro = IdadeCachorro;
        }
    VerAnimal1(){
        console.log(`Nome Animal ${this.NomeCachorro}`)
    }
     falar(): void {
        console.log(`${this.NomeCachorro} diz: Au au!`);
    }
}

const Animal1 = new Gato("Jubileu",7);
const Animal2 = new Cachorro("Jubileu Prime",7);

Animal1.VerAnimal1();
Animal2.VerAnimal1();
Animal1.falar();
Animal2.falar();
