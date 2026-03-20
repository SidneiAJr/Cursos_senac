//Atividade 6 - Jornada do Array
// Em um reino distante, um jovem desevolvedor descobre uma espada magica  que revela seu destino como heroi.
// O Jogador é um heroi que embarca em uma aventura epica ao longo do caminho
// Inventario // 2.Criando o inventario do Heroi  // Heroi começa com itens basicos vamos armazenar esses items em um array [x]
// Imprimir Inventario do Heroi no console [x]
// Encontrando Tesouro Adicionar um novo item ao inventario e imprimir com lenght e push para adicionar no Array[x]
// Enfrentando um inimigo, heroi enfrenta um goblin [x]
// O goblin sentiu o golpe ... agora ele tenta seu ultimo ataque, um dano de 3! como voce finaliza esse adversario?[x]
// Um Golem aparece, aproveita sua distração e o ataca violentamente como um soco sismico com dano 9 [x]
// Finalizando a aventura por enquanto, nunca é um adeus
// Finalização do golem
let inventario = ["Espada do Madeira 10","Poção de vida 0.5","Elixir da sabedoria 4","Escudo de Madeira 4","Armadura de madeira 12"] 
let danoPassivo = ["Dano passivo mão de chernobyl - Dano por segundo -3"] // Passiva do Heroi, Cesio 137 [x]
let passivaoculta = ["Implosão atomica"] // Se vida do Heroi ficar abaixo de 30% ele morre instakill [x]
let dano = 5
let velataque = 0.75
let regenvida = 0.25
let armadura = 50
let defesa = 5
let vidaheroi = 200
let cenario = ["Floresta de Talman Tipo: Floresta muito densa"]
let Tesouro =  ["Armadura de Prata: 15"]
let itenscomunsdrop = ["Espada de platina","Armadura de duranium","Amuleto deo Guardião"]
let dropbosssupremo = ["Espada do Destino","Elfa","Anão ferreiro","Mapa da Mina de Duranium"]
let itensbau = []
let baucasa = []
let intemUsado2 = inventario[3]
let itemUsado3 = inventario[4]
let itemUsado4 = inventario[2]
let cofrepessoal = ["Poção de Vida","Armas de Duranium"]
let goblindoTrigrinho = ["Porrete"] // Arma do Goblin
inventario.push(Tesouro)
console.log(`Inventario do Heroi: ${inventario}`)
console.log(`Um numero Item foi Obtido ${Tesouro} e Agora o Inventario será: ${inventario}`)
console.log(`A quantidade de Itens no Inventario será: ${inventario.length}`)
console.log(`Heroi enfrenta Goblindo Tigrinho com ${inventario[0]} e o dano é do heroi é ${dano} e o Goblin Morreu, porem dropa ${Tesouro}`)
console.log(`Goblin foi executado pelo Heroi com ${intemUsado2} Dano`)
console.log(`Golem X ataca o heroi com soco sismico, Heroi usa ${itemUsado3} para se defender dano do golem 9 item ${itemUsado3} e revida com ${inventario[0]}`)
console.log(`Heroi usa o item ${itemUsado4} para que tenha sabedoria de como perfurar a carapaça do golem usa ${Tesouro} e destroi o golem`)
