//Impoirtando Paginas, Personagens e etcs
import { Personagem } from "./InfoPersonagem";
import { HabilidadePersongem } from "./Habilidade";
import { PaginaNarrativa } from "./PaginaNarrativa";
import { PaginaBatalha } from "./Paginabatalha";
import { ClasseOculta } from "./ClasseOculta";

console.log("Livro-jogo inicializado com sucesso!");
console.log("========Bem Vindo ao Mundo Paralelo de Sr dos Aneis=========");
console.log("====Aqui veras Coisas que nem mesmo os Magos mais poderosos Poderam ver!!======")
// Cria páginas do livro
const pagina1 = new PaginaNarrativa(1, "Você acorda em uma caverna escura...");
const pagina2 = new PaginaNarrativa(2, "Ao sair da caverna, vê uma floresta misteriosa.");
const pagina3 = new PaginaNarrativa(3, "Lembra de Gandoff Com seu Cajado e da Risada.");
const pagina4 = new PaginaNarrativa(4, "Depois de Andar Pela Floresta Ve uns Anoes Caminhado, e Pergunta a Eles Cade o Resto do Grupo");
const pagina5 = new PaginaNarrativa(5, "Os anoes Perguntam se estou procurando Gandoff , digo a eles que sim");
const pagina6 = new PaginaNarrativa(6, "Vejo Um Brilho No Horizonte Gandoff Tinha invocado o Mecha Gandoff que usou sua magia especial Sentinela Nuclear");
const pagina7 = new PaginaNarrativa(7, "Me pergunto O que e aquilo, os anoes ficam olhando, E pensando o que e aquilo?");
const pagina8 = new PaginaNarrativa(8, "Os anoes falam Aquele velho chamo aquela coisa de Novo");
const pagina9 = new PaginaNarrativa(9, "Os Anoes dizem, Ultima vez que chamou aquela coisa ele explodiu a floresta e acabo com o castelo");
const pagina10 = new PaginaNarrativa(10, "Os Anoes Contam a Historia de como ele enfrentou seu tutor com o Mecha Gandoff");
const pagina01 = new PaginaNarrativa(11, "Gandoff Descobre um Artefato Milenar e uma magia Arcana Suprema e um Grimorio Antigo nela tambem encontra algumas coisas");
const pagina02 = new PaginaNarrativa(12, "Tempo Depois Gandoff Invoca o Mecha Gandoff, Que luta com seu Tutor, até seu tutor ficar cansado, Assim chama o Nuclear Strike");
const pagina03 = new PaginaNarrativa(12, "Gandoff Então sai de perto e o tutor e Incinerado, Gandoff Ri e diz esse e diferente");
// Testa páginas
pagina1.Verificarpagina();
pagina2.Verificarpagina();
pagina3.Verificarpagina();
pagina4.Verificarpagina();
pagina5.Verificarpagina();
pagina6.Verificarpagina();
pagina7.Verificarpagina();
pagina8.Verificarpagina();
pagina9.Verificarpagina();
pagina10.Verificarpagina();
console.log("===Historia da Vitoria de Gandoff sobre seu tutor==")
pagina01.Verificarpagina();
pagina02.Verificarpagina();
pagina03.Verificarpagina();


// Cria personagens
const gandalf = new HabilidadePersongem("Cajado", 1, 50, "Mão Oculta", 25, "Gandalf", "Dragão de Fogo");
const gadoff = new ClasseOculta("Cajado", 1, 100, "Passiva Maluca", 15, "Gadoff", "Explosão Final");
const aragorn = new HabilidadePersongem("Espada", 1, 40, "Fúria Élfica", 35, "Aragorn", "Exército dos Homens");

// Testa status
gandalf.VerificarStatusPersonagem();
aragorn.VerificarStatusPersonagem();

// Testa itens
gandalf.VerificarItens();
aragorn.VerificarItens();

// Testa habilidades
gandalf.VerificarHabilidade();
aragorn.VerificarHabilidade();

gadoff.VerificarStatusPersonagem();
gadoff.VerificarItens();
gadoff.VerificarHabilidade();

const heroi = new Personagem("Espada", 1, 10, "Fúria Oculta", 30, "Aragorn", "Espadada Fatal");

const batalha = new PaginaBatalha(2,"Você entra em uma clareira escura...","Troll da Montanha",25,heroi);

batalha.Verificarpagina();







