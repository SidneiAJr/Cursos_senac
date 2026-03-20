import java.sql.*; // Import de Lib de conexção

public class criarBanco {
    final String URL = "jdbc:mysql://localhost:3306/";  // URL do MySQL (sem especificar o banco)
    final String USER = "root";  // Usuário do MySQL
    final String PASS = "root";  // Senha do MySQL
        public void CriarBanco(){
            try(Connection conexao = DriverManager.getConnection(URL,USER,PASS);Statement stm = conexao.createStatement()){
                // Comando sql para criar o banco de dados
                // if not existis evita erro caso o banco ja exista
                String sql = "CREATE DATABASE if not exists Hospital";
                stm.execute(sql);
                System.out.println("Banco de dados Criado com sucesso!");
            }catch(SQLException e){
                System.out.println("Erro ao criar  o banco.");
            }
        }
}
