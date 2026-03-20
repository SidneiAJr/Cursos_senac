public class ModelProduct {

    private int id;
    private String NomeProduto;
    private String Setor;
    private double precoProduto;
    private String InformacaoProduto;

    public ModelProduct(String nomeproduto){
        this.NomeProduto = nomeproduto;
    }

    public ModelProduct(int id, String NomeProduto,String Setor, double precoProduto,String InformacaoProduto ){
       this.id = id;
       this.NomeProduto = NomeProduto;
       this.Setor = Setor;
       this.precoProduto = precoProduto;
       this.InformacaoProduto = InformacaoProduto;
    }

    public int getId() {
        return id;
    }

    public String getNomeProduto() {
        return NomeProduto;
    }

    public String getSetor() {
        return Setor;
    }

    public double getPrecoProduto() {
        return precoProduto;
    }

    public String getInformacaoProduto() {
        return InformacaoProduto;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setNomeProduto(String nomeProduto) {
        NomeProduto = nomeProduto;
    }

    public void setSetor(String setor) {
        Setor = setor;
    }

    public void setPrecoProduto(double precoProduto) {
        this.precoProduto = precoProduto;
    }

    public void setInformacaoProduto(String informacaoProduto) {
        InformacaoProduto = informacaoProduto;
    }
}
