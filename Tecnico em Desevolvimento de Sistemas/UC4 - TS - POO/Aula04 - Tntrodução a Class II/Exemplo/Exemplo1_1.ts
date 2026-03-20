class Aluno {
    nome_aluno: string;
    idade: number;
}

class Turma {
    nome_turma: string;
    curso_turma: string;
}

class Curso {
    curso_nome: string;
    curso_descricao: string;
}

class Professor {
    nome_professor: string;
    idade_professor: number;
}

class InscricaoCurso {
    alunos: Aluno[];
    turma: Turma;
    professor: Professor;
    curso: Curso;

    constructor(alunos: Aluno[], turma: Turma, professor: Professor, curso: Curso) {
        this.alunos = alunos;
        this.turma = turma;
        this.professor = professor;
        this.curso = curso;
    }
}

class Inscricaoturma{
    turma:Turma;
    professor:Professor;
    curso:Curso;
    
    constructor(turma:Turma,professor:Professor,curso:Curso){
        this.turma = turma;
        this.professor = professor;
        this.curso = curso;
    }
    
}

// Criando objetos
const aluno1 = new Aluno();
aluno1.nome_aluno = "Maria";
aluno1.idade = 20;

const aluno2 = new Aluno();
aluno2.nome_aluno = "João";
aluno2.idade = 22;

const turma1 = new Turma();
turma1.nome_turma = "Turma A";
turma1.curso_turma = "Engenharia";

const turma2 = new Turma();
turma2.nome_turma = "Turma A";
turma2.curso_turma = "Engenharia";


const curso1 = new Curso();
curso1.curso_nome = "Engenharia de Software";
curso1.curso_descricao = "Curso focado em desenvolvimento de sistemas.";

const professor1 = new Professor();
professor1.nome_professor = "Dr. Carlos";
professor1.idade_professor = 45;

const professor2 = new Professor();
professor2.nome_professor = "Dr. Carlos II";
professor2.idade_professor = 45;

// Criando a inscrição
const inscricao = new InscricaoCurso([aluno1, aluno2], turma1, professor1, curso1);
const inscricao_turma = new Inscricaoturma(turma1,professor1,curso1);

// Exibindo no console
console.log(`Aluno ${aluno1.nome_aluno} na turma ${turma1.nome_turma} foi inscrito com sucesso o professor ${professor1.nome_professor} será o regente!`);
console.log(`Aluno ${aluno2.nome_aluno} na turma ${turma2.nome_turma} foi inscrito com sucesso o professor ${professor2.nome_professor} será o regente!`);
