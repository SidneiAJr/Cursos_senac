import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class deletando_banco {
    public static void main(String[] args) {
        final String URL = "jdbc:mysql://localhost:3306/funcionarios";  // URL do MySQL (sem especificar o banco)
        final String USER = "root";  // Usuário do MySQL
        final String PASS = "root";  // Senha do MySQL
        String sql =
                "DELETE FROM funcionarios";
        try(Connection conexao = DriverManager.getConnection(URL,USER,PASS); PreparedStatement stm = conexao.prepareStatement(sql)){
            //subtituil os parametros da sql
            stm.executeUpdate();

        } catch (SQLException e) {
            System.out.println("Erro ao conectar ao banco de dados.");
        }




    }
}
