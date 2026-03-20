interface VerificarVida {
    VerificarCalibre(): void;
    VerificarArmadura(): void;
    PaisTank(): void;
    TierTank(): void;
    Atacar(aliado: Tank): void;
    Falas(): void;
    Artilharia(): void;
    Inimigo(aliado: Tank): void;
}

abstract class TankStatus implements VerificarVida {
    constructor(
        public NomeTank: string,
        public calibre: number,
        public blindagem: number,
        public municao: number,
        public vidaMax: number,
        public dano: number,
        public penetracaoMunicao: number,
        public TipoMunicao: string,
        public tierTank: number,
        public paisTank: string,
        public blindagemSTatus: boolean
    ) {}

    VerificarArmadura(): void {}
    VerificarCalibre(): void {}
    Verificarmunicao(): void {}
    VerificarVida(): void {}
    PaisTank(): void {}
    TierTank(): void {}
    Atacar(aliado: Tank): void {}
    Artilharia(): void {}
    Falas(): void {}
    Inimigo(aliado: Tank): void {}
}

class Tank extends TankStatus implements VerificarVida {
    VerificarArmadura(): void {
        if (this.blindagem <= 50) {
            console.log(`Chance de Penetração 75%`);
        } else if (this.blindagem <= 25) {
            console.log(`Chance de Penetração 25%`);
        } else {
            console.log(`Chance de Penetração 0%`);
        }
    }

    VerificarCalibre(): void {
        if (this.calibre <= 88) {
            this.dano += 90;
            this.vidaMax -= 20;
            console.log(`${this.NomeTank} Atingiu e causou Dano e ${this.dano} Vida Perdida ${this.vidaMax} Calibre ${this.calibre}`);
        } else if (this.calibre <= 128) {
            this.dano += 190;
            this.vidaMax -= 100;
            console.log(`Dano Causado ${this.dano} Vida Perdida ${this.vidaMax} Calibre ${this.calibre}`);
        } else {
            this.dano += 20;
            this.vidaMax -= 20;
            console.log(`Dano Causado ${this.dano} Vida Perdida ${this.vidaMax} Calibre ${this.calibre}`);
        }
    }

    Verificarmunicao(): void {
        this.municao -= 1;
        console.log(`Munição restante: ${this.municao}`);

        switch (this.TipoMunicao) {
            case "AP":
                console.log("Municao Selecionada: AP");
                break;
            case "HE":
                console.log("Municao Selecionada: HE");
                break;
            case "APHEBC":
                console.log("Municao Selecionada: APHEBC");
                break;
            case "APDS":
                console.log("Municao Selecionada: APDS");
                break;
            default:
                console.log("Selecione a munição correta");
                break;
        }
    }

    VerificarVida(): void {
        if (this.vidaMax < 100) {
            this.vidaMax = 100;
            console.log(`Vida Maxima ${this.vidaMax}`);
        } else {
            console.log(`Vida Maxima ${this.vidaMax}`);
        }
    }

    TierTank(): void {
        console.log(`Tier do Tank Selecionado ${this.tierTank}`);
    }

    PaisTank(): void {
        if (this.paisTank=="Alemanha"|| "Reino Unido"|| "USA"|| "Franca"|| "ITA") {
            console.log(`Pais Selecionado ${this.paisTank}`);
        } else {
            console.log(`Arvore em construção!`);
        }
    }

    Atacar(aliado: Tank): void {
        if (this.penetracaoMunicao >= aliado.blindagem) {
            console.log("Ataque bem-sucedido! Módulos inimigos danificados.");
            aliado.vidaMax -= this.dano; // Causa dano no tanque aliado
            console.log(`Vida do tanque aliado após o ataque: ${aliado.vidaMax}`);
        } else {
            console.log(`Blindagem do inimigo (${aliado.blindagem}mm) é maior que sua penetração (${this.penetracaoMunicao}mm). Ataque falhou.`);
        }
    }

    Artilharia(): void {
        const tempopartida = 500;
        if (tempopartida >= 500 || this.vidaMax <= 50) {
            console.log("Artilharia Disponível");
        } else if (tempopartida >= 1000 || this.vidaMax <= 25) {
            console.log("Aviso! Artilharia Nuclear Disponível");
        }
    }

