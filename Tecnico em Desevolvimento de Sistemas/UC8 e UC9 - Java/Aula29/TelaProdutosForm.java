package View;

import dao.JogoDAO; // Importa o Dao (que conversa com o mysql)
import java.util.List; // Importando o List
import javax.swing.JOptionPane; // Importando o JOptionPane para avisos
import model.Jogo; // Importando o Modelo do Jogo
import javax.swing.table.DefaultTableModel; // Importando o sistema de tabela
import util.ImageStorage; // Importa a classe de armazenamento de imagens
import java.awt.Image;
import java.io.File;
import javax.swing.ImageIcon;
import javax.swing.JFileChooser;
import javax.swing.ListSelectionModel;

public class TelaProdutosForm extends javax.swing.JFrame {
    // Cria o Dao, uma única vez para usar em toda a tela
    private final JogoDAO dao = new JogoDAO();  // DAO para interação com o banco de dados
    private Integer idSelecionado = null;  // Guarda o ID do jogo selecionado, null indica novo cadastro
    private File ImagemEscolhida;  // Guarda o arquivo de imagem que o usuário escolheu antes de ser salvo

    // Construtor da tela
    public TelaProdutosForm() {
        initComponents();  // Inicializa os componentes do formulário
        configurarTabela();  // Configura a tabela (para selecionar um item)
        recarregarTabela();  // Carrega os dados na tabela
        novo();  // Reseta os campos do formulário para modo "novo cadastro"
    }

    // Método que configura a tabela para seleção de uma linha (item)
    public void configurarTabela(){
        // Configura a tabela para permitir apenas uma seleção por vez
        tb_info.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);

