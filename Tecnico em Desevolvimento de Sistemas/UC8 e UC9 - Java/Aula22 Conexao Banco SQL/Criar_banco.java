package integracao_banco;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class CriarBanco {
    private static final String URL = "jdbc:mysql://localhost:3306/";  // URL do MySQL (sem especificar o banco)
    private static final String USER = "root";  // Usuário do MySQL
    private static final String PASS = "root";  // Senha do MySQL

    public static void main(String[] args) {
        String nomeBanco = "escola";  // Nome do banco a ser criado

        try {
            // 1. Conectar ao MySQL sem especificar o banco de dados
            Connection conn = DriverManager.getConnection(URL, USER, PASS);
            System.out.println("Conectado com sucesso ao MySQL");

            // 2. Criar o banco de dados 'escola', se não existir
            String sql = "CREATE DATABASE IF NOT EXISTS " + nomeBanco;
            Statement stmt = conn.createStatement();
            stmt.executeUpdate(sql);
            System.out.println("Banco de dados '" + nomeBanco + "' criado com sucesso ou já existe.");

            // 3. Fechar o Statement e a primeira conexão
            stmt.close();
            conn.close();

            // 4. Agora, conectar ao banco de dados 'escola' recém-criado
            conn = DriverManager.getConnection(URL + nomeBanco, USER, PASS);
            System.out.println("Conectado ao banco: " + nomeBanco);

            // Agora você pode começar a usar o banco de dados para operações (consultas, inserções, etc.)

        } catch (SQLException e) {
            // Exibe o erro caso a conexão ou criação do banco falhe
            System.out.println("Erro ao criar ou conectar ao banco: " + e.getMessage());
        }
    }
}
