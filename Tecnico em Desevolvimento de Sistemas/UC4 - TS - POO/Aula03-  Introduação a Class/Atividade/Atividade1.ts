// Classe Ninja -> Cria a classe ninja com campos nome. idade, poder, item, aldeia
class Ninja{
    nome:string;
    idade:number;
    poder:number;
    item:string;
    aldeia:string;
    jutsu:string[];
    
    constructor(nome:string,idade:number,poder:number,item:string,aldeia:string,jutsu:string[]){
    this.nome = nome;
    this.idade = idade;
    this.aldeia = aldeia;
    this.item = item;
    this.jutsu = jutsu;
    this.poder = poder;
    }
atacar(){
    console.log(`${this.nome} Atacou com item ${this.item}`)
}
defender(){
    console.log(`${this.nome} Se defendeu com ${this.item}`)
}
usarJutsu(){
    console.log(`${this.nome} usa ${this.jutsu}`)
}
        
}
const naruto = new Ninja("Naruto", 17, 9000, "Kunai", "Folha",["Rasenga,Rasenga,Rasenga"]);
const sasuke = new Ninja("Sasuke", 16, 8999, "Shidori", "Folha",["Shidori,Shidori,Shidori"]);
const madara = new Ninja("Madara", 2000, 90000 , "Leque", "Renegado",["Tengai,Tengai,Tengai"] );

sasuke.atacar();
naruto.atacar();
madara.atacar();
sasuke.defender();
madara.usarJutsu();
