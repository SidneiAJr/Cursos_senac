import { VerificarHabilidade } from "./Interface";
import { Personagem } from "./InfoPersonagem";

class HabilidadePersongem extends Personagem implements VerificarHabilidade{
   VerificarHabilidade(): void {
    switch (this.nomePersonagem) {
    case "Gandalf":
        console.log(`O mago ${this.nomePersonagem} usa ${this.NomeItem} e invoca ${this.habilidade}!`);
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
    case "Frodo":
        console.log(`${this.nomePersonagem} ativa a habilidade especial: Saco de Pancada!`);
        break;
    case "Galadriel":
        console.log(`${this.nomePersonagem} brilha intensamente e ativa ${this.habilidade}!`);
        break;
    case "Galadriel do Mordor":
        console.log(`${this.nomePersonagem} entra no modo trevoso e solta ${this.habilidade} enquanto grita: "VOCÊ TERIA UM SENHOR TERRÍVEL!"`);
        break;
    case "Sauron":
        console.log(`${this.nomePersonagem} só dá risada maligna e equipa o Olho Flamejante`);
        break;
    default:
        console.log(`${this.nomePersonagem} não tem habilidade especial definida...`);
        break;
}
}
}
