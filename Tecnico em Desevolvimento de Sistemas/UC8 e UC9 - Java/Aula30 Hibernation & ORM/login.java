package View;
import DAO.UsuarioDao;
import Model.Usuario;
import org.mindrot.jbcrypt.BCrypt;
import javax.swing.JOptionPane;

private void btn_limparActionPerformed(java.awt.event.ActionEvent evt) {                                           
        // TODO add your handling code here:
        jt_senha.setText("");
        jt_user.setText("");
    }                                          

    private void btn_loginActionPerformed(java.awt.event.ActionEvent evt) {                                          
        // TODO add your handling code here:
        String user = jt_user.getText().trim();
        String pwd = new String(jt_senha.getPassword());
        
        if(user.isEmpty() || pwd.isEmpty()){
             JOptionPane.showMessageDialog(this, "Preencha todos os campos!");
        return;
        }
        UsuarioDao dao = new UsuarioDao();
        
        Usuario usuario = dao.buscarPorEmail(user);
        if (usuario == null) {
        JOptionPane.showMessageDialog(this, "Usuário não encontrado!");
        return;
    }
         boolean senhaCorreta = BCrypt.checkpw(pwd, usuario.getSenhaHash());
         if (senhaCorreta) {
        JOptionPane.showMessageDialog(this, "Login realizado com sucesso!");
        
        // Aqui pode abrir outra tela:
        // new Home().setVisible(true);
        // this.dispose();

    } else {
        JOptionPane.showMessageDialog(this, "Senha incorreta!");
    }
         
        
        
    }                         
