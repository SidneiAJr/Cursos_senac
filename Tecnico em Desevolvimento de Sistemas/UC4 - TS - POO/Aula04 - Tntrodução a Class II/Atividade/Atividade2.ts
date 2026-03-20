class Celular{
    nome_celular:string;
    private bateria:number;

    constructor(nome_celular:string,bateria:number){
    this.nome_celular = nome_celular;
    this.bateria = 100;
    }
    public carregar(){
        if(this.bateria>=100){
        console.log(`Bateria ${this.bateria}%`);
         this.bateria = 100; 
        }else if(this.bateria<25){
            console.log(`Bateria ${this.bateria}%`);
        }else{
            console.log(`Bateria ${this.bateria}% Sua Bateria esta presta a Acabar!`);
        }
    }
    public usar(){
        if (this.bateria <= 0) {
            console.log("Bateria descarregada... Por favor, carregue o celular.");
            return;
        }
        if (this.bateria > 20) {
            this.bateria -= 5;
        } else {
            this.bateria -= 2; 
        }
        if (this.bateria < 0) this.bateria = 0;
        console.log(`Bateria descarregando: ${this.bateria}%`);
        if (this.bateria < 25) {
            console.log("Sua bateria está prestes a acabar!");
        }
    }
    public mostrarbateria(){
      console.log(`Smartphone ${this.nome_celular} Bateria ${this.bateria}%`);
    }
}

const smartphone1 = new Celular("Nokia G60",15);
const smartphone2 = new Celular("Nokia G30",25);
const smartphone3 = new Celular("Poco X6 Pro",100);

smartphone1.usar();
smartphone2.usar();
smartphone3.usar();

smartphone1.carregar();
smartphone2.carregar();

smartphone1.mostrarbateria();
smartphone2.mostrarbateria();
smartphone3.mostrarbateria();

/*
1- O que acontece se todos os atributos de uma classe forem public?
1R: a classe se tora publica 
2- Qual a diferença entre private e protected no TypeScript?
2R: private e privado e protected e protegida.
3- Dê exemplos reais de coisas do cotidiano que precisam de encapsulamento (como o saldo bancário)?
3R: conta bancaria, bateria de telefone, saldo, estoque.
*/
