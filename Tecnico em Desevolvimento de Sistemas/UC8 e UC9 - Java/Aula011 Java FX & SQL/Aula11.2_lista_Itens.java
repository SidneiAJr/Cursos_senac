
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
    @SuppressWarnings("unchecked")
    public void listauser(Connection conn) {
    try {
        // Cria o statement para executar a consulta SQL
        Statement stmt = conn.createStatement();
        String sql = "SELECT id,nome_Produto,quantidade_produto,preco_produto FROM produtos";  // Corrigido SQL
        
        // Executa a consulta SQL e obtém o resultado
        ResultSet rs = stmt.executeQuery(sql);
        
        while(rs.next()){
            int id = rs.getInt("id");
            String nomeProduto = rs.getString("nome_Produto");
            String QuantidadeProdutos = rs.getString("quantidade_produto");
            double preco = rs.getDouble("preco_produto");

       Jt_usuarios.append("ID: " + id + " Nome Produto " + nomeProduto + ""+"Quantidade Produto" + QuantidadeProdutos + "Preco R$" + preco+"\n");
        }
        // Itera sobre os resultados e exibe os dados
        
        
    } 

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        // TODO add your handling code here:
        Con con = new Con("teste", "root", "root");

        // Chama o método conex() para tentar a conexão
        Connection conn = con.conex();

        // Verifica se a conexão foi bem-sucedida e atualiza o label de saída
        if (conn != null) {
            jt_saida.setText("Bem vindo | Lista de Produtos!");
            listauser(conn);

        } else {
            jt_saida.setText("Falha na conexão!");
        }

    }
    
