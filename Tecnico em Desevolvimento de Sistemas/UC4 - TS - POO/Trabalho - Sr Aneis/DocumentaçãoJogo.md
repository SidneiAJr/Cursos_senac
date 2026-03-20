# 💍🧙Documentação do Jogo do Sr dos Aneis - POO🧙

- Este projeto é um RPG interativo baseado no universo de Senhor dos Anéis, feito em TypeScript.
- O jogador pode explorar páginas narrativas, batalhar contra inimigos, gerenciar inventário e fazer escolhas que alteram a história.

## Como Executar esse Jogo
### Passo 1 - Instalar dependências
npm install

### Passo 2 - Entrar na pasta src
cd src

### Passo 3 - Executar o jogo
ts-node menu.ts

** Observação:**
- Use ts-node menu.ts -> Precisa estar dentro da SRC


## 📁Arquivo Interfaces

- Neles temos as Interfaces responsaveis pelas Verificações

## 📁No arquivo InfoPersonagem

- Temos as Informações do Personagem (Class Personagem), Logo eu fiz o Arquivo com Nome InfoPersonagem porque tava dando conflito

## 📁Arquivo Paginabase

- Paginas de Base para Narrativa e para a pagina de Batalha

## 📁Arquivo de Inventario 

- Inventario Global para o Jogador e não os herois (Ex:Gandoff)

## 📁 Arquivo HabilidadePersonagem

- Habilidade dos Personagens

## 📁 Arquivo ClasseOculta para casos Extremos 

- Habilidade Oculta dos personagens (Ex:gGandolf)

## 📁Arquivo de Menu(opções)

- São 7 Funções para Cada Opção.

**Exemplo:**

- Opção 1: Historia

- Opção 2: Habilidade

- Opção 3: Personagem

- Opção 4: Batalhas

- Opção 5: Escolhas

- Opção 6: Inventario

**Motivos de porque usei um arquivo menu:**

- 1º Para o usuario poder interagir mesmo que somente pelo console.

- 2º Para poder ter opções de escolhas do jogo.

- 3º Para manter o código modular e organizado.

- 4º Para permitir expansão futura.

- 5º Para dar meia imersão ao Jogo.

- 6º Fiz varias funções para ficar mais organizado, e melhor o codigo total de linhas 350.

## 🎮 Mecânicas do Jogo

- Narrativa: Jogador percorre páginas com história (inspiradas em Tolkien, mas com humor e referências criativas).

- Personagens: Cada herói/vilão tem vida, itens e habilidades próprias.

- Batalhas: Sistema básico de luta simulada em texto.

- Inventário: Jogador pode adicionar/remover/ver itens.

- Escolhas: Caminhos alternativos mudam a progressão da história.

