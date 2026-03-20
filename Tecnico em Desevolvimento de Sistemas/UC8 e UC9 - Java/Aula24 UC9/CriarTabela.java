import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

public class CriarTabela {
    final String URL = "jdbc:mysql://localhost:3306/hospital";  // URL do MySQL (sem especificar o banco)
    final String USER = "root";  // Usuário do MySQL
    final String PASS = "root";  // Senha do MySQL
    public void criarTabela(){
        try(Connection conexao = DriverManager.getConnection(URL,USER,PASS);Statement stm = conexao.createStatement()){
            // Comando sql para criar o banco de dados
            // if not existis evita erro caso o banco ja exista
            String sql = "CREATE TABLE IF NOT EXISTS Pacientes(" +
                    "id INT auto_increment primary key,"+
                    "nome varchar(80) not null,"+
                    "idade int not null,"+
                    "plano varchar(50) not null"+
                    ")";
            stm.executeUpdate(sql);
            // confirmação no console
            System.out.println("Tabela criada com sucesso!");
        }catch(SQLException e){
            System.out.println("Erro ao criar  a Tabela.");
        }
    }
}
