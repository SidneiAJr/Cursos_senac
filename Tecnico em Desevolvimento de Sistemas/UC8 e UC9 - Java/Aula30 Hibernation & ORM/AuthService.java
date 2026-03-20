package service;

import DAO.UsuarioDao;
import Model.Usuario;
import org.mindrot.jbcrypt.BCrypt;


public class AuthService {
     private final UsuarioDao dao = new UsuarioDao();
     private static final String REGEX_EMAIL = "^[A-Za-z0-9+_.-]+@(.+)$";

    // Regex de senha forte:
    // - (?=.*[A-Z]) tem pelo menos 1 letra maiúscula
    // - (?=.*\\d)   tem pelo menos 1 número
    // - .{8,}       mínimo 8 caracteres
    private static final String REGEX_SENHA = "^(?=.*[A-Z])(?=.*\\d).{8,}$";
    
    public String cadastrar(String usuario, String email, String senha) {

        // Normaliza entradas
        usuario = (usuario == null) ? "" : usuario.trim();
        email = (email == null) ? "" : email.trim().toLowerCase();

        // 1) valida nome
        if (usuario.length() < 2) return "Nome inválido (mínimo 2 letras).";

        // 2) valida email com regex
        if (!email.matches(REGEX_EMAIL)) return "E-mail inválido.";

        // 3) valida senha com regex
        if (!senha.matches(REGEX_SENHA)) {
            return "Senha fraca: mínimo 8, 1 maiúscula e 1 número.";
        }

        // 4) verifica se já existe usuário com o email
        if (dao.buscarPorEmail(email) != null) return "Este e-mail já está cadastrado.";

        // 5) BCrypt: gera hash seguro
        // gensalt(10) = "custo" (quanto mais, mais seguro e mais lento)
        String hash = BCrypt.hashpw(senha, BCrypt.gensalt(10));

        // 6) salva no banco (ORM)
        dao.salvar(new Usuario(usuario, email, hash));

        return null; // OK
    }
    
     public Usuario login(String usuario, String senha) {

        usuario = (usuario == null) ? "" : usuario.trim().toLowerCase();

        // busca no banco
        Usuario u = dao.buscarPorEmail(usuario);

        // se não achou usuário, login falha
        if (u == null) return null;

        // BCrypt compara senha digitada com hash do banco
        boolean ok = BCrypt.checkpw(senha, u.getSenhaHash());

        return ok ? u : null;
    }

     
     
}

