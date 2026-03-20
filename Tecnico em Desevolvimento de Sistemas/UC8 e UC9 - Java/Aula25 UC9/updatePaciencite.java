import java.sql.*; // Import de Lib de conexção
import java.util.Scanner;

public class updatePaciente {
    final String URL = "jdbc:mysql://localhost:3306/hospital";  // URL do MySQL (sem especificar o banco)
    final String USER = "root";  // Usuário do MySQL
    final String PASS = "root";  // Senha do MySQL

    public void Update() {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Informe o ID : ");
        int id = entrada.nextInt();

        entrada.nextLine();

        System.out.println("Informe o Novo Plano: ");
        String plano = entrada.nextLine();

        String sql =
                "UPDATE pacientes set plano = ? WHERE id = ?";
        try (Connection conexao = DriverManager.getConnection(URL, USER, PASS); PreparedStatement stm = conexao.prepareStatement(sql)) {
            //subtituil os parametros da sql
            stm.setString(1, plano);
            stm.setInt(2, id);
            int linhasafetadas = stm.executeUpdate();
            System.out.println("Paciente Atualizado com Sucesso!\nTotal de Linhas Afetadas: " + linhasafetadas);

        } catch (SQLException e) {
            System.out.println("Erro ao Fazer Update!");
        }
    }
}
