class Tank{
    nome_tank:string;
    blindagem:number;
    motor_potencia:number;
    calibre:number;
    velocidade:string;
    constructor(nome_tank:string, blindagem:number,motor_potencia:number,calibre:number,velocidade:string){
        this.nome_tank = nome_tank;
        this.blindagem = blindagem;
        this.motor_potencia = motor_potencia;
        this.velocidade = velocidade;
        this.calibre = calibre;
    }
    estoque_tanks(){
        console.log(`Tank Nome: ${this.nome_tank} calibre ${this.calibre}mm`);
    }
}
class ConstrutorTank{
    nome_construtor:string;
    idade:number;
    constructor(nome_construtor:string,idade:number){
        this.nome_construtor = nome_construtor;
        this.idade = idade;
    }
}
class Manutencao{
    pessoa_responsavel:string;
    constructor(pessoa_responsavel:string){
        this.pessoa_responsavel = pessoa_responsavel;
    }
    adicionar_manutencao(){
        console.log(`${this.pessoa_responsavel} registrou manutenção!`);
    }

    adicionar_troca() {
        console.log(`${this.pessoa_responsavel} registrou troca de peça!`);
    }

    adicionar_melhoria() {
        console.log(`${this.pessoa_responsavel} registrou melhoria no tanque!`);
    }
    adicionar_tank() {
        // Aqui você pode implementar o que quiser ou remover este método
        console.log("Função adicionar_tank ainda não implementada.");
    }
}
const estoque1 = new Tank("TigerI", 88, 1500, 88, "40km/h");
const estoque2 = new Tank("TigerII", 88, 1500, 88, "40km/h");
const estoque3 = new Tank("Panther II", 88, 1500, 88, "39km/h");
const engenheiro = new ConstrutorTank("João", 45);
const manutencao = new Manutencao("Carlos");

manutencao.adicionar_manutencao();
manutencao.adicionar_troca();
manutencao.adicionar_melhoria();
estoque1.estoque_tanks();
estoque2.estoque_tanks();
estoque3.estoque_tanks();
