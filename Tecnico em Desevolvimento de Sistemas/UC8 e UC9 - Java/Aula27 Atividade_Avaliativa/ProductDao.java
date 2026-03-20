import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDao {
    public void cadastrar(ModelProduct modelProduct) {
        // SQL com parâmetro ? para prevenir SQL Injection
        String sql = "INSERT INTO produto (NomeProduto,Setor,precoProduto,InformacaoProduto) VALUES (?,?,?,?)"; // <----- Inserir na tabela Aluno **Alterar a tabela**

        // Try-with-resources: fecha automaticamente conexão e statement
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql)) {

            // Seta o parâmetro do SQL com o nome do aluno
            stmt.setString(1, modelProduct.getNomeProduto());
            stmt.setString(2, modelProduct.getSetor());
            stmt.setDouble(3,modelProduct.getPrecoProduto());
            stmt.setString(4, modelProduct.getInformacaoProduto());

            // Executa o INSERT (executeUpdate serve para INSERT, UPDATE e DELETE)
            stmt.executeUpdate();

        } catch (Exception e) {
            // Lança RuntimeException caso haja algum erro
            throw new RuntimeException("Erro ao cadastrar Produto", e);
        }
    }
    public List<ModelProduct> Listar() {
        String sql = "SELECT id_produto, NomeProduto, Setor, precoProduto, InformacaoProduto FROM produto";

        List<ModelProduct> ListaProdutos = new ArrayList<>();     // Lista que vai armazenar os alunos

        // Try-with-resources: conexão, statement e result set serão fechados automaticamente
        try (Connection conn = ConnectionFactory.getConnection();
             PreparedStatement stmt = conn.prepareStatement(sql);
             ResultSet rs = stmt.executeQuery()) {

            // Percorre todas as linhas do resultado
            while (rs.next()) {
                // Pega os valores de cada coluna
                int id = rs.getInt("id_produto");
                String nomeProduto = rs.getString("NomeProduto");
                String setor = rs.getString("Setor");
                double precoProduto = rs.getDouble("precoProduto");
                String informacaoProduto = rs.getString("InformacaoProduto");

// Cria o objeto com os dados do ResultSet
                ModelProduct modelProduct = new ModelProduct(id, nomeProduto, setor, precoProduto, informacaoProduto);


                // Adiciona o aluno à lista
                ListaProdutos.add(modelProduct);
            }

        } catch (Exception e) {
            throw new RuntimeException("Erro | Listar Produtos", e);
        }

        // Retorna a lista de alunos
        return ListaProdutos;
    }
}
