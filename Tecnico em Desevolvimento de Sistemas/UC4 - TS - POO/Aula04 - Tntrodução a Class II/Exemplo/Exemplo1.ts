class elemento{
    elemento_nome:string;
    radiativo:boolean;
    estoque:number;
    constructor(elemento_nome:string,radiativo:boolean,estoque:number){
        this.elemento_nome = elemento_nome ;
        this.radiativo = radiativo;
        this.estoque = 10;
    }
    estuda_elemento(){
        console.log(`Elemento Nome ${this.elemento_nome} é Radiativo ${this.radiativo}`)
    }
    limpa_estoque(){
        if(this.estoque>=10){
            this.estoque -- ;
            console.log(`Elemento ${this.elemento_nome} estudado e guardado ${this.estoque}`)
        }else if(this.estoque<5){
           this.estoque --;
            console.log(`Elemento ${this.elemento_nome} estudado e guardado ${this.estoque}`)
        }else{
            console.log(`Elemento ${this.elemento_nome} estudado e guardado ${this.estoque} o estoque acabo`)
        }
       
    }
}

const elemento1 = new elemento ("Helio",false,10);
const elemento2 = new elemento("Hidrogenio",false,10);
const elemento3 = new elemento("Ferro",false,5);

elemento1.estuda_elemento();
elemento2.estuda_elemento();
elemento3.estuda_elemento();

elemento1.limpa_estoque();
elemento2.limpa_estoque();
elemento3.limpa_estoque();
