import { VerificarHabilidade } from "./Interface";
import { Personagem } from "./InfoPersonagem";

export class ClasseOculta extends Personagem implements VerificarHabilidade {
    constructor(
        NomeItem: string,
        QuantidadeItens: number,
        DanoItem: number,
        HabilidadeOculta: string,
        VidaPersonagem: number,
        nomePersonagem: string,
        habilidade: string
    ) {
        super(NomeItem, QuantidadeItens, DanoItem, HabilidadeOculta, VidaPersonagem, nomePersonagem, habilidade);
    }

    VerificarHabilidade(): void {
        if (this.nomePersonagem === "Gadoff") {
            const EquipamentoSecreto1 = "RPG7"; 
            const EquipamentoSecreto2 = "12";
            const EquipamentoSecreto3 = "Bomba Atômica";
            console.log(
                `Personagem ${this.nomePersonagem} usa sua habilidade especial: ${EquipamentoSecreto1}, ${EquipamentoSecreto2} ou ${EquipamentoSecreto3}!`
            );
        } else if (this.nomePersonagem === "Galadriel") {
            const EquipamentoSecreto4 = "Brilho Apagado";
            const EquipamentoSecreto5 = "Chinelo de Valinor";
            console.log(
                `Personagem ${this.nomePersonagem} usa sua habilidade especial: ${EquipamentoSecreto4} e ${EquipamentoSecreto5}`
            );
        } else if (this.nomePersonagem === "Sauron") {
            const EquipamentoSecreto6 = "Wave do Void - Orcs Infinitos";
            const EquipamentoSecreto7 = "Ressaca de Mordor";
            const EquipamentoSecreto8 = "Mão do Admin";
            console.log(
                `Personagem ${this.nomePersonagem} usa sua habilidade especial: ${EquipamentoSecreto6}, ${EquipamentoSecreto7}, ${EquipamentoSecreto8}`
            );
        } else {
            console.log(`Personagem ${this.nomePersonagem} ainda não desbloqueou habilidades secretas.`);
        }
    }
}
