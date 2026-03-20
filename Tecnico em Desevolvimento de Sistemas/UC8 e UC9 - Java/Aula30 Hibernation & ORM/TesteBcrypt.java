package com.mycompany.sistema.teste2;
import org.mindrot.jbcrypt.BCrypt;

public class SistemaTeste2 {

    public static void main(String[] args) {
        String senha = "123";
        String hash = BCrypt.hashpw(senha,BCrypt.gensalt());
        System.out.println("Senha Criptografada: ");
        System.out.println(hash);
    }
}
