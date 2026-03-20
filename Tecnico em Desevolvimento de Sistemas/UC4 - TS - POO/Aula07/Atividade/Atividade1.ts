/*De Pesquisa
    Qual a diferença entre sobrescrita e sobrecarga no TypeScript?
    - Substitui o comportamento de um método da superclasse.	
    - Define múltiplas assinaturas para o mesmo método.  
    O TypeScript realmente suporta sobrecarga de métodos como Java? Justifique.
    Não a suporte nativo.
*/

interface VerificaAnima{
    VerificarAnimal():void;
    VerificarTipo():void;
}
interface VerificaFala{
    VerificarFala():void;
    falar():void;
}

abstract class Animal implements VerificaAnima, VerificaFala{
    constructor(public NomeAnimal:string,public idadeAnimal:number,public tipoAnimal:string ){}
    VerificarAnimal(): void {
        
    }
    VerificarFala(): void {
        
    }
    VerificarTipo(): void {
        
    }
    falar(): void {
        
    }
}

class AnimalStatus extends Animal implements VerificaAnima, VerificaAnima{
    VerificarAnimal(): void {
        if(this.tipoAnimal==="Cao"){
            console.log(`Cachorro ${this.NomeAnimal} Idade ${this.idadeAnimal}`);
        }else if(this.tipoAnimal==="Gato"){
           console.log(`Gato ${this.NomeAnimal} Idade ${this.idadeAnimal}`);
        }else{
             console.log(`Que Tipo de Animal e esse?`);
        }
    }
    VerificarFala(): void {
        if(this.tipoAnimal==="Cao"){
            console.log(`Cachorro ${this.NomeAnimal} AU AU AU AU AU`);
        }else if(this.tipoAnimal==="Gato"){
           console.log(`Gato ${this.NomeAnimal} Miauuuuuuuuu`);
        }else{
             console.log(`Que Tipo de Animal e esse?`);
        }
    }
    VerificarTipo(): void {
        if(this.tipoAnimal==="Cao"){
            console.log(`Cachorro ${this.NomeAnimal}`);
        }else if(this.tipoAnimal==="Gato"){
           console.log(`Gato ${this.NomeAnimal}`);
        }else{
             console.log(`Que Tipo de Animal e esse?`);
        }
    }
    falar(): void {
        if(this.tipoAnimal==="Cao"){
            console.log(`AUUUUUU`);
        }else if(this.tipoAnimal==="Gato"){
           console.log(`MIAUUUUU`);
        }else{
             console.log(`Que Tipo de Animal e esse?`);
        }
    }
}

const Gato1 = new AnimalStatus ("Jubileu",10,"Gato");
const Cachorro = new AnimalStatus ("Klaudios",6,"Cao");
const Passaro = new AnimalStatus("Reverso",7,"Passaro");

console.log("======Gato======")
Gato1.VerificarAnimal();
Gato1.VerificarFala();
Gato1.VerificarTipo();
Gato1.falar();
console.log("======Gato======")

console.log("======Cachorro======")
Cachorro.VerificarAnimal();
Cachorro.VerificarFala();
Cachorro.VerificarTipo();
Cachorro.falar();
console.log("======Cachorro======")

console.log("======Passaro======")
Passaro.VerificarAnimal();
Passaro.VerificarFala();
Passaro.VerificarTipo();
Passaro.falar();
console.log("======Passaro======")
