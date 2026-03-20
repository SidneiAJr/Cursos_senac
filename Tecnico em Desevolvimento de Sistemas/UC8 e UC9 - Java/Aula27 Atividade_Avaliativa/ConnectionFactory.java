import java.sql.*;

public class ConnectionFactory {
    private static final String URL = "jdbc:mysql://localhost:3306/loja"; // Alterar Nome do Banco não esquecer

    // Usuário do banco
    private static final String USER = "root";

    // Senha do usuário do banco
    private static final String PASS = "root";

    // Lança SQLException caso algo dê errado
    public static Connection getConnection() throws SQLException {
        // DriverManager gerencia as conexões JDBC
        return DriverManager.getConnection(URL, USER, PASS);
    }
}
