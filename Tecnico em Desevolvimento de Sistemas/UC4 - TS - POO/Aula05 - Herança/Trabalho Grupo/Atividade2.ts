class kalleo{
    vida:number;
    forca:number;
    armadura:number;
    level:number;
    constructor(){
        this.vida=100;
        this.forca=2;
        this.armadura=2;
        this.level = 0;
    }
}
class gabriela{
    vida:number;
    forca:number;
    armadura:number;
    level:number;
    constructor(){
        this.vida=100;
        this.forca=2;
        this.armadura=2;
        this.level = 0;
    }
}
class miguel2{
    vida:number;
    forca:number;
    armadura:number;
    level:number;
    constructor(){
        this.vida=100;
        this.forca=2;
        this.armadura=2;
        this.level = 0;
    }
}
class eu{
    vida:number;
    forca:number;
    armadura:number;
    level:number;
    constructor(){
        this.vida=100;
        this.forca=2;
        this.armadura=2;
        this.level = 0;
    }
}
class heroi{
    nomeHeroi: string;
    idade: number;
    personagem: any; // pode usar "any" ou criar um tipo
    level:number;

    constructor(nome: string, idade: number, personagem: any,level:number) {
        this.nomeHeroi = nome;
        this.idade = idade;
        this.personagem = personagem;
        this.level = level;
    }
    exibirStatus() {
        console.log(`Herói: ${this.nomeHeroi}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Vida: ${this.personagem.vida}`);
        console.log(`Força: ${this.personagem.forca}`);
        console.log(`Armadura: ${this.personagem.armadura}`);
        console.log(`Level: ${this.personagem.level}`);
    }
}

const p1 = new kalleo();
const p2 = new gabriela();
const p3 = new miguel2();
const p4 = new eu();

const heroi1 = new heroi("Kalleo", 20, p1, p1.level);
const heroi2 = new heroi("Gabriela", 25, p2, p2.level);
const heroi3 = new heroi("Miguel Prime", 20, p3, p3.level);
const heroi4 = new heroi("Joao Bolão", 28, p4, p4.level);


console.log("==================================");
heroi1.exibirStatus();
console.log("==================================");
heroi2.exibirStatus();
console.log("==================================");
heroi3.exibirStatus();
console.log("==================================");
heroi4.exibirStatus();
console.log("==================================");
