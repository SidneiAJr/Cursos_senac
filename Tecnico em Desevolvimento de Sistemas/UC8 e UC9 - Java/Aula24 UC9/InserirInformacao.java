import java.sql.*; // Import de Lib de conexção
import java.util.Scanner;

public class inserindoPaciente {
    final String URL = "jdbc:mysql://localhost:3306/hospital";  // URL do MySQL (sem especificar o banco)
    final String USER = "root";  // Usuário do MySQL
    final String PASS = "root";  // Senha do MySQL
    public void Inserir(){
        Scanner entrada = new Scanner(System.in);
        System.out.println("Informe Nome: ");
        String nome = entrada.nextLine();
        System.out.println("Informe Idade: ");
        int Idade = entrada.nextInt();
        entrada.nextLine();
        System.out.println("Insira o Plano: ");
        String plano = entrada.nextLine();
        /*
        SQl parametrização
        o uso de ?  evita sql injection
         */
        String sql =
                // Insert into funcionarios (nome) values ('jesus'); from funcionarios ('1'='1');
                "INSERT INTO pacientes (nome,idade,plano) values (?,?,?)";
        try(Connection conexao = DriverManager.getConnection(URL,USER,PASS); PreparedStatement stm = conexao.prepareStatement(sql)){
            //subtituil os parametros da sql
            stm.setString(1,nome);
            stm.setInt(2,Idade);
            stm.setString(3,plano);
            stm.executeUpdate();
            System.out.println("Paciente Inserido com Sucesso");

        } catch (SQLException e) {
            System.out.println("Erro ao conectar ao banco de dados.");
        }
    }
}
