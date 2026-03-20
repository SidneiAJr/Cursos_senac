package model;

//Responsabilidade : é o "Modelo de dados"
public class Jogo {
    
    // Atributos
    // Private = so a propria classe diretamente 
    private int id;
    private String titulo;
    private String plataforma;
    private double preco;
    private String imagemPath;

    // Consctutor vazio
    // Ncessario para framewok , dao, e criação sem dados
    
    public Jogo(){}
    
    // Consctutor com parametros
    //Facilita criar um jogo
    
    public Jogo(String titulo,String plataforma,double preco,String imagemPath){
        this.titulo=titulo;
        this.plataforma = plataforma;
        this.preco = preco;
        this.imagemPath = imagemPath;
    }
    
    // Getter & Setters
    // Servem para acessar o modificar atributos privados

    
    // Getters
    public int getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getPlataforma() {
        return plataforma;
    }

    public double getPreco() {
        return preco;
    }

    public String getImagemPath() {
        return imagemPath;
    }

    // Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setPlataforma(String plataforma) {
        this.plataforma = plataforma;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public void setImagemPath(String imagemPath) {
        this.imagemPath = imagemPath;
    }
    
    
    
    
    
    
    
}