    Falas(): void {
        if (this.blindagemSTatus) {
            console.log("Aviso! Fomos Atingidos sem Dano");
        } else {
            console.log("Aviso! Blindagem Penetrada!");
        }
    }

    Inimigo(aliado: Tank): void {
        if (this.vidaMax <= 25) {
            console.log("Inimigo em perigo! Tentando aumentar blindagem...");
            this.VerificarArmadura(); // Tenta melhorar a blindagem
        } else if (this.municao > 0 && this.penetracaoMunicao >= aliado.blindagem) {
            console.log("Inimigo ataca com força total!");
            this.Atacar(aliado); // O inimigo ataca o tanque aliado
        } else if (this.municao <= 0) {
            console.log("Inimigo sem munição, recarregando!");
            this.Verificarmunicao(); // Tenta recarregar
        } else {
            const acao = Math.floor(Math.random() * 3);
            switch (acao) {
                case 0:
                    console.log("Inimigo usa artilharia!");
                    this.Artilharia();
                    break;
                case 1:
                    console.log("Inimigo tenta verificar seu calibre.");
                    this.VerificarCalibre();
                    break;
                case 2:
                    console.log("Inimigo verifica a blindagem.");
                    this.VerificarArmadura();
                    break;
                default:
                    console.log("Inimigo aguardando...");
                    break;
            }
        }
    }
}
console.log("======================================= Luta 1 =============================")
// Teste de interações entre tanques
const tank1 = new Tank("Tiger II", 88, 600, 10, 100, 100, 100, "AP", 6, "Alemanha", true);
tank1.VerificarArmadura();
tank1.VerificarCalibre();
tank1.VerificarVida();
tank1.Verificarmunicao();
tank1.PaisTank();
tank1.TierTank();
tank1.Atacar(tank1); // Tank não pode atacar a si mesmo, trocar isso na lógica
tank1.Artilharia();
tank1.Falas();
tank1.Inimigo(tank1); // Tank atacando a si mesmo, corrigir isso para atacar outro tanque
console.log("======================================= Luta 1 =============================")

const inimigo1 = new Tank("Sherman", 75, 35, 20, 300, 35, 75, "AP", 5, "USA", true);
inimigo1.VerificarArmadura();
inimigo1.VerificarCalibre();
inimigo1.VerificarVida();
inimigo1.Verificarmunicao();
inimigo1.PaisTank();
inimigo1.TierTank();
inimigo1.Atacar(tank1); // Inimigo atacando o tanque aliado
inimigo1.Artilharia();
inimigo1.Falas();
inimigo1.Inimigo(tank1); // Inimigo executando ação contra o tanque aliado
console.log("======================================= Luta 1 =============================")

console.log("======================================= Luta 2 =============================")
// Teste de interações entre tanques
const tank2 = new Tank("Jagtiger", 128, 600, 10, 100, 100, 100, "AP", 6.6, "Alemanha", true);
tank2.VerificarArmadura();
tank2.VerificarCalibre();
tank2.VerificarVida();
tank2.Verificarmunicao();
tank2.PaisTank();
tank2.TierTank();
tank2.Atacar(tank1); // Tank não pode atacar a si mesmo, trocar isso na lógica
tank2.Artilharia();
tank2.Falas();
tank2.Inimigo(tank1); // Tank atacando a si mesmo, corrigir isso para atacar outro tanque
console.log("======================================= Luta 2 =============================")

const inimigo2 = new Tank("Sherman Firefly", 76.2, 35, 20, 450, 35, 75, "APDS", 5, "Reino Unido", true);
inimigo2.VerificarArmadura();
inimigo2.VerificarCalibre();
inimigo2.VerificarVida();
inimigo2.Verificarmunicao();
inimigo2.PaisTank();
inimigo2.TierTank();
inimigo2.Atacar(tank1); // Inimigo atacando o tanque aliado
inimigo2.Artilharia();
inimigo2.Falas();
inimigo2.Inimigo(tank1); // Inimigo executando ação contra o tanque aliado
console.log("======================================= Luta 2 =============================")
