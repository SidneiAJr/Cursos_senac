/* 
=================================
ConnectionFactory.java | Nome do Arquivo
=================================
*/
import java.sql.*;

//Responsabilidade: apenas conectar banco
public class ConnectionFactory {
   //endereço do banco
    private static final String URL = "jdbc:mysql://localhost:3306/EscolaDown";  // URL de conexão MySQL
    private static final String USER = "root";  // Usuário MySQL
    private static final String PASS = "root";  // Senha MySQL

    public static Connection getConnection()throws SQLException{
        return DriverManager.getConnection(URL,USER,PASS);
    }
}

----------------------------------------------------------------------------------------------------------
/* 
=================================
Aluno.java | Nome do Arquivo
=================================
*/

// Classe Model
// Representa um aluno no sistema
public class Aluno {

    // ID do aluno (vem do banco)
    private int id;

    // Nome do aluno
    private String nome;

    // Construtor usado quando ainda NÃO temos ID
    // (antes de salvar no banco)
    public Aluno(String nome){
        this.nome = nome;
    }

    // Construtor usado quando o aluno já vem do banco
    public Aluno(int id, String nome){
        this.id = id;
        this.nome = nome;
    }

    // Getter do ID
    public int getId(){
        return id;
    }

    // Setter do ID
    public void setId(int id){
        this.id = id;
    }

    // Getter do nome
    public String getNome(){
        return nome;
    }

    // Setter do nome
    public void setNome(String nome){
        this.nome = nome;
    }
}

----------------------------------------------------------------------------------------------------------
/* 
=================================
AlunoDao.java | Nome do Arquivo
=================================
*/
    
import java.net.ConnectException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AlunoDao {
   // Create : inserir aluno no banco

    public void cadastrar(Aluno aluno){
        // Usar ? para Sql Injection Prevenir
        String sql = "Insert into alunos (nome) values (?)";
        // tratamento de possivel erro
        try(Connection conn = ConnectionFactory.getConnection();PreparedStatement stmt = conn.prepareStatement(sql)){
          stmt.setString(1,aluno.getNome());
          // Executamos o Insert (podemos utilizar o executaupdate para insert update e delete)
            stmt.executeUpdate();
        } catch (Exception e) {
            throw new RuntimeException("Erro ao cadastrar aluno", e);
        }
    }
    //Read:listar todos
    public List<Aluno>Listar(){
        String sql = "Select id, nome from Alunos";
        List<Aluno> alunos = new ArrayList<>();
        try(Connection conn = ConnectionFactory.getConnection();
        PreparedStatement stmt = conn.prepareStatement(sql);
        ResultSet rs = stmt.executeQuery()){
            //Enquanto tiver linha no resultado
            while(rs.next()){
                int id = rs.getInt("id");
                String nome = rs.getString("nome");
                Aluno aluno = new Aluno(id,nome);
                //Adicionar na lista
                alunos.add(aluno);
            }
        } catch (Exception e) {
            throw new RuntimeException("Erro ao listar alunos", e);
        }
        // Devolver a lista pronta
        return alunos;
    }
}


----------------------------------------------------------------------------------------------------------
/* 
=================================
Main.java | Nome do Arquivo
=================================
*/
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scannner = new Scanner(System.in);
        AlunoDao dao = new AlunoDao();
        System.out.println("Quanto Aluno deseja cadastrar? ");
        int quantidade = scannner.nextInt();
        scannner.nextLine();
        //Loop para cadastrar alunos
        for(int i=0; i<quantidade; i++){
            System.out.println("Digita o Nome do Aluno: "+i+"?"+":");
            String nome = scannner.nextLine();
            // Criar o aluno(Model)
            Aluno aluno = new Aluno(nome);
            // Envia para o Dao salvar no banco
            dao.cadastrar(aluno);
        }
        System.out.println("\n ===============ALUNO CADASTRADO=============");
        dao.Listar().forEach(aluno->{
            System.out.println(aluno.getId()+"-"+aluno.getNome());
        });
        scannner.close();
    }
}



  
