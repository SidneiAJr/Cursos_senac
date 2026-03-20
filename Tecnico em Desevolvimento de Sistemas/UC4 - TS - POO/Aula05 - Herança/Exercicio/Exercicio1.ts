/*
Pesquisa:
    1)Cite 3 exemplos do mundo real que poderiam ser representados com herança?Classe mae escola com turma,curso,aluno
    2)Qual a diferença entre classe pai e classe filha?É a classe base e classe filha recebe
    3)Pesquise: em quais linguagens além do TypeScript existe herança em POO? JAVA C# c++
*/

class Pessoa{
    public nome:string;
    public idade:number;
    public cidade:string;

    constructor(nome:string,idade:number,cidade:string){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }

    apresentar(){
        console.log(`Olá meu Nome ${this.nome}!`);
    }
}

    class Professor extends Pessoa{
        ensinar(){
            console.log(`Professor Ensina Aluno ${this.nome}!`);
        }
    }

    class Aluno extends Pessoa{
         estudar(){
            console.log(`Aluno ${this.nome} Estuda!`);
         }
    }

const professor1 = new Professor("Joao Pedro",20,"SP");
const professor2 = new Professor("Joao Pedro JR",20,"SP");
const aluno1 = new Aluno("Jian Pablo Lima Silva",32,"RS");
const aluno2= new Aluno("Jian Pablo Lima Silva Junior",30,"RS");

professor1.ensinar();
professor2.ensinar();
aluno1.estudar();
aluno2.estudar();

