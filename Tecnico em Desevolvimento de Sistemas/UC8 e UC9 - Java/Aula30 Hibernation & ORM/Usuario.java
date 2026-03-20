package Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;


@Entity
@Table(name = "usuario")
public class Usuario {
        @Id // Chave primaria
        @GeneratedValue(strategy = GenerationType.AUTO)
        
        @Column(nullable = false, length = 80)
        private int id;
        @Column(nullable = false, length = 80)
        private String usuario;
        @Column(nullable = false, length = 255, unique = true)
        private String email;
        @Column(name ="senha_rash", nullable = false , length = 100 )
        private String senhaHash;
        
        public Usuario() {}

        public Usuario(String usuario, String senhaHash, String email) {
            this.usuario = usuario;
            this.email = email;
            this.senhaHash= senhaHash;
            
        }

    public String getSenhaHash() {
        return senhaHash;
    }


        public String getUsuario() {
            return usuario;
        }

       
        public String getEmail() {
            return email;
        }

        public void setUsuario(String usuario) {
            this.usuario = usuario;
        }

      

    public void setSenhaHash(String senhaHash) {
        this.senhaHash = senhaHash;
    }
        

        public void setEmail(String email) {
            this.email = email;
        }
        
        
}
