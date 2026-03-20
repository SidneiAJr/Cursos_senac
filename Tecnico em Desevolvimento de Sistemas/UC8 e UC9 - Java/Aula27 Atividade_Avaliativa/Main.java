import java.util.Scanner; // Para ler dados do usuário

public class Main {
    public static void main(String[] args) {
        // Escrever Dentro
        // Scanner para ler entradas do usuário
        Scanner scanner = new Scanner(System.in);

        // Instancia do DAO do aluno (responsável por salvar e listar)
        ProductDao dao = new ProductDao();

        // Pergunta quantos alunos o usuário deseja cadastrar
        System.out.println("Quantos Produtos Deseja Cadastrar? ");
        int quantidade = scanner.nextInt();
        scanner.nextLine(); // Consumir a quebra de linha deixada pelo nextInt

        // Loop para cadastrar os alunos
        for (int i = 0; i < quantidade; i++) {
            System.out.println("\nDigite o nome do produto #" + (i + 1) + ":");
            String nome = scanner.nextLine();

            System.out.println("Digite o setor do produto:");
            String setor = scanner.nextLine();

            System.out.println("Digite o preço do produto:");
            double preco = scanner.nextDouble();
            scanner.nextLine(); // consumir quebra de linha

            System.out.println("Digite informações adicionais do produto:");
            String info = scanner.nextLine();

            ModelProduct produto = new ModelProduct(0, nome, setor, preco, info);
            dao.cadastrar(produto);

        }

        // Mostra a lista de alunos cadastrados
        System.out.println("\n================= ALUNOS CADASTRADOS =================");
        dao.Listar().forEach(produto -> {
            System.out.println("Item ID :" +produto.getId() + "Produto Nome: " + produto.getNomeProduto() + " Setor Produto: "+ produto.getSetor() + " Preço R$: "+ produto.getPrecoProduto() + " Informações: " + produto.getInformacaoProduto());
        });

        // Fecha o Scanner
        scanner.close();
        }
    }
