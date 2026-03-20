package dao;
import java.sql.SQLException;
import util.ConnectionFactory;
import java.sql.*;
import model.Jogo;
import java.util.ArrayList;
import java.util.List;


public class JogoDAO {
    private Connection connection;
    
    public JogoDAO() {
       try {
        this.connection = new ConnectionFactory().getConnection();
    } catch (SQLException e) {
        throw new RuntimeException("Não foi possível conectar ao banco no início da DAO: ", e);
    }
    }
    
    public void Inserir(Jogo jogo) {
        String sql = "INSERT INTO jogo (titulo,plataforma,preco,imagem_path) VALUES (?, ?,?,?)";
        
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, jogo.getTitulo());
            stmt.setString(2, jogo.getPlataforma());
            stmt.setDouble(3, jogo.getPreco());
            stmt.setString(4, jogo.getImagemPath());
            
            stmt.executeLargeUpdate();
            System.out.println("Jogo salvo com sucesso!");
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao salvar jogo: "+e.getMessage());
        }
    }
    
    //Update Atualizar
    
   public void Atualizar(Jogo jogo) {
    String sql = "UPDATE jogo SET titulo = ?, plataforma = ?, preco = ?, imagem_path = ? WHERE id = ?";

    try (PreparedStatement stmt = connection.prepareStatement(sql)) {
        // Define os novos valores
        stmt.setString(1, jogo.getTitulo());
        stmt.setString(2, jogo.getPlataforma());
        stmt.setDouble(3, jogo.getPreco());
        stmt.setString(4, jogo.getImagemPath());
        
        // Define o ID que está na cláusula WHERE
        stmt.setInt(5, jogo.getId()); 

        int rowsUpdated = stmt.executeUpdate();
        
        if (rowsUpdated > 0) {
            System.out.println("Jogo atualizado com sucesso!");
        }
    } catch (SQLException e) {
        throw new RuntimeException("Erro ao atualizar jogo: " + e.getMessage());
    }
}
   
   public List<Jogo> Listar() {
    String sql = "SELECT * FROM jogo order by titulo";
    List<Jogo> lista = new ArrayList<>();

    try (PreparedStatement stmt = connection.prepareStatement(sql);
         ResultSet rs = stmt.executeQuery()) { // O ResultSet guarda o resultado da consulta

        while (rs.next()) {
            Jogo jogo = new Jogo();
            
            // Pega os dados das colunas do banco e joga no objeto
            jogo.setId(rs.getInt("id"));
            jogo.setTitulo(rs.getString("titulo"));
            jogo.setPlataforma(rs.getString("plataforma"));
            jogo.setPreco(rs.getDouble("preco"));
            jogo.setImagemPath(rs.getString("imagem_path"));

            lista.add(jogo); // Adiciona o jogo na lista
        }
    } catch (SQLException e) {
        throw new RuntimeException("Erro ao listar jogos: " + e.getMessage());
    }
    return lista;
}
   
    public void Excluir(int id) {
    String sql = "DELETE FROM jogo WHERE id = ?";

    try (PreparedStatement stmt = connection.prepareStatement(sql)) {
        stmt.setInt(1, id);
        stmt.executeUpdate();
        System.out.println("Jogo excluído!");
    } catch (SQLException e) {
        throw new RuntimeException("Erro ao excluir jogo: " + e.getMessage());
    }
}
    
    public Jogo buscarPorId(int id) {
    String sql = "SELECT * FROM jogo WHERE id=?";
    Jogo jogo = null;
    
    try (PreparedStatement stmt = connection.prepareStatement(sql)) {
        // Setar o id no PreparedStatement
        stmt.setInt(1, id);
        
        // Executar a consulta e obter o resultado
        try (ResultSet rs = stmt.executeQuery()) {
            if (rs.next()) {
                // Criar o objeto Jogo com os dados do ResultSet
                jogo = new Jogo();
            jogo.setId(rs.getInt("id"));
            jogo.setTitulo(rs.getString("titulo"));
            jogo.setPlataforma(rs.getString("plataforma"));
            jogo.setPreco(rs.getDouble("preco"));
            jogo.setImagemPath(rs.getString("imagem_path"));
                // Continue com os outros atributos que você precisa
            }
        }
    } catch (SQLException e) {
        // Tratar exceção, pode logar ou rethrow, dependendo do seu caso
        throw new RuntimeException("Erro ao Listar por id do jogo: " + e.getMessage());
    }
    return jogo;
}
}
