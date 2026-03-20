class Main {
    public static void main(String[] args) {
        Curso curso1 = new Curso("Java Basico I", "Curso introdutório de Java");
        Professor prof1 = new Professor("Joao Machado", 40, "Sao Paulo");
        Professor prof2 = new Professor("Jian Baloso Silva", 40, "Sao Paulo");
        
        CadastroCurso cadastro1 = new CadastroCurso("Java Basico", "11/09/2020", curso1, prof1);
        CadastroCurso cadastro2 = new CadastroCurso("Java Basico", "11/09/2020", curso1, prof2);
        
        System.out.println("Curso cadastrado: " + cadastro1.nome_curso_cadastrado);
        System.out.println("Data de cadastro: " + cadastro1.data_cadastro);
        System.out.println("Professor responsavel: " + cadastro1.professor.nome_professor);
        System.out.println("Curso cadastrado: " + cadastro2.nome_curso_cadastrado);
        System.out.println("Data de cadastro: " + cadastro2.data_cadastro);
        System.out.println("Professor responsavel: " + cadastro2.professor.nome_professor);
        
        Aluno aluno1 = new Aluno();
        aluno1.nome_aluno = "Maria Silva";
        aluno1.idade_aluno = 22;
        aluno1.cidade_aluno = "Rio de Janeiro";
        
        Cadastro_turma turma1 = new Cadastro_turma("Turma de Java", prof1);
        
        // Antes de cadastrar alunos
        turma1.verificar_tamanho();
        
        // Cadastra aluno(s)
        turma1.cadastrar_aluno();
        turma1.cadastrar_aluno(); // só para testar com 2 alunos
        
        // Verifica tamanho após cadastro
        turma1.verificar_tamanho();
    }
}

class Aluno {
    String nome_aluno;
    int idade_aluno;
    String cidade_aluno;
}

class Professor {
    String nome_professor;
    int idade_professor;
    String cidade_professor;

    Professor(String nome, int idade, String cidade) {
        this.nome_professor = nome;
        this.idade_professor = idade;
        this.cidade_professor = cidade;
    }
}

class Curso {
    String nome_curso;
    String info_curso;

    Curso(String nome_curso, String info_curso) {
        this.nome_curso = nome_curso;
        this.info_curso = info_curso;
    }
}

class CadastroCurso {
    String nome_curso_cadastrado;
    String data_cadastro;
    Curso curso;
    Professor professor;

    CadastroCurso(String nome_curso_cadastrado, String data_cadastro, Curso curso, Professor professor) {
        this.nome_curso_cadastrado = nome_curso_cadastrado;
        this.data_cadastro = data_cadastro;
        this.curso = curso;
        this.professor = professor;
    }
}

class Cadastro_turma {
    String info_turma;
    int tamanho_turma;
    Professor professor;
    final int capacidade_maxima = 30;

    Cadastro_turma(String info_turma, Professor professor) {
        this.info_turma = info_turma;
        this.tamanho_turma = 0; // Turma inicia vazia
        this.professor = professor;
    }

    void verificar_tamanho() {
        System.out.println("Tamanho da Turma: " + tamanho_turma);
        if (tamanho_turma < capacidade_maxima) {
            System.out.println("Turma com vagas disponiveis.");
        } else if (tamanho_turma == capacidade_maxima) {
            System.out.println("Turma cheia!");
        } else {
            System.out.println("Turma ultrapassou a capacidade maxima!");
        }
        System.out.println("---------------------");
    }

    void cadastrar_aluno() {
        if (tamanho_turma < capacidade_maxima) {
            tamanho_turma += 1;
            System.out.println("Aluno cadastrado com sucesso! Total de alunos: " + tamanho_turma);
        } else {
            System.out.println("Não é possível cadastrar mais alunos. Turma cheia.");
        }
    }
}
