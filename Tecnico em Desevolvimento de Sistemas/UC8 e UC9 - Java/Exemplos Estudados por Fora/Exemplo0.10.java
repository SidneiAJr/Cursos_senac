class Main {
    public static void main(String[] args) {
        System.out.println("Sistema rodando...\n");

        Funcionario f = new Funcionario("Carlos", 30, "Funcionário de TI", 2500.00);
        Gerente g = new Gerente("Ana", 40, "Gerente de Projetos", 5000.00);
        Setor s = new Setor("TI", "Tecnologia da Informação");
        Estoque e = new Estoque(120);

        f.mostrar();
        g.mostrar();
        s.mostrar();
        e.mostrar();
    }
}

class Funcionario {
    String nome;
    int idade;
    String informacao;
    double salario;

    Funcionario(String nome, int idade, String informacao, double salario) {
        this.nome = nome;
        this.idade = idade;
        this.informacao = informacao;
        this.salario = salario;
    }

    void mostrar() {
        System.out.println("Funcionário: " + nome + ", Idade: " + idade + ", Info: " + informacao + ", Salário: R$" + salario);
    }
}

class Gerente {
    String nome;
    int idade;
    String informacao;
    double salario;

    Gerente(String nome, int idade, String informacao, double salario) {
        this.nome = nome;
        this.idade = idade;
        this.informacao = informacao;
        this.salario = salario;
    }

    void mostrar() {
        System.out.println("Gerente: " + nome + ", Idade: " + idade + ", Info: " + informacao + ", Salário: R$" + salario);
    }
}

class Setor {
    String nome;
    String informacao;

    Setor(String nome, String informacao) {
        this.nome = nome;
        this.informacao = informacao;
    }

    void mostrar() {
        System.out.println("Setor: " + nome + ", Informações: " + informacao);
    }
}

class Estoque {
    int quantidadeProdutos;

    Estoque(int quantidadeProdutos) {
        this.quantidadeProdutos = quantidadeProdutos;
    }

    void mostrar() {
        System.out.println("Estoque atual: " + quantidadeProdutos + " produtos");
    }
}
