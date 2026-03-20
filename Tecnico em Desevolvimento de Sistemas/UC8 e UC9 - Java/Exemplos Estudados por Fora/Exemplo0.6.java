public class Main {
    public static void main(String[] args) { // Classe main executa tudo primeiro
        Pessoa p = new Pessoa("Kalleo", 30, "123456789", 500.0, "111.222.333-44", "Rua A, 123");
        System.out.println(p.getNome());
        System.out.println(p.getIdade());
        System.out.println(p.getTelefone());
        System.out.println(p.getSaldo());
        System.out.println(p.getCpf());
        System.out.println(p.getEndereco());
        // Metodo de chamada da classe
    }
}

class Pessoa { // Classe Pessoa 
    private String nome;
    private int idade;
    private String telefone;
    private double saldo;
    private String cpf;
    private String endereco;

    public Pessoa(String nome, int idade, String telefone, double saldo, String cpf, String endereco) {
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.saldo = saldo;
        this.cpf = cpf;
        this.endereco = endereco;
    }

    public String getNome() {
        return nome;
    }

    public int getIdade() {
        return idade;
    }

    public String getTelefone() {
        return telefone;
    }

    public double getSaldo() {
        return saldo;
    }

    public String getCpf() {
        return cpf;
    }

    public String getEndereco() {
        return endereco;
    }
}

