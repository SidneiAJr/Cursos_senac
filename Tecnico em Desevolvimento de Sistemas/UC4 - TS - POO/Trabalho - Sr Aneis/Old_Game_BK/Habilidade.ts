import { VerificarHabilidade } from "./Interface";
import {Personagem} from "./InfoPersonagem";


export class HabilidadePersongem extends Personagem implements VerificarHabilidade{
   VerificarHabilidade(): void {
    switch (this.nomePersonagem) {
        case "Gandoff":
            console.log(`Personagem ${this.nomePersonagem} usa ${this.NomeItem} e invoca ${this.habilidade}`);
            break;
        case "Aragorn":
            console.log(`${this.nomePersonagem} saca sua espada e lidera os guerreiros!`);
            break;
        case "Legolas":
            console.log(`${this.nomePersonagem} dispara flechas certeiras sem errar nenhum alvo!`);
            break;
        case "Gimli":
            console.log(`${this.nomePersonagem} gira seu machado e avança em fúria!`);
            break;
        default:
            console.log(`${this.nomePersonagem} não tem habilidade especial definida...`);
            break;
    }
}
}