import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class deletaPaciente {
    final String URL = "jdbc:mysql://localhost:3306/hospital";  // URL do MySQL (sem especificar o banco)
    final String USER = "root";  // Usuário do MySQL
    final String PASS = "root";  // Senha do MySQL

    public void Delete() {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Informe o ID : ");
        int id = entrada.nextInt();

        entrada.nextLine();

        String sql =
                "DELETE FROM pacientes WHERE id = ?";
        try (Connection conexao = DriverManager.getConnection(URL, USER, PASS); PreparedStatement stm = conexao.prepareStatement(sql)) {
            //subtituil os parametros da sql
            stm.setInt(1, id);
            int linhasafetadas = stm.executeUpdate();
            System.out.println("Paciente Atualizado com Sucesso!\nTotal de Linhas Afetadas: " + linhasafetadas);

        } catch (SQLException e) {
            System.out.println("Erro ao conectar ao banco de dados.");
            e.printStackTrace();
        }
    }
}
