package View;
import jakarta.persistence.Id;
import org.mindrot.jbcrypt.BCrypt;
import jakarta.persistence.*;
import Model.Usuario;
import DAO.UsuarioDao;

private void btn_limparActionPerformed(java.awt.event.ActionEvent evt) {                                           
        // TODO add your handling code here:
        jt_senha.setText("");
        jt_user.setText("");
        jt_email.setText("");
    }                                          

    private void btn_loginActionPerformed(java.awt.event.ActionEvent evt) {                                          
         String usuarioTxt = jt_user.getText().trim();
    String pwd = new String(jt_senha.getPassword());
    String emailTxt = jt_email.getText().trim();

    if (usuarioTxt.isEmpty() || pwd.isEmpty() || emailTxt.isEmpty()) {
        javax.swing.JOptionPane.showMessageDialog(this, "Preencha todos os campos!");
        return;
    }

    // 🔐 Gerando hash da senha
    String hash = BCrypt.hashpw(pwd, BCrypt.gensalt());

    // 🧱 Criando objeto Usuario
    Usuario u = new Usuario();
    u.setUsuario(usuarioTxt);
    u.setEmail(emailTxt);
    u.setSenha(pwd); // ⚠ depois vamos remover isso (boa prática)
    u.setSenhaHash(hash);

    // 🗃 Salvando no banco
    UsuarioDao dao = new UsuarioDao();
    dao.salvar(u);

    javax.swing.JOptionPane.showMessageDialog(this, "Usuário cadastrado com sucesso!");
 
    }                         
