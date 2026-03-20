package integracao_banco;

import java.sql.Connection;

public class Teste {
    public static void main(String[] args) {
        try {
            // Conectar ao banco 'escola' usando a classe Conexao
            Connection conn = Conexao.conectar("escola");
            System.out.println("Conexão estabelecida com sucesso ao banco 'escola'!");

            // Aqui você pode adicionar mais código para interagir com o banco

        } catch (Exception e) {
            // Exibe o erro caso a conexão falhe
            System.out.println("Erro!! " + e.getMessage());
        }
    }
}
