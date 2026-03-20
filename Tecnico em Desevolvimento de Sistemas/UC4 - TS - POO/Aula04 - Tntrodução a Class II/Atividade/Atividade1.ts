// Atividade 1
class Pessoa{
    nome:string;
    private idade:number;
    cidade:string;

    constructor(nome:string,idade:number,cidade:string){
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
    }
    public fazerAniversario(): void {
        this.idade += 1;
        console.log(`${this.nome} fez aniversário! Agora tem ${this.idade} anos.`);
    }

    public mostrarIdade(): void {
        console.log(`${this.nome} tem ${this.idade} anos.`);
    }
}
const pessoa1 = new Pessoa("Jian",26,"São Leopoldo");
const pessoa2 = new Pessoa("Kalleo",16,"São Leopoldo");
const pessoa3 = new Pessoa("Daniel Prime",28,"São Leopoldo");

pessoa1.fazerAniversario();
pessoa2.fazerAniversario();
pessoa3.fazerAniversario();

pessoa1.mostrarIdade();
pessoa2.mostrarIdade();
pessoa3.mostrarIdade();

