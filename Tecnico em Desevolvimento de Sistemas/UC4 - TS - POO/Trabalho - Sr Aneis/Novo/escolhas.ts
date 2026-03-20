import { VerificaPagina } from "./Interface";
import { PaginaBase } from "./Pagina";

export class EscolhasJogador extends PaginaBase implements VerificaPagina {
    constructor(
        numero: number,
        texto: string,
        public escolhas: { descricao: string; proximaPagina: number }[]
    ) {
        super(numero, texto);
    }

    override Verificarpagina(): void {
        super.Verificarpagina();
        console.log("Escolhas disponíveis:");
        this.escolhas.forEach((e, i) => {
            console.log(`${i + 1} - ${e.descricao}`); // aqui corrigi com template string
        });
    }
}
