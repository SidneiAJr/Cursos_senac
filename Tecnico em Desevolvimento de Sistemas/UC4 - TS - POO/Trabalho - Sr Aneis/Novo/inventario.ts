export class Inventario {
    public capacidade: number;   // capacidade máxima de itens
    private itens: string[];      // lista de itens

    constructor(capacidade: number, itensIniciais: string[] = []) {
        this.capacidade = capacidade;
        this.itens = itensIniciais;
    }

    // Adiciona item
    AdicionarItem(item: string) {
    if (this.itens.length >= this.capacidade) {
        console.log("Inventário cheio! Não é possível adicionar mais itens.");
        return;
    }
    this.itens.push(item);
    console.log(`Item "${item}" adicionado ao inventário.`);
}


    // Remove item
    RemoverItem(item: string) {
        const index = this.itens.indexOf(item);
        if (index !== -1) {
            this.itens.splice(index, 1);
            console.log(`Item "${item}" removido do inventário.`);
        } else {
            console.log(`Item "${item}" não encontrado no inventário.`);
        }
    }

    // Mostra todos os itens
    VerificarItens() {
        if (this.itens.length >= this.capacidade) {
            console.log(`Inventario Contem os seguintes itens ${this.itens}`);
        }else{
            const espacoRestante = this.capacidade - this.itens.length;
            console.log(`Cabe Mais O Bouseiro Carrega ${espacoRestante}`);
        }
        
    }
}
