abstract class Pessoa{
    constructor(public NomePessoa:string, public idadePessoa:number){}
    abstract Falar():void;
    abstract Correr():void;
    abstract Usar():void;
}

class Filho extends Pessoa{
     constructor(public NomeFilho:string,public IdadeFilho:number){
        super(NomeFilho,IdadeFilho);
        this.NomeFilho = NomeFilho;
        this.IdadeFilho = IdadeFilho;
     }
     Falar(): void {
         console.log(`Pessoa Falou ${this.NomeFilho}`)
     }
     Correr(): void {
         console.log(`Pessoa Correu ${this.NomeFilho}`)
     }
     Usar(): void {
         console.log(`Pessoa Usa ${this.NomeFilho}`)
     }
}

class Filha extends Pessoa{
    constructor(public NomeFilha:string, public IdadeFilha:number){
        super(NomeFilha,IdadeFilha);
        this.NomeFilha = NomeFilha;
        this.IdadeFilha = IdadeFilha;
    }
    Falar(): void {
         console.log(`Pessoa Falou ${this.NomeFilha}`)
     }
     Correr(): void {
         console.log(`Pessoa Correu ${this.NomeFilha}`)
     }
     Usar(): void {
         console.log(`Pessoa Usa ${this.NomePessoa}`)
     }
}

const Pessoa1 = new Filha("Janine",20);
const Pessoa2 = new Filha("Janine Jr",18);
Pessoa1.Correr();
Pessoa1.Falar();
Pessoa2.Usar();
