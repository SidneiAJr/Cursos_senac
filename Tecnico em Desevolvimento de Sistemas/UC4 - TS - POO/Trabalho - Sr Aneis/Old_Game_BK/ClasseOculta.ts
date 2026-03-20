import { VerificarHabilidade } from "./Interface";
import {Personagem} from "./InfoPersonagem";


export class ClasseOculta extends Personagem implements VerificarHabilidade{
    VerificarHabilidade(): void {
        if(this.nomePersonagem==="Gadoff"){
            const EquipamentoSecreto1 = "RPG7"; 
            const EquipamentoSecreto2 = "12";
            const EquipamentoSecreto3 = "BombaAtomica";
            console.log(`Personagem ${this.nomePersonagem} Usa Sua habilidade Especial ${EquipamentoSecreto1} e ${EquipamentoSecreto2} Seguinte Meu Parceiro ou tu morre na Magia ou Morre na Bala ou Melhor ${EquipamentoSecreto3} Queimado`);
        }else if(this.nomePersonagem==="Galadriel"){
            const EquipamentoSecreto4 = "Brilho Apagado";
            const EquipamentoSecreto5 = "Chinelo de Valinor";
            console.log(`Personagem ${this.nomePersonagem} Usa Sua habilidade Especial ${EquipamentoSecreto4}e ${EquipamentoSecreto5}`);
        }else if(this.nomePersonagem==="Sauron"){
            const EquipamentoSecreto6 = "Wave do Void - Orcs Infinitos";
            const EquipamentoSecreto7 = "Ressaca de Mordor";
            const EquipamentoSecreto8 = "Mão do Admin";
            console.log(`Personagem ${this.nomePersonagem} Usa Sua habilidade Especial ${EquipamentoSecreto6}, ${EquipamentoSecreto7},${EquipamentoSecreto8}`);
        }else{
            console.log("HM?")
        }
    }
}
