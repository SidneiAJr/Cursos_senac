class Pessoa{
    public PartidoPolitico:string;
    public FiliadoPartido:boolean;

    constructor(PartidoPolitico:string,FiliadoPartido:boolean){
     this.PartidoPolitico = PartidoPolitico;
     this.FiliadoPartido = FiliadoPartido;
    }

    Mostrarpartido(){
     console.log(`Partido Politico ${this.PartidoPolitico} Filiado ${this.FiliadoPartido}`);
    }
}

class InfoPesssoa extends Pessoa{
    public nome:string;

    constructor(nome: string, PartidoPolitico: string, FiliadoPartido: boolean) {
        super(PartidoPolitico, FiliadoPartido); // Chamada correta ao construtor da classe mãe
        this.nome = nome;
    }

    VerificarPartido(){
        console.log(`Pessoa ${this.nome} Partido Politico ${this.PartidoPolitico} Filiado ${this.FiliadoPartido}`);
    }
}

const pessoa1 = new InfoPesssoa("Joao neves","Partido Imaginario",true);
const pessoa2 = new InfoPesssoa("Jian Silva","Movimento Brasileiro Testador de Codigo",true);


pessoa1.VerificarPartido();
pessoa2.VerificarPartido();
