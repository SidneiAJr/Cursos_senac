// ============================================
// 📦 IMPORTAÇÃO DOS DECORATORS DO TYPEORM
// ============================================

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

// ============================================
// 📦 IMPORTAÇÃO DA ENTIDADE RELACIONADA
// ============================================

// Importa a entidade Jogador para definir o relacionamento
// Uma seleção pode ter MUITOS jogadores
import { Jogador } from "./Jogador";

// ============================================
// 🏷️ ENTIDADE SELECAO
// ============================================

// @Entity("Selecao") → define o nome da tabela no banco como "Selecao"
@Entity("Selecao")
export class Selecao {
    // ============================================
    // 🔑 CHAVE PRIMÁRIA
    // ============================================
    @PrimaryGeneratedColumn()
    id!: number;

    // ============================================
    // 📝 COLUNA: NOME
    // ============================================
    // type: "varchar" → string
    // length: 50 → até 50 caracteres
    // nullable: false → obrigatório
    // unique: true → único (não pode ter duas seleções com o mesmo nome)
    // 
    // Exemplo: "Seleção Brasileira"
    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    nome: string;

    // ============================================
    // 🌍 COLUNA: PAIS
    // ============================================
    // type: "varchar" → string
    // length: 50 → até 50 caracteres
    // nullable: false → obrigatório
    // unique: true → único (não pode ter duas seleções do mesmo país)
    // 
    // Exemplo: "Brasil"
    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    pais: string;

    // ============================================
    // 👨‍🏫 COLUNA: TECNICO
    // ============================================
    // type: "varchar" → string
    // length: 150 → até 150 caracteres
    // nullable: false → obrigatório
    // unique: true → único (um técnico não pode comandar duas seleções)
    // 
    // Exemplo: "Tite"
    @Column({ type: "varchar", length: 150, nullable: false, unique: true })
    tecnico: string;

    // ============================================
    // 📊 COLUNA: RANKINGFIFA
    // ============================================
    // type: "int" → número inteiro
    // nullable: false → obrigatório
    // 
    // Exemplo: 1 (primeiro lugar no ranking)
    @Column({ type: "int", nullable: false })
    rankingFifa!: number;

    // ============================================
    // 📅 COLUNA: ANOFUNDACAO
    // ============================================
    // type: "date" → tipo data (apenas data, sem hora)
    // nullable: true → opcional (pode ser null)
    // 
    // Exemplo: 1914-06-08
    @Column({ type: "date", nullable: true })
    anoFundacao?: Date;

    // ============================================
    // 🔗 RELACIONAMENTO: UM-para-MUITOS
    // ============================================
    // @OneToMany(() => Jogador, (jogador) => jogador.selecao)
    // 
    // Isso cria a relação inversa da FK na tabela Jogador.
    // 
    // Significado: "UMA seleção pode ter MUITOS jogadores"
    // 
    // Exemplo: Seleção Brasileira → Neymar, Vini Jr, Casemiro...
    // 
    // O TypeORM usa isso para fazer JOINs quando você busca uma seleção
    // com seus jogadores (relations: ['jogadores'])
    @OneToMany(() => Jogador, (jogador) => jogador.selecao)
    jogadores: Jogador[];
}
