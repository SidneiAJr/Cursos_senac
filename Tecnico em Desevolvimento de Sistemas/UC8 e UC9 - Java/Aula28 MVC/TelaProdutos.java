// Método que atualiza a tabela com os jogos do banco
private void atualizarTabela() {
    try {
        // Cria o objeto DAO para acessar o banco
        JogoDAO dao = new JogoDAO();
        // Lista todos os jogos cadastrados
        List<Jogo> lista = dao.Listar(); 

        // Cria um modelo para a JTable
        DefaultTableModel model = new DefaultTableModel();
        model.addColumn("ID");         // Coluna de identificação (oculta depois)
        model.addColumn("Título");     // Nome do jogo
        model.addColumn("Plataforma"); // Plataforma do jogo
        model.addColumn("Preço");      // Preço do jogo
        model.addColumn("Imagem");     // Caminho da imagem

        // Percorre a lista de jogos e adiciona cada jogo como uma linha da tabela
        for (Jogo jogo : lista) {
            model.addRow(new Object[] {
                jogo.getId(),
                jogo.getTitulo(),
                jogo.getPlataforma(),
                jogo.getPreco(),
                jogo.getImagemPath()
            });
        }

        // Aplica o modelo à JTable
        tb_info.setModel(model);

        // Esconder a coluna ID (não precisa ser visível para o usuário)
        tb_info.getColumnModel().getColumn(0).setMinWidth(0);
        tb_info.getColumnModel().getColumn(0).setMaxWidth(0);
        tb_info.getColumnModel().getColumn(0).setWidth(0);

    } catch (Exception e) {
        // Mostra mensagem de erro caso algo dê errado
        JOptionPane.showMessageDialog(this, "Erro ao atualizar tabela: " + e.getMessage());
    }
}

// Método chamado quando clica no botão "Novo"
private void btn_novoActionPerformed(java.awt.event.ActionEvent evt) {                                         
    // Limpa todos os campos do formulário
    jt_titulo.setText("");
    jt_plataforma.setText("");
    jt_preco.setText("");
    jt_imagem.setText(""); // campo do caminho da imagem
}

// Método chamado quando clica no botão "Salvar | Editar"
private void btn_salvarActionPerformed(java.awt.event.ActionEvent evt) {                                           
    try {
        // Cria um objeto Jogo e preenche com os dados do formulário
        Jogo jogo = new Jogo();
        jogo.setTitulo(jt_titulo.getText());
        jogo.setPlataforma(jt_plataforma.getText());
        jogo.setPreco(Double.parseDouble(jt_preco.getText()));
        jogo.setImagemPath(jt_imagem.getText()); // pega o caminho da imagem selecionada

        // Chama o DAO para inserir o jogo no banco
        JogoDAO dao = new JogoDAO();
        dao.Inserir(jogo);

        // Mostra mensagem de sucesso
        JOptionPane.showMessageDialog(this, "Jogo salvo com sucesso!");

        // Atualiza a tabela para mostrar o novo jogo
        atualizarTabela(); 
    } catch (NumberFormatException e) {
        // Caso o preço não seja um número válido
        JOptionPane.showMessageDialog(this, "Preço inválido! Digite apenas números.");
    } catch(Exception e) {
        // Caso dê algum outro erro
        JOptionPane.showMessageDialog(this, "Erro ao salvar o jogo: " + e.getMessage());
    }
}

// Método chamado quando clica no botão "Excluir"
private void btn_excluirActionPerformed(java.awt.event.ActionEvent evt) {                                            
    try {
        // Pega a linha selecionada na tabela
        int linhaSelecionada = tb_info.getSelectedRow();
        if (linhaSelecionada == -1) {
            JOptionPane.showMessageDialog(this, "Selecione um jogo para excluir!");
            return; // sai do método se nada estiver selecionado
        }

        // Pega o ID do jogo (coluna 0)
        int id = (int) tb_info.getValueAt(linhaSelecionada, 0);

        // Chama o DAO para excluir do banco
        JogoDAO dao = new JogoDAO();
        dao.Excluir(id);

        // Mensagem de confirmação
        JOptionPane.showMessageDialog(this, "Jogo excluído!");

        // Atualiza a tabela
        atualizarTabela();
    } catch (Exception e) {
        // Mostra erro caso algo dê errado
        JOptionPane.showMessageDialog(this, "Erro: " + e.getMessage());
    }
}

// Método chamado quando clica no botão "Atualizar"
private void btn_atualizarActionPerformed(java.awt.event.ActionEvent evt) {                                              
    try {
        // Atualiza a tabela com os dados do banco
        atualizarTabela(); 
        JOptionPane.showMessageDialog(this, "Informações atualizadas!");
    } catch (Exception e) {
        JOptionPane.showMessageDialog(this, "Erro ao atualizar tabela: " + e.getMessage());
    }
}

// Método chamado quando clica no botão "Escolher Imagem"
private void btn_escolherimgActionPerformed(java.awt.event.ActionEvent evt) {                                                
    // 1️⃣ Cria um JFileChooser para selecionar arquivos
    javax.swing.JFileChooser fileChooser = new javax.swing.JFileChooser();
    fileChooser.setDialogTitle("Escolher Imagem");
    
    // 2️⃣ Filtra para mostrar apenas imagens
    fileChooser.setAcceptAllFileFilterUsed(false);
    fileChooser.addChoosableFileFilter(
        new javax.swing.filechooser.FileNameExtensionFilter("Imagens", "jpg", "jpeg", "png", "gif")
    );
    
    // 3️⃣ Abre a janela de seleção e verifica se o usuário escolheu uma imagem
    int resultado = fileChooser.showOpenDialog(this);
    if (resultado == javax.swing.JFileChooser.APPROVE_OPTION) {
        // 4️⃣ Pega o caminho absoluto da imagem escolhida
        String caminhoImagem = fileChooser.getSelectedFile().getAbsolutePath();
        jt_imagem.setText(caminhoImagem); // coloca no campo de texto
        
        // 5️⃣ Mostra um preview da imagem no jPanel2
        javax.swing.ImageIcon icon = new javax.swing.ImageIcon(caminhoImagem);
        // Redimensiona a imagem para caber no painel
        java.awt.Image img = icon.getImage().getScaledInstance(
            jPanel2.getWidth(), jPanel2.getHeight(), java.awt.Image.SCALE_SMOOTH
        );
        icon = new javax.swing.ImageIcon(img);
        
        // Limpa o painel e adiciona a imagem como um JLabel
        jPanel2.removeAll();
        javax.swing.JLabel lbl = new javax.swing.JLabel(icon);
        jPanel2.add(lbl);
        jPanel2.revalidate();
        jPanel2.repaint();
    }
}
