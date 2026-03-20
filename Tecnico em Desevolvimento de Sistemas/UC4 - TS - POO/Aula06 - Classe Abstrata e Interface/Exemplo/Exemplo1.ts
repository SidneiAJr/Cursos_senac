class Planeta{
    public nome:string;
    public tamanho:number;
    constructor(nome:string,tamanho:number){
        this.nome = nome;
        this.tamanho = tamanho;
    }
}
class Planeta1 extends Planeta{
     VerificarPlaneta(){
        console.log(`Planeta Nome ${this.nome} Tamanho ${this.tamanho}Km`);
     }
}
class Planeta2 extends Planeta{
     VerificarPlaneta(){
        console.log(`Planeta Nome ${this.nome} Tamanho ${this.tamanho}Km`);
     }
}
class Planeta3 extends Planeta{
     VerificarPlaneta(){
        console.log(`Planeta Nome ${this.nome} Tamanho ${this.tamanho}Km`);
     }
}
class Planeta4 extends Planeta{
     VerificarPlaneta(){
        console.log(`Planeta Nome ${this.nome} Tamanho ${this.tamanho}Km`);
     }
}

class Planeta5 extends Planeta{
     VerificarPlaneta(){
        console.log(`Planeta Nome ${this.nome} Tamanho ${this.tamanho}Km`);
     }
}

const planeta1 = new Planeta1("Jupiter",139.820);
const planeta2 = new Planeta2("Saturno",116.460);
const planeta3 = new Planeta3("Marte",6.779);
const planeta4 = new Planeta4("Mercurio",4.879);
const planeta5 = new Planeta5("Terra",4.879)

planeta1.VerificarPlaneta();
planeta2.VerificarPlaneta();
planeta3.VerificarPlaneta();
planeta4.VerificarPlaneta();
planeta5.VerificarPlaneta();
