class Main {
    public static void main(String[] args) {
        System.out.println("Ola Gerador de Hello Word");
        b b1 = new b("Hello Word","Vapo");
        b1.VerificarTipo();
        b b2 = new b("Maisculas","Vapo");
        b2.VerificarTipo();
    }
}

interface teste{
    void VerificarTipo();
}

class b implements teste{
    public String msg;
    public String msg2;

     b(String msg,String msg2){
         this.msg = msg;
         this.msg2 = msg2;
     }

    public void VerificarTipo(){
        switch (msg) {
            case "Hello Word":
            System.out.println("Hello Word é?");
            break;
            case "Hello Word2":
            System.out.println("Hello Word2 é?");
            break;
            case "NUKE":
            System.out.println("BUMMMMMM?");
            break;
            case "Maisculas":
            String mas = msg.toUpperCase();
            String mas2 = msg2.toUpperCase();
            System.out.println("Maiusculas 1"+mas);
            System.out.println("Maiusculas 2"+mas2);
            default:
            break;
        }
    }
}
