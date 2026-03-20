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
        } catch (SQLException e) {
        }
        return conn;
    }        
    }
    public void listauser(Connection conn) {
    try {
        // Cria o statement para executar a consulta SQL
        Statement stmt = conn.createStatement();
        String sql = "SELECT nome_usuario, id FROM usuario";  // Corrigido SQL
        
        // Executa a consulta SQL e obtém o resultado
        ResultSet rs = stmt.executeQuery(sql);
        
        while(rs.next()){
            String NomeUsuario = rs.getString("nome_usuario");
        int id = rs.getInt("id");

       Jt_usuarios.append("ID: " + id + " - Nome de Usuário: " + NomeUsuario + "\n");
        }
        // Itera sobre os resultados e exibe os dados
        
        
    } catch (SQLException e) {
        // Se houver erro na consulta, exibe a mensagem de erro
        jt_saida.setText("Erro ao listar usuários: " + e.getMessage());
    }
}

 
    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {                                         
        // TODO add your handling code here:
        Con con = new Con("teste", "root", "root");

        // Chama o método conex() para tentar a conexão
        Connection conn = con.conex();

        // Verifica se a conexão foi bem-sucedida e atualiza o label de saída
        if (conn != null) {
            jt_saida.setText("Bem vindo | Lista de Usuarios Cadastrados!");
             listauser(conn);
            
        } else {
            jt_saida.setText("Falha na conexão!");
        }
        
    }                                        

  
            
}
