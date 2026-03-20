interface VerificarNave {
    Classenave(): void;
    TipoArmaNave(): void;
    PropulcaoNave(): void;
    BlindagemMax(escudo: number): void;
    HPMax(): void;
}

abstract class Nave implements VerificarNave {
    constructor(
        public TipoNave: string,
        public propulcao: string,
        public DanoMax: number,
        public VelocidadeBase: number,
        public TipoArma: string,
        public TipoProtecao: string,
        public vidaMax: number
    ) {}

    Classenave(): void {}
    TipoArmaNave(): void {}
    PropulcaoNave(): void {}
    BlindagemMax(escudo: number): void {}
    HPMax(): void {}
}

class ConfederalForce extends Nave {
    Classenave(): void {
        console.log(`🛰️ Classe: ${this.TipoNave} | Arma: ${this.TipoArma} | Proteção: ${this.TipoProtecao} | Dano: ${this.DanoMax}`);
    }

    TipoArmaNave(): void {
        switch (this.TipoArma) {
            case "Torpedo":
                if (this.TipoProtecao === "escudo") {
                    const danoAumentado = this.DanoMax * 1.5;
                    console.log(`💣 Dano aumentado contra escudos! ${danoAumentado}`);
                } else {
                    console.log(`Torpedo normal — sem bônus.`);
                }
                break;
            case "Laser":
                console.log(`🔫 Laser ignora parte dos escudos! Dano: ${this.DanoMax * 1.25}`);
                break;
            case "Cinetico":
                console.log(`🧱 Dano cinético: eficaz contra blindagem. Dano: ${this.DanoMax * 1.3}`);
                break;
            default:
                console.log("❌ Tipo de arma desconhecido.");
        }
    }

    PropulcaoNave(): void {
        console.log(`⚙️ Propulsão: ${this.propulcao} | Velocidade Base: ${this.VelocidadeBase}`);
    }

    BlindagemMax(escudo: number): void {
        if (this.TipoProtecao === "escudo") {
            escudo -= 100;
            console.log(`🛡️ Escudo absorveu dano! Restante: ${escudo}`);
        } else if (this.TipoProtecao === "blindagem") {
            this.vidaMax -= 100;
            console.log(`💥 Blindagem atingida! HP: ${this.vidaMax}`);
        } else if (this.TipoProtecao === "sem defesa") {
            this.vidaMax -= 10000;
            console.log(`☠️ Nave destruída! HP: ${this.vidaMax}`);
        }
    }

    HPMax(): void {
        const porcentagem = (this.vidaMax / 2000) * 100;

        if (this.vidaMax <= 0) console.log(`💀 Nave destruída!`);
        else if (porcentagem <= 10) console.log(`🚨 Vida abaixo de 10%! HP: ${this.vidaMax}`);
        else if (porcentagem <= 25) console.log(`⚠️ Vida abaixo de 25%! HP: ${this.vidaMax}`);
        else if (porcentagem <= 50) console.log(`🟠 Vida abaixo de 50%! HP: ${this.vidaMax}`);
        else console.log(`🟢 Integridade boa! HP: ${this.vidaMax}`);
    }
}

// ==============================
// 🚀 TESTE
// ==============================
const n1 = new ConfederalForce("Cruzador", "Dobra Espacial", 2000, 200, "Torpedo", "escudo", 2000);
n1.Classenave();
n1.PropulcaoNave();
n1.TipoArmaNave();
n1.BlindagemMax(100);
n1.HPMax();
