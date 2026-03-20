package View;

import dao.JogoDAO; // Importa o Dao (que conversa com o mysql)
import java.util.List; // Importando o List
import javax.swing.JOptionPane; // Importando o JOPtion para avisos
import model.Jogo; // Importando o Modelo do jogo
import javax.swing.table.DefaultTableModel; // Importando os sistema de tabela

private void btn_limparActionPerformed(java.awt.event.ActionEvent evt) {                                           
        // TODO add your handling code here:
    jt_titulo.setText("");
    jt_plataforma.setText("");
    jt_preco.setText("");
    jt_imagem.setText(""); // supondo que você tenha um campo para o caminho da imagem
    }                                          

    private void btn_salvarActionPerformed(java.awt.event.ActionEvent evt) {                                           
        
    }                                          

    private void btn_excluirActionPerformed(java.awt.event.ActionEvent evt) {                                            
        // TODO add your handling code here:
      
    }                                           

    private void btn_atualizarActionPerformed(java.awt.event.ActionEvent evt) {                                              
        // TODO add your handling code here:
       
    }                                             

    private void btn_escolherimgActionPerformed(java.awt.event.ActionEvent evt) {                                                
       // 1️⃣ Criar JFileChooser
    
    
    }           
