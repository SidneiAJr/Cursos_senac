class Heroi{
    nome:string;
    idade:number;
    deus:boolean;
    
    constructor(nome:string,idade:number,deus:boolean){
    this.nome = nome;
    this.idade = idade;
    this.deus= deus;
    
    }
atacar(){
    console.log(`Supremo ${this.nome} com idade ${this.idade} Não é um deus ${this.deus} aparece!`)
}
apagar(){
    console.log(`Inimgo é apagado por ${this.nome}`)
}
interagir(){
    const frase_efeito = prompt("Insira uma Frase de efeito: ")
    console.log(`${this.nome} Diz ${frase_efeito}`)
}
observacao(){
    console.log(`${this.nome} Diz Ta porra ta potente`)
}

}
const galactus = new Heroi("Galactus",13.8,false);
const tribunalvivo = new Heroi("Tribunal Vivo", 0, true);
const observador = new Heroi("Observador", 0, false);

galactus.atacar();
tribunalvivo.apagar();
tribunalvivo.interagir();
observador.observacao();




