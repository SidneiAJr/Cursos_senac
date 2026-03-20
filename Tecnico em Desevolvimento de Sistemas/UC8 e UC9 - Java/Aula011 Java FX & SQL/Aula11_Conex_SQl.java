class Con{
    protected String Nome_banco;
    protected String Senha;
    protected String usuario;

    public Con(String Nome_banco, String Senha, String usuario) {
        this.Nome_banco = Nome_banco;
        this.Senha = Senha;
        this.usuario = usuario;
    }
    
    public Connection conex(){
         Connection conn = null;
          try {
            // Substitua o URL com a URL do seu banco
            String url = "jdbc:mysql://localhost:3306/" + Nome_banco;
            // Realiza a conexão
            conn = DriverManager.getConnection(url, usuario, Senha);
            System.out.println("Conexão bem-sucedida!");
        } catch (SQLException e) {
            System.out.println("Erro ao conectar ao banco de dados: " + e.getMessage());
        }
        return conn;
    }        
    }
   public void listauser(Connection conn) {
    try {
        // Cria o statement para executar a consulta SQL
        Statement stmt = conn.createStatement();
        String sql = "SELECT nome_usuario, senha FROM usuario";  // Corrigido SQL
        
        // Executa a consulta SQL e obtém o resultado
        ResultSet rs = stmt.executeQuery(sql);
        
        // Itera sobre os resultados e exibe os dados
        while (rs.next()) {
            String NomeUsuario = rs.getString("nome_usuario");
            String senha = rs.getString("senha");
            
            // Exibe os resultados no lb_Saida
            lb_Saida.setText("Nome de Usuário: " + NomeUsuario + " | Senha: " + senha);
        }
        
    } catch (SQLException e) {
        // Se houver erro na consulta, exibe a mensagem de erro
        lb_Saida.setText("Erro ao listar usuários: " + e.getMessage());
    }
}
  private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        Con con = new Con("teste", "root", "root");

        // Chama o método conex() para tentar a conexão
        Connection conn = con.conex();

        // Verifica se a conexão foi bem-sucedida e atualiza o label de saída
        if (conn != null) {
            jt_saida.setText("Conexão bem-sucedida!");
             listauser(conn);
            
        } else {
            jt_saida.setText("Falha na conexão!");
        }
        
    }          
