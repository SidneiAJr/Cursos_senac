import java.sql.*; // Import de Lib de conexção

public class ConexcaoBanco {
    final String URL = "jdbc:mysql://localhost:3306/";  // URL do MySQL (sem especificar o banco)
    final String USER = "root";  // Usuário do MySQL
    final String PASS = "root";  // Senha do MySQL
    String Banco = "Funcionarios"; //Nome do banco vai ser criado
    public void Conectar(){
        try{
            Connection conexao = DriverManager.getConnection(URL,USER,PASS);
            System.out.println("Conexao Efetuada com Sucesso!");
            //Fecha Conexcao.
            conexao.close();
        }catch(SQLException e){
            // Tratamento de erro
            System.out.println("Deu ruim Erro! Não conecto Corre berg!!");
        }
    }
}
