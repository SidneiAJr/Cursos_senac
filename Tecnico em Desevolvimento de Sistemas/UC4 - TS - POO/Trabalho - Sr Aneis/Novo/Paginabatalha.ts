import { PaginaBase } from "./Pagina";
import { Personagem } from "./InfoPersonagem";

export class PaginaBatalha extends PaginaBase {
    constructor(
        numero: number,
        texto: string,
        public inimigo: string,
        public inimigoVida: number,
        public personagem: Personagem
    ) {
        super(numero, texto);
    }

    override Verificarpagina(): void {
        super.Verificarpagina();
        console.log(`Um inimigo aparece: ${this.inimigo}! Vida: ${this.inimigoVida}`);
        this.iniciarBatalha();
    }

    private iniciarBatalha(): void {
        console.log(`${this.personagem.nomePersonagem} entra em combate!`);

        while (this.inimigoVida > 0 && this.personagem.VidaPersonagem > 0) {
            // Personagem ataca
            this.inimigoVida -= this.personagem.DanoItem;
            console.log(`${this.personagem.nomePersonagem} ataca com ${this.personagem.NomeItem}, causando ${this.personagem.DanoItem} de dano!`);
            
            if (this.inimigoVida <= 0) {
                console.log(`${this.personagem.nomePersonagem} derrotou ${this.inimigo}!`);
                break;
            }

            const danoInimigo = 3;
            this.personagem.VidaPersonagem -= danoInimigo;
            console.log(`${this.inimigo} revida causando ${danoInimigo} de dano! Vida restante: ${this.personagem.VidaPersonagem}`);

            if (this.personagem.VidaPersonagem <= 0) {
                console.log(`${this.personagem.nomePersonagem} foi derrotado por ${this.inimigo}`);
                break;
            }
        }
    }
}
