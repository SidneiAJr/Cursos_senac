import { VerificaPagina } from "./Interface";

//Pagina Narrativa
export class PaginaNarrativa implements VerificaPagina{
   constructor(public paginaNumero: number,public texto: string) {}

    Verificarpagina(): void {
        console.log(`Página ${this.paginaNumero}: ${this.texto}`);
    }
}
