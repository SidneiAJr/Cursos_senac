//Atividade 3:
class MensagemCompleta{
    constructor(){}
    enviar(msg: string, assunto:string):string;
    enviar(msg: string, assunto:string):number;

    enviar(msg: any, assunto: any) {
    console.log(`Mensagem ${msg} Assunto ${assunto}`)
     return msg+assunto
    }
}
const n = new MensagemCompleta();
n.enviar("teste","teste2");
const n2 = new MensagemCompleta();
n2.enviar("teste3","teste4");


