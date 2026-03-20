/*=========================== comentarios================
- final = const em js
- Criar Banco com Nome de Funcionarios
- URL, PASS, USER -> Para O banco de dados
- Escrever sobre DriverManager, getconnection.
-
 */

import java.sql.Connection; // Import de Lib de conexção
import java.sql.DriverManager; // Import do drive de conexção
import java.sql.SQLException; // Excessoes do SQL
import java.sql.Statement;
import java.util.Scanner;

public class conexcao {
    public static void main(String[] args) {
         final String URL = "jdbc:mysql://localhost:3306/";  // URL do MySQL (sem especificar o banco)
         final String USER = "root";  // Usuário do MySQL
         final String PASS = "root";  // Senha do MySQL
         String Banco = "Funcionarios"; //Nome do banco vai ser criado
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
