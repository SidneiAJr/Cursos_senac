class Aluno{
    nomeAluno:string;
    idadeAluno:number;
    constructor(nomeAluno:string,idadeAluno:number){
    this.nomeAluno = nomeAluno;
    this.idadeAluno = idadeAluno;
    }
}
class Turma{
    numeroTurma:number;
    infoTurma:number;
    constructor(numeroTurma:number,infoTurma:number){
        this.numeroTurma = numeroTurma;
        this.infoTurma = infoTurma;
    }
}
class Curso{
    nomeCurso:string;
    quantidadeCurso:number;
    constructor(nomeCurso:string,quantidadeCurso:number){
    this.nomeCurso = nomeCurso;
    this.quantidadeCurso = quantidadeCurso;
    }
}
class Professor{
    nomeProfessor:string;
    idadeProfessor:number;
    constructor(nomeProfessor:string,idadeProfessor:number){
     this.idadeProfessor = idadeProfessor;
     this.nomeProfessor = nomeProfessor;
    }
}
class CadastroTurma {
  turma: Turma;
  professor: Professor;
  aluno: Aluno;
  static quantidadeTurma = 0; // agora é compartilhado

  constructor(turma: Turma, professor: Professor, aluno: Aluno) {
    this.turma = turma;
    this.professor = professor;
    this.aluno = aluno;
    CadastroTurma.quantidadeTurma++; // incrementa a contagem global
  }

  static contadorTurmas() {
    console.log(`Quantidade de turmas é ${CadastroTurma.quantidadeTurma}`);
  }
}



const aluno1 = new Aluno("Carlos", 19);
const turma1 = new Turma(101, 2023);
const turma2 = new Turma(102, 2023);
const turma3 = new Turma(103, 2023);
const turma4 = new Turma(104, 2023);
const professor1 = new Professor("Mariana", 40);

const cadastro = new CadastroTurma(turma1, professor1, aluno1);
const cadastro2 = new CadastroTurma(turma2, professor1, aluno1);
const cadastro3 = new CadastroTurma(turma3, professor1, aluno1);
const cadastro4 = new CadastroTurma(turma4, professor1, aluno1);

console.log("Cadastro da Turma:");
console.log(`Aluno: ${cadastro.aluno.nomeAluno}, Idade: ${cadastro.aluno.idadeAluno}`);
console.log(`Turma Nº: ${cadastro.turma.numeroTurma}, Info: ${cadastro.turma.infoTurma}`);
console.log(`Professor: ${cadastro.professor.nomeProfessor}, Idade: ${cadastro.professor.idadeProfessor}`);

CadastroTurma.contadorTurmas();
