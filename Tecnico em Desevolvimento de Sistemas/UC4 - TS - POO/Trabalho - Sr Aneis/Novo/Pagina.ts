import { VerificaPagina } from "./Interface";

//Classe da Pagina
export abstract class PaginaBase implements VerificaPagina{
    constructor(public paginaNumero: number,public paginaInfo: string) {}
    Verificarpagina(): void {
        console.log(`📖 Página ${this.paginaNumero}: ${this.paginaInfo}`);
    }
}
