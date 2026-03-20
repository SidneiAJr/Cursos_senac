// Classe Aluno
class Aluno {
    private nome: string;
    private idade: number;
    private cpf: string;
    private cidade: string;

    constructor(nome: string, idade: number, cpf: string, cidade: string) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.cidade = cidade;
    }

    public getNome(): string {
        return this.nome;
    }
}

// Classe Professor
class Professor {
    private professor_nome: string;
    private professor_matricula: string;
    private professor_cpf: string;

    constructor(professor_nome: string, professor_matricula: string, professor_cpf: string) {
        this.professor_nome = professor_nome;
        this.professor_matricula = professor_matricula;
        this.professor_cpf = professor_cpf;
    }

    public getNome(): string {
        return this.professor_nome;
    }
}

// Classe Turma
class Turma {
    private turma_nome: string;
    private turma_matricula: string;
    private alunos: Aluno[] = [];
    private professor_responsavel: Professor | null = null;

    constructor(turma_nome: string, turma_matricula: string) {
        this.turma_nome = turma_nome;
        this.turma_matricula = turma_matricula;
    }

    public adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
    }

    public setProfessor(prof: Professor): void {
        this.professor_responsavel = prof;
    }

    public getNome(): string {
        return this.turma_nome;
    }

    public getProfessorNome(): string {
        return this.professor_responsavel ? this.professor_responsavel.getNome() : "Sem professor";
    }

    public listarAlunos(): void {
        if (this.alunos.length === 0) {
            console.log("  Nenhum aluno matriculado.");
        } else {
            console.log("  Alunos:");
            this.alunos.forEach((aluno, index) => {
                console.log(`   ${index + 1}. ${aluno.getNome()}`);
            });
        }
    }
}

// Classe Curso
class Curso {
    private curso_nome: string;
    private curso_matricula: string;
    private curso_informacao: string;
    private turmas: Turma[] = [];

    constructor(curso_nome: string, curso_matricula: string, curso_informacao: string) {
        this.curso_nome = curso_nome;
        this.curso_matricula = curso_matricula;
        this.curso_informacao = curso_informacao;
    }

    public adicionarTurma(turma: Turma): void {
        this.turmas.push(turma);
    }

    public listarCurso(): void {
        console.log(`Curso: ${this.curso_nome}`);
        console.log(`Informações: ${this.curso_informacao}`);
        console.log(`---`);
        this.turmas.forEach((turma, i) => {
            console.log(`Turma ${i + 1}: ${turma.getNome()} (Professor: ${turma.getProfessorNome()})`);
            turma.listarAlunos();
            console.log("------");
        });
    }
}
// Criar alunos
const aluno1 = new Aluno("Ana", 20, "12345678900", "São Paulo");
const aluno2 = new Aluno("Bruno", 22, "98765432100", "Campinas");

// Criar professor
const prof = new Professor("Carlos", "P123", "000111222");

// Criar turma
const turma1 = new Turma("Turma A", "T001");
turma1.setProfessor(prof);
turma1.adicionarAluno(aluno1);
turma1.adicionarAluno(aluno2);

// Criar curso
const curso1 = new Curso("Engenharia de Software", "C001", "Curso voltado para desenvolvimento de sistemas");
curso1.adicionarTurma(turma1);

// Listar informações do curso
curso1.listarCurso();
