import * as promptSync from "prompt-sync";
const prompt = promptSync();

import { Personagem } from "./InfoPersonagem";
import { HabilidadePersongem } from "./Habilidade";
import { PaginaNarrativa } from "./PaginaNarrativa";
import { PaginaBatalha } from "./Paginabatalha";
import { ClasseOculta } from "./ClasseOculta";
import {Inventario} from "./inventario";

// Variavel Global 
const paginasNarrativas: PaginaNarrativa[] = [
    new PaginaNarrativa(1, "1 - Você acorda em uma caverna escura... \n O ar é úmido e pesado, e você sente o frio das pedras sob o corpo. Aos poucos, seus olhos se acostumam com a penumbra. À esquerda, há um pequeno lago cristalino, e no fundo dele algo brilha intensamente, como se fosse feito de ouro. À frente, uma saída estreita deixa escapar a luz do sol, convidando-o para fora. À direita, um túnel estreito se estende para as profundezas, coberto de musgo e ecoando um som estranho."),// ESCREVER HISTORIA
    new PaginaNarrativa(2, "2 - O laguinho misterioso. \n A água é tão límpida que você consegue ver sua própria imagem refletida, mas o brilho dourado no fundo chama sua atenção com mais força. Ondulações leves se espalham, como se algo lá embaixo o esperasse.Um vento frio sopra pela caverna, quase como um aviso para não se arriscar."),// ESCREVER HISTORIA
    new PaginaNarrativa(3, "O anel dourado \n Você mergulha e sente a água gelada cortar sua pele. Tocando o fundo, seus dedos encontram um objeto circular e pesado. É um anel dourado, brilhante e misterioso. Ao segurá-lo, uma estranha energia percorre seu corpo, como se o próprio destino estivesse agora em suas mãos. Você sobe de volta à superfície, respira com dificuldade e decide retornar ao centro da caverna."),// ESCREVER HISTORIA
    new PaginaNarrativa(4, "O beco sem saída \n O túnel estreito leva você até um corredor apertado, mas ele termina em um paredão coberto de fungos e raízes secas. Não há saída por aqui. O silêncio é perturbador, e algo parece observá-lo nas sombras. Sem alternativas, você volta para onde começou."),// ESCREVER HISTORIA
    new PaginaNarrativa(5, "A floresta misteriosa \n Saindo da caverna, a luz do sol o cega por alguns instantes. Logo, você percebe estar diante de uma vasta floresta antiga, onde as árvores se erguem como gigantes milenares. O canto dos pássaros mistura-se com estalos de galhos quebrando ao longe. Há algo mágico no ar, mas também um perigo que você não sabe identificar."),// ESCREVER HISTORIA
    new PaginaNarrativa(6, "A bifurcação na floresta \n O caminho à sua frente se divide em duas trilhas. A da esquerda é estreita, com pegadas pequenas que lembram passos de anões. A da direita parece mais aberta, mas há sinais de fogo nas árvores, como se algo perigoso tivesse passado por ali."),// ESCREVER HISTORIA
    new PaginaNarrativa(7, "O encontro com os anões \n Seguindo pela trilha estreita, você encontra um grupo de anões reunidos em torno de uma fogueira. Suas barbas longas e machados reluzentes demonstram experiência em batalha. Um deles se aproxima e diz: — Estrangeiro, estamos em tempos sombrios. O mago Gandalf precisa de ajuda, mas não podemos ir até ele. Leve esta Pulseira da Morfação e entregue-a em suas mãos. Você aceita o artefato, sentindo seu peso mágico pulsar como um coração vivo."),// ESCREVER HISTORIA
    new PaginaNarrativa(8, "A batalha dos magos \n No alto de uma colina, você vê Gandalf enfrentando Saruman. O chão treme a cada feitiço lançado, e as árvores ao redor ardem em chamas azuis. Gandalf parece cansado, prestes a ser derrotado. Você corre até ele e entrega a Pulseira da Morfação. Com um grito poderoso, ele ergue o braço: — É HORA DE MORFAR! Em um clarão, Gandalf se transforma no Sidtopiazord, um mecha colossal envolto em magia."),// ESCREVER HISTORIA
    new PaginaNarrativa(9, "A queda de Saruman \n O Mecha Gandalf ergue seu cajado metálico e invoca sua habilidade mais devastadora: Sentinela Nuclear. Uma esfera de luz incandescente se forma e explode em um clarão que desintegra Saruman, reduzindo-o a cinzas no vento.O silêncio recai sobre a floresta. Você respira fundo, sabendo que testemunhou algo impossível de esquecer."),// ESCREVER HISTORIA
    new PaginaNarrativa(10, "A jornada a Mordor \n Gandalf abre a escotilha do mecha e sorri para você: — Suba, pequeno aventureiro. Juntos, ainda temos uma guerra a vencer. Com um salto, você entra na cabine do Sidtopiazord, sentindo o poder mágico percorrer suas veias. O caminho de Mordor se estende diante de vocês, e a sombra de Sauron cresce no horizonte."),// ESCREVER HISTORIA
    new PaginaNarrativa(11, "O confronto final em Mordor \n As terras de Mordor se abrem diante de seus olhos: um deserto de cinzas, rios de lava e o Olho Flamejante de Sauron brilhando no alto da torre de Barad-dûr. De repente, o chão treme. O próprio Sauron surge, colossal, envolto em chamas negras, empunhando uma espada do tamanho de uma montanha.A batalha final começou. O destino da Terra-Média está em suas mãos."),// ESCREVER HISTORIA
    new PaginaNarrativa(12, "Após a vitória esmagadora de Sidtopiazord\n A fumaça da batalha contra Sauron ainda cobre os céus, mas a sensação de triunfo é apenas momentânea. Gandalf, de dentro do mecha, vira-se para você com um olhar sério: — A luta não acabou, jovem. Enquanto o Um Anel existir, o mal sempre encontrará um caminho para retornar.Vocês seguem juntos rumo às Montanhas da Perdição, o único lugar capaz de destruir para sempre o artefato maligno. O ar fica cada vez mais quente, o solo rachado exala fogo, e rios de lava iluminam o horizonte em vermelho intenso.O destino do mundo repousa agora em suas mãos."),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(0, "'"),// ESCREVER HISTORIA
    new PaginaNarrativa(1, "Você acorda em uma caverna escura..."),
    new PaginaNarrativa(2, "Ao sair da caverna, vê uma floresta misteriosa."),
    new PaginaNarrativa(3, "Lembra de Gandoff com seu Cajado e da risada."),
    new PaginaNarrativa(4, "Depois de andar pela floresta, vê uns anões caminhando e pergunta a eles onde está o resto do grupo."),
    new PaginaNarrativa(5, "Os anões perguntam se estou procurando Gandoff. Digo a eles que sim."),
    new PaginaNarrativa(6, "Vejo um brilho no horizonte. Gandoff havia invocado o Mecha Gandoff que usou sua magia especial Sentinela Nuclear."),
    new PaginaNarrativa(7, "Me pergunto o que é aquilo. Os anões ficam olhando, pensando o que é aquilo."),
    new PaginaNarrativa(8, "Os anões falam: 'Aquele velho chamou aquela coisa de novo!'"),
    new PaginaNarrativa(9, "Os anões dizem: 'Última vez que ele chamou aquela coisa, explodiu a floresta e destruiu o castelo.'"),
    new PaginaNarrativa(10, "Os anões contam a história de como ele enfrentou seu tutor com o Mecha Gandoff."),
    new PaginaNarrativa(11, "Gandoff descobre um artefato milenar, uma magia arcana suprema e um grimório antigo. Também encontra algumas coisas."),
    new PaginaNarrativa(12, "Tempo depois, Gandoff invoca o Mecha Gandoff que luta com Saruman até seu tutor ficar cansado. Então chama o Nuclear Strike."),
    new PaginaNarrativa(13, "Gandoff sai de perto e seu tutor é incinerado. Ele ri e diz: 'Essa magia é diferenciada.'")
];