        // Listener que dispara quando uma linha é selecionada na tabela
        tb_info.getSelectionModel().addListSelectionListener(e ->{
            if(!e.getValueIsAdjusting()){  // Evita disparar duas vezes
                int row = tb_info.getSelectedRow();  // Pega a linha selecionada
                if(row >= 0){  // Se há uma linha selecionada...
                    int id = (int) tb_info.getModel().getValueAt(row, 0);  // Pega o ID da linha selecionada
                    carregarparaEdicao(id);  // Carrega os dados do jogo para edição
                }
            }
        });
    }

    // Método que carrega os dados de um jogo para edição
    private void carregarparaEdicao(int id){
        Jogo j = dao.buscarPorId(id);  // Busca o jogo no banco usando o ID
        if(j == null) return;  // Se o jogo não for encontrado, não faz nada

        // Preenche os campos com os dados do jogo
        idSelecionado = j.getId();
        jt_titulo.setText(j.getTitulo());
        jt_plataforma.setText(j.getPlataforma());
        jt_preco.setText(String.valueOf(j.getPreco()));
        jt_imagem.setText(j.getImagemPath() == null ? "Nenhuma Imagem" : j.getImagemPath());

        // Não obriga a escolher a imagem novamente ao editar
        ImagemEscolhida = null;  
        Mostrarimagem(j.getImagemPath(), false);  // Exibe a imagem do jogo
    }

    // Método que permite ao usuário escolher uma imagem do seu computador
    private void escolherImagem(){
        JFileChooser chooser = new JFileChooser();  // Cria um seletor de arquivos
        chooser.setDialogTitle("Escolha a imagem do jogo: ");  // Título da janela
        int result = chooser.showOpenDialog(this);  // Abre a janela para escolher a imagem

        if(result == JFileChooser.APPROVE_OPTION){  // Se o usuário escolher uma imagem...
            ImagemEscolhida = chooser.getSelectedFile();  // Armazena o arquivo da imagem
            Mostrarimagem(ImagemEscolhida.getAbsolutePath(), true);  // Exibe a imagem de pré-visualização
            jt_imagem.setText("Será copiado para salvar (./Salvar)");  // Exibe uma mensagem informando o local de salvamento
        }
    }

    // Método para salvar ou atualizar o jogo
    private void salvarouAtualizar(){
        // Valida os campos, impedindo salvar se algum campo necessário estiver vazio
        if (jt_titulo.getText().isBlank() || jt_plataforma.getText().isBlank() || jt_preco.getText().isBlank()) {
            JOptionPane.showMessageDialog(this, "Preencha título, plataforma e preço.", "Atenção", JOptionPane.WARNING_MESSAGE);
            return;  // Retorna sem fazer nada se algum campo estiver vazio
        }

        // Converte o preço de String para double
        double preco;
        try {
            preco = Double.parseDouble(jt_preco.getText().replace(",", "."));  // Aceita valores como "199,90" e transforma para "199.90"
        } catch (Exception e) {
            JOptionPane.showMessageDialog(this, "Preço inválido! Ex: 199.90", "Atenção", JOptionPane.WARNING_MESSAGE);
            return;  // Retorna se o preço for inválido
        }

        String caminhoImagem = null;  // Variável que vai armazenar o caminho da imagem

        // Se o usuário escolheu uma imagem nova agora...
        if (ImagemEscolhida != null) {
            // Salva a imagem escolhida e pega o caminho relativo da imagem
            caminhoImagem = ImageStorage.salvarImagem(ImagemEscolhida);
        } else if (idSelecionado != null) {
            // Se estamos editando, mantém o caminho da imagem atual
            Jogo atual = dao.buscarPorId(idSelecionado);
            if (atual != null) caminhoImagem = atual.getImagemPath();
        }

        // Cria um novo objeto Jogo com os dados preenchidos
        Jogo j = new Jogo(
                jt_titulo.getText().trim(),
                jt_plataforma.getText().trim(),
                preco,
                caminhoImagem);

        // Se não tem ID (ou seja, é um novo cadastro), chama o método de inserir
        if (idSelecionado == null) {
            dao.Inserir(j);
            JOptionPane.showMessageDialog(this, "Produto cadastrado!", "OK", JOptionPane.INFORMATION_MESSAGE);
        } else {  // Caso contrário, é uma edição (atualiza o produto existente)
            j.setId(idSelecionado);
            dao.Atualizar(j);
            JOptionPane.showMessageDialog(this, "Produto atualizado!", "OK", JOptionPane.INFORMATION_MESSAGE);
        }

        // Atualiza a tabela e limpa os campos do formulário
        recarregarTabela();
        novo();
    }

    // Método para exibir a imagem no painel de pré-visualização
    private void Mostrarimagem(String caminho, boolean preview) {
        if (caminho == null || caminho.isBlank()) {
            lbl_capa.setIcon(null);
            lbl_capa.setText("Sem imagem");
            return;
        }

        File imgFile = new File(caminho);

        if (!imgFile.exists()) {
            lbl_capa.setIcon(null);
            lbl_capa.setText("Imagem não encontrada");
            return;
        }

        ImageIcon icon = new ImageIcon(caminho);  // Cria um ícone a partir do caminho
        Image img = icon.getImage().getScaledInstance(
                lbl_capa.getWidth(),
                lbl_capa.getHeight(),
                Image.SCALE_SMOOTH);  // Ajusta o tamanho da imagem para o painel

        lbl_capa.setIcon(new ImageIcon(img));
        lbl_capa.setText("");  // Limpa o texto

        // Adiciona uma dica sobre o status da imagem (pré-visualização ou imagem salva)
        if (preview) {
            lbl_capa.setToolTipText("Pré-visualização (ainda não salva)");
        } else {
            lbl_capa.setToolTipText("Imagem salva");
        }
    }

    // Método para recarregar a tabela com os dados atualizados
    public void recarregarTabela(){
        DefaultTableModel m = (DefaultTableModel) tb_info.getModel();

        // Limpa todas as linhas da tabela antes de recarregar
        m.setRowCount(0);

        // Busca a lista de jogos no banco
        List<Jogo> lista = dao.Listar();

        // Adiciona cada jogo na tabela
        for (Jogo j : lista) {
            m.addRow(new Object[]{ j.getId(), j.getTitulo(), j.getPlataforma(), j.getPreco(), j.getImagemPath() });
        }
    }

    // Método para excluir um jogo
    private void excluir() {
        // Se não há um jogo selecionado, não pode excluir
        if (idSelecionado == null) {
            JOptionPane.showMessageDialog(this, "Selecione um item para excluir.", "Atenção", JOptionPane.WARNING_MESSAGE);
            return;
        }

        // Confirmação para evitar exclusões acidentais
        int confirm = JOptionPane.showConfirmDialog(this, "Excluir este produto?", "Confirmar", JOptionPane.YES_NO_OPTION);

        if (confirm == JOptionPane.YES_OPTION) {  // Se o usuário confirmar a exclusão...
            dao.Excluir(idSelecionado);  // Exclui o jogo
            JOptionPane.showMessageDialog(this, "Produto excluído!", "OK", JOptionPane.INFORMATION_MESSAGE);
            recarregarTabela();  // Recarrega a tabela
            novo();  // Limpa os campos
        }
    }

    // Método que reseta o formulário para um novo cadastro
    private void novo(){
        idSelecionado = null;  // Limpa a seleção do ID
        ImagemEscolhida = null;  // Limpa a imagem escolhida
        jt_titulo.setText("");  // Limpa o campo de título
        jt_preco.setText("");  // Limpa o campo de preço
        jt_plataforma.setText("");  // Limpa o campo de plataforma
        jt_imagem.setText("Nenhuma Imagem escolhida");  // Limpa o campo de imagem

        // Limpa o painel de pré-visualização da imagem
        lbl_capa.setIcon(null);
        lbl_capa.setText("Selecione um Item: ");

        // Remove a seleção da tabela
        tb_info.clearSelection();
    }

    // Método que chama a função para limpar os campos ao clicar no botão
    private void btn_limparActionPerformed(java.awt.event.ActionEvent evt) {                                           
        novo();  // Reseta os campos
    }

    // Método que chama a função para salvar ou atualizar o produto
    private void btn_salvarActionPerformed(java.awt.event.ActionEvent evt) {                                           
        salvarouAtualizar();  // Chama a função de salvar ou atualizar
    }

    // Método que chama a função para excluir um produto
    private void btn_excluirActionPerformed(java.awt.event.ActionEvent evt) {                                            
        excluir();  // Chama a função de excluir
    }

    // Método que prepara para atualizar um produto, mas não faz nada no momento
    private void btn_atualizarActionPerformed(java.awt.event.ActionEvent evt) {                                              
        // Nenhuma ação definida para o botão "Atualizar"
    }  

    // Método que chama a função para escolher uma imagem ao clicar no botão
    private void btn_escolherimgActionPerformed(java.awt.event.ActionEvent evt) {                                                
        escolherImagem();  // Abre o seletor de imagem
    }
}
