class Anime{
    NomeAnime:string;
    estilo:string;
    constructor(NomeAnime:string,estilo:string){
        this.estilo=estilo;
        this.NomeAnime=NomeAnime;
    }
}
class Personagem{
    NomePersonagem:string;
    constructor(NomePersonagem:string){
        this.NomePersonagem = NomePersonagem;
    }
}
class CadastroPersonagem{
    Nomeanime: Anime;
    Nomepersonagem: Personagem;
    constructor(Nomeanime:Anime,Nomepersonagem:Personagem){
       this.Nomeanime = Nomeanime;
       this.Nomepersonagem = Nomepersonagem;
    }
}
const naruto = new Anime("Naruto", "Shounen");
const narutoUzumaki = new Personagem("Naruto Uzumaki");

const cadastro = new CadastroPersonagem(naruto, narutoUzumaki);

console.log(cadastro);