// Função de MENU PRINCIPAL
function Historia() {
    let opcao = Number(prompt("\n=== Menu Principal ===\n1 - História\n2 - Personagens\n3 - Habilidades Ocultas\n4 - Batalha\n5 - Escolhas Narrativas\n6 - Sair\nEscolha: "));

    while (opcao !== 7) {
        switch (opcao) {
            case 1:
                pagina();
                break;
            case 2:
                Personagem2();
                break;
            case 3:
                Hab();
                break;
            case 4:
                Bat();
                break;
            case 5:
                escolhas();
                break;
            case 6:
                Inv();
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }

        opcao = Number(prompt("\n=== Menu Principal ===\n1 - História\n2 - Personagens\n3 - Habilidades Ocultas\n4 - Batalha\n5 - Escolhas Narrativas\n6 - Sair\nEscolha: "));
    }
}
Historia();

// Função de MOSTRAR TODAS AS PÁGINAS
function pagina() {
    for (const pagina of paginasNarrativas) {
        pagina.Verificarpagina();
    }
}

// Função de HABILIDADES
function Hab() {
    const gandalf = new HabilidadePersongem("Cajado", 1, 50, "Mão Oculta", 25, "Gandalf", "Dragão de Fogo");
    const aragorn = new HabilidadePersongem("Espada", 1, 40, "Fúria Élfica", 35, "Aragorn", "Exército dos Homens");
    const frodo = new HabilidadePersongem("Adaga do Portador", 1, 15, "Coragem do Anel", 25, "Frodo", "Determinação");
    const galadriel = new HabilidadePersongem("Anel de Nenya", 1, 45, "Luz de Valinor", 40, "Galadriel", "Aura de Proteção");

    gandalf.VerificarStatusPersonagem();
    aragorn.VerificarStatusPersonagem();
    frodo.VerificarStatusPersonagem();

    gandalf.VerificarItens();
    aragorn.VerificarItens();

    gandalf.VerificarHabilidade();
    aragorn.VerificarHabilidade();
    frodo.VerificarHabilidade();
    galadriel.VerificarHabilidade();
}

