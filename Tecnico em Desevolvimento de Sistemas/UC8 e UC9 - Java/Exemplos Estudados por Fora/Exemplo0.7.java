import java.util.Scanner;

class Main {
    public static void main(String[] args) {
         Scanner scanner = new Scanner(System.in);

        // Exemplo de leitura de um aluno
        System.out.print("Digite o nome do aluno: ");
        String nome = scanner.nextLine();

        System.out.print("Digite a idade do aluno: ");
        int idade = scanner.nextInt();
        scanner.nextLine(); // consumir quebra de linha

        System.out.print("Digite a cidade do aluno: ");
        String cidade = scanner.nextLine();

        Aluno aluno = new Aluno(nome, idade, cidade);

        System.out.println("\nAluno cadastrado com sucesso:");
        System.out.println("Nome: " + aluno.nome_aluno);
        System.out.println("Idade: " + aluno.aluno_idade);
        System.out.println("Cidade: " + aluno.cidade_aluno);
    }
}

class Aluno{
    String nome_aluno;
    int aluno_idade;
    String cidade_aluno;
     
     Aluno(String nome, int idade, String cidade) {
        this.nome_aluno = nome;
        this.aluno_idade = idade;
        this.cidade_aluno = cidade;
    }
}
 class Turma{
    String nome_turma;
    String info_turma;
}
 class Professor{
    String nome_professor;
    String idade_professor;
}
 class Curso{
    String curso_nome;
    String curso_informacao;
}
