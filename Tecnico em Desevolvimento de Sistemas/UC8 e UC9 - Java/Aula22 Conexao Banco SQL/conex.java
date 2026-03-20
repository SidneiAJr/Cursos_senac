package integracao_banco;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class Conexao {

    private static final String URL = "jdbc:mysql://localhost:3306/";  // URL de conexão MySQL
    private static final String USER = "root";  // Usuário MySQL
    private static final String PASS = "root";  // Senha MySQL

    public static Connection conectar(String nomeBanco) throws SQLException {
        // Conectar ao MySQL sem especificar um banco de dados inicialmente
        Connection conn = DriverManager.getConnection(URL, USER, PASS);
        
        // Criar o banco de dados se ele não existir
        String sql = "CREATE DATABASE IF NOT EXISTS " + nomeBanco;
        try (Statement stmt = conn.createStatement()) {
            stmt.executeUpdate(sql);
            System.out.println("Banco de dados '" + nomeBanco + "' criado com sucesso ou já existe.");
        }

        // Agora, conectar ao banco de dados recém-criado (ou já existente)
        String urlCompleta = URL + nomeBanco;
        conn = DriverManager.getConnection(urlCompleta, USER, PASS);
        
        return conn;
    }
}