// Função de PERSONAGENS OCULTOS
function Personagem2() {
    const gadoff = new ClasseOculta("Cajado", 1, 100, "Passiva Maluca", 15, "Gadoff", "Explosão Final");
    const sauron = new ClasseOculta("Cálice Sombrio", 1, 666, "Explosão Cósmica Sombria", 9999, "Sauron", "Sussurro das Trevas");
    const galadriel = new ClasseOculta("Olhar do Vazio", 1, 700, "Explosão Cósmica Sombria", 99999, "Galadriel", "Brilho Eterno");

    gadoff.VerificarStatusPersonagem();
    gadoff.VerificarItens();
    gadoff.VerificarHabilidade();

    sauron.VerificarStatusPersonagem();
    sauron.VerificarItens();
    sauron.VerificarHabilidade();

    galadriel.VerificarStatusPersonagem();
    galadriel.VerificarItens();
    galadriel.VerificarHabilidade();
}

// Função de  BATALHAS
function Bat() {
    const heroi = new Personagem("Espada", 1, 10, "Fúria Oculta", 30, "Aragorn", "Espadada Fatal");
    const batalha1 = new PaginaBatalha(2, "Você entra em uma clareira escura...", "Troll Comum", 25, heroi);

    const heroi2 = new Personagem("Orbe do Infinito", 2, 10, "Fúria Oculta", 30, "Aragorn", "Espadada Fatal");
    const batalha2 = new PaginaBatalha(2, "Você entra em uma Floresta Oculta", "Anão Grande", 25, heroi2);

    const heroi3 = new Personagem("Cajado", 1, 10, "Magia de Fogo", 30, "Gandoff", "Cajado Supremo");
    const batalha3 = new PaginaBatalha(2, "Você entra em uma clareira escura...", "Troll da Montanha", 25, heroi3);

    const heroi4 = new Personagem("Cajado", 1, 10, "Magia de Fogo", 30, "Gandoff", "Mecha Gandoff");
    const batalha4 = new PaginaBatalha(2, "Gandoff luta contra Saruman", "Saruman", 25, heroi4);

    batalha1.Verificarpagina();
    console.log("=== Luta do Aragorn ===");
    batalha2.Verificarpagina();
    console.log("=== Luta do Gandoff ===");
    batalha3.Verificarpagina();
    console.log("=== Luta do Gandoff 2 vs Saruman ===");
    batalha4.Verificarpagina();
}

// Função de ESCOLHAS NARRATIVAS
function escolhas() {
    console.log("Você chegou na parte de escolhas da história. Escolha uma opção:");
    const escolha = Number(prompt("1 - Selecionar Página Manualmente\n2 - Sorteio Aleatório de Página\n3 - Ir direto para a Página 3\nEscolha: "));

    switch (escolha) {
        case 1:
            const numPagina = Number(prompt("Digite o número da página (1 a 50): "));
            const paginaEncontrada = paginasNarrativas.find(p => p.paginaNumero === numPagina);
            if (paginaEncontrada) {
                paginaEncontrada.Verificarpagina();
            } else {
                console.log("Página não encontrada.");
            }
            break;

        case 2:
            const paginaSorteada = paginasNarrativas[Math.floor(Math.random() * paginasNarrativas.length)];
            console.log(`Página sorteada: ${paginaSorteada.paginaNumero}`);
            paginaSorteada.Verificarpagina();
            break;

        case 3:
            const pagina3 = paginasNarrativas.find(p => p.paginaNumero === 3);
            if (pagina3) {
                pagina3.Verificarpagina();
            }
            break;

        default:
            console.log("Escolha inválida.");
            break;
    }
}

function Inv() {
    const inventario = new Inventario(0,[]);

    // Adicionando alguns itens iniciais ao inventário para testar
    inventario.AdicionarItem("Espada de Gandalf");
    inventario.AdicionarItem("Cajado de Aragorn");
    inventario.AdicionarItem("Anel de Galadriel");

    let escolha = Number(prompt("1 - Ver Inventário\n2 - Jogar Item Fora\n3 - Ver Inventário Total\nEscolha: "));

    while (escolha !== 0) {
        switch (escolha) {
            case 1:
                inventario.VerificarItens();
                break;

            case 2:
                const itemRemover = prompt("Digite o nome do item que deseja remover: ");
                inventario.RemoverItem(itemRemover);
                break;

            case 3:
                console.log(`Total de itens no inventário: ${inventario['itens'].length}`);
                break;

            default:
                console.log("Opção inválida.");
        }

        escolha = Number(prompt("1 - Ver Inventário\n2 - Jogar Item Fora\n3 - Ver Inventário Total\nEscolha: "));
    }
}
