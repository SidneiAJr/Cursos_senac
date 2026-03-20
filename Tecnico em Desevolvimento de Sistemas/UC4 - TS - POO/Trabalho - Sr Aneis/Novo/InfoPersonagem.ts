import { VerificaPersonagem } from "./Interface";
import { Inventario } from "./inventario";

export class Personagem implements VerificaPersonagem {
    public inventario: Inventario; 

    constructor(
        public NomeItem: string,
        public QuantidadeItens: number,
        public DanoItem: number,
        public HabilidadeOculta: string,
        public VidaPersonagem: number,
        public nomePersonagem: string,
        public habilidade: string
    ) {
        this.inventario = new Inventario(10, []); // 👈 cada personagem nasce com inventário vazio
    }

    VerificarStatusPersonagem(): void {
        if (this.VidaPersonagem <= 20) {
            const habilidade = "Mão Nuclear - Mobs ao Redor são Varidos!";
            console.log(`Vida do Personagem muito baixa ${this.VidaPersonagem} Passiva Oculta Ativa ${habilidade}`);
        } else if (this.VidaPersonagem <= 10) {
            console.log(`Vida do Personagem baixa ${this.VidaPersonagem} Corre To sem Mana`);
        }
    }

    VerificarItens() {
        if (this.NomeItem === "Cajado") {
            console.log(`Personagem ${this.nomePersonagem} Usa Chuva de Meteoro`);
        } else if (this.NomeItem === "Espada") {
            console.log(`Personagem ${this.nomePersonagem} Correeeeeee!!!`);
        } else {
            console.log(`Personagem ${this.nomePersonagem} olha pros itens... "rapaiz, será que isso funciona? Olha Isso Brilha??"`);
        }
    }
}
