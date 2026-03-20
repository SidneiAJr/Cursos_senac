import java.sql.*;
import java.util.Scanner;

public class NovoFuncionario {
    public static void main(String[] args) {
        final String URL = "jdbc:mysql://localhost:3306/funcionarios";  // URL do MySQL (sem especificar o banco)
        final String USER = "root";  // Usuário do MySQL
        final String PASS = "root";  // Senha do MySQL

        Scanner entrada = new Scanner(System.in);
        //Solicita o nome do funcionario:
        System.out.println("Informe Nome: ");
        String nome = entrada.nextLine();
        // Informe o comentario
        System.out.println("Informe Cargo");
        String cargo = entrada.nextLine();
        /*
        SQl parametrização
        o uso de ?  evita sql injection
         */
        String sql =
                // Insert into funcionarios (nome) values ('jesus'); from funcionarios ('1'='1');
                "INSERT INTO funcionarios (nome,cargo) values (?,?)";
                try(Connection conexao = DriverManager.getConnection(URL,USER,PASS); PreparedStatement stm = conexao.prepareStatement(sql)){
                     //subtituil os parametros da sql
                    stm.setString(1,nome);
                    stm.setString(2,cargo);
                    stm.executeUpdate();

                } catch (SQLException e) {
                    System.out.println("Erro ao conectar ao banco de dados.");
                }finally {
                    entrada.close();  // Fecha o scanner para evitar vazamento de recursos
                }




    }
}

