// ============================================
// 📦 IMPORTAÇÃO DOS DECORATORS DO TYPEORM
// ============================================

// Entity → define que esta classe é uma tabela no banco
// PrimaryGeneratedColumn → chave primária auto-incrementável
// Column → define uma coluna na tabela
// ManyToOne → relacionamento muitos-para-um (vários jogadores para uma seleção)
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

// ============================================
// 📦 IMPORTAÇÃO DA ENTIDADE RELACIONADA
// ============================================

// Importa a entidade Selecao para definir o relacionamento
// Cada jogador pertence a UMA seleção
import { Selecao } from "./Selecao";

// ============================================
// 🏷️ ENTIDADE JOGADOR
// ============================================

// @Entity("Jogador") → define o nome da tabela no banco como "Jogador"
// O TypeORM vai criar uma tabela chamada Jogador com as colunas definidas abaixo
@Entity("Jogador")
export class Jogador {
    // ============================================
    // 🔑 CHAVE PRIMÁRIA
    // ============================================
    // @PrimaryGeneratedColumn() → cria uma coluna id que é auto-incrementável
    // O TypeORM gera o valor automaticamente quando um novo registro é inserido
    @PrimaryGeneratedColumn()
    id!: number;

    // ============================================
    // 📝 COLUNA: NOME
    // ============================================
    // type: "varchar" → tipo de dado string no banco
    // length: 50 → tamanho máximo de 50 caracteres
    // nullable: false → campo obrigatório (NOT NULL)
    // unique: true → valor único (não pode ter dois jogadores com o mesmo nome)
    @Column({ type: "varchar", length: 50, nullable: false, unique: true })
    nome: string;

    // ============================================
    // 🔢 COLUNA: NUMEROCAMISA
    // ============================================
    // type: "int" → número inteiro
    // nullable: false → campo obrigatório
    // 
    // ⚠️ NOTA: Esse campo NÃO tem unique: true
    // Porque dois jogadores de seleções diferentes podem ter o mesmo número
    @Column({ type: "int", nullable: false })
    numeroCamisa: number;

    // ============================================
    // 📌 COLUNA: POSICAO
    // ============================================
    // type: "varchar" → string
    // length: 150 → até 150 caracteres
    // nullable: false → obrigatório
    // 
    // ⚠️ NOTA: Esse campo NÃO tem unique: true
    // Porque vários jogadores podem ter a mesma posição (ex: vários atacantes)
    @Column({ type: "varchar", length: 150, nullable: false })
    posicao: string;

    // ============================================
    // 🎂 COLUNA: IDADE
    // ============================================
    // type: "int" → número inteiro
    // nullable: false → obrigatório
    @Column({ type: "int", nullable: false })
    idade: number;

    // ============================================
    // 📏 COLUNA: ALTURA
    // ============================================
    // type: "decimal" → número decimal
    // precision: 3 → total de 3 dígitos (ex: 1.75)
    // scale: 2 → 2 casas decimais (ex: .75)
    // nullable: false → obrigatório
    // 
    // Exemplos: 1.75, 1.82, 1.90
    // Não permite: 1.751 (3 casas decimais)
    @Column({ type: "decimal", precision: 3, scale: 2, nullable: false })
    altura!: number;

    // ============================================
    // ⚖️ COLUNA: PESO
    // ============================================
    // type: "decimal" → número decimal
    // precision: 3 → total de 3 dígitos (ex: 68.5)
    // scale: 2 → 2 casas decimais (ex: .50)
    // nullable: false → obrigatório
    // 
    // Exemplos: 68.50, 75.00, 82.30
    @Column({ type: "decimal", precision: 3, scale: 2, nullable: false })
    peso!: number;

    // ============================================
    // ⚽ COLUNA: GOLS
    // ============================================
    // type: "int" → número inteiro
    // nullable: false → obrigatório
    @Column({ type: "int", nullable: false })
    gols: number;

    // ============================================
    // 🔗 RELACIONAMENTO: MUITOS-para-UM
    // ============================================
    // @ManyToOne(() => Selecao, (selecao) => selecao.jogadores)
    // 
    // Isso cria uma chave estrangeira (FK) na tabela Jogador
    // que referencia a tabela Selecao.
    // 
    // Significado: "Muitos jogadores pertencem a UMA seleção"
    // 
    // Exemplo: Neymar, Vini Jr e Casemiro → todos pertencem à Seleção Brasileira
    @ManyToOne(() => Selecao, (selecao) => selecao.jogadores)
    selecao: Selecao;
}
