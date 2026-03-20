import java.util.Scanner;

public class Menu {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int op =0;
        while (op!=5){
            System.out.println("====Menu====");
            System.out.println("1-Conexão Banco");
            System.out.println("2-Criar Banco");
            System.out.println("3-Criar Tabela");
            System.out.println("4-Inserir Paciente");
            System.out.println("5-Sair");
            op = entrada.nextInt();
            switch (op){
                case 1:
                    ConexcaoBanco c1 = new ConexcaoBanco();
                    c1.Conectar();
                    break;
                case 2:
                    criarBanco c2 = new criarBanco();
                    c2.CriarBanco();
                    break;
                case 3:
                    CriarTabela c3 = new CriarTabela();
                    c3.criarTabela();
                    break;
                case 4:
                    inserindoPaciente c4 = new inserindoPaciente();
                    c4.Inserir();
                    break;
                default:
                    System.out.println("Alo tem erro");
                    break;
            }
        }
        entrada.close();
    }
}


