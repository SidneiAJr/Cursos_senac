    /*
    ========== Observação ==============
    jdbc = Drive do Java
    nomebanco = banco
    senha = senha
    usuario = usuario
    url é url
    Porta Padrão 3306 Padrão do MYSQl
    Não Colocamos o Nome do banco Aqui será recebido como parametro depois
    */
    /*
    ============= Classe conexçao================
    - Classe conex
    - Variavel estatica URL USER PASS
    class conex{
    private static final String URL = "jdbc:mysql://localhost:3306/";
    private static final String USER = "root";
    private static final String PASS = "root";
    }
    /*
     /*
    public static Conecction ConectarBanco(String nomeBanco) throws SQL{
    // Retorno um objeto conection ou seja uma conexção
    // Recebe como parametro o nome do banco
    // throws SQLExpection-> avisa que esse metodo pode lançar 
    // E quem chamar o metodo precisara tratar ou repassar essa excessao
    return DriverManage.getConecction(URL+NomeBanco,NomeBanco,User,Pass);
    //Aqui p DriveManager cria a conexção com o banco 
    System.out.println("Conectado");
    Connection conn = DriverManager.getConnection(URL+nomeBanco+User+Pass)
    return conn
    
    }
    */

package integracao_banco;
import java.sql.Connection;
// Importa a classe DriveMaganer reposnavel por criar
import java.sql.DriverManager;
// Importa a interface connection que repsenta
import java.sql.ResultSet;
import java.sql.SQLException;
// Importa a classe sql excpetion que representa erro
import java.sql.Statement;

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        ConexBanco cx1 = new ConexBanco("test2", "root", "root");
        cx1.conectar();
    }   
 
    class ConexBanco {

    private String nomeBanco;
    private String senha;
    private String usuario;
    private Connection conn = null;
    private static final String URL = "jdbc:mysql://localhost:3306";

    // Construtor
    public ConexBanco(String nomeBanco, String senha, String usuario) {
        this.nomeBanco = nomeBanco;
        this.senha = senha;
        this.usuario = usuario;
    }

    // Método para estabelecer a conexão com o banco de dados
    public void conectar() {
        // URL de conexão para um banco de dados MySQL, por exemplo
        String url = "jdbc:mysql://localhost:3306/" + nomeBanco;

        try {
            // Tenta estabelecer a conexão
            conn = DriverManager.getConnection(url, usuario, senha);
            lb_saida.setText("Conexão estabelecida com sucesso!");
        } catch (SQLException e) {
            // Se ocorrer um erro, imprime a mensagem de erro
            lb_saida.setText("Erro na conexão: " + e.getMessage());
        }
    }

    // Método para fechar a conexão
    public void fecharConexao() {
        try {
            if (conn != null) {
                conn.close();
               lb_saida.setText("Conexão fechada.");
            }
        } catch (SQLException e) {
            lb_saida.setText("Erro ao fechar a conexão: " + e.getMessage());
        }
    }
}

 
