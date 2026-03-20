class Personagem{
    nome:string;
    idade:string;
    poder:string;
    habilidade_especial:string;
    
    constructor(nome:string,idade:string,poder:string,habilidade_especial:string){
        this.nome = nome;
        this.idade = idade;
        this.poder = poder;
        this.habilidade_especial = habilidade_especial;
    }

    info_personagem(){
        console.log(
        `Herói: ${this.nome}, Idade: ${this.idade}, Poder: ${this.poder}, Habilidade Especial: ${this.habilidade_especial}`
    )
    }
}
const nome = prompt("Insira o Nome do Heroi: ");
const idade = prompt("Insira a Idade: ");
const poder = prompt("Insira o Poder: ");
const habilidade_especial = prompt("Insira a Habilidade");

const heroi1 = new Personagem(nome,idade,poder,habilidade_especial);
heroi1.info_personagem();


