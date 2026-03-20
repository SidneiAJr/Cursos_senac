// 1 - Comando Push retorna o tamanho do array
// 2 - Comando pop, replace all
// 3 - Length -> comando para contar e vericar tamanho da string e indice
// 4 - ToLowerCase -> Metodo para Maiscula
// 5 - Updercase  -> Metodo para Minuscula
// 6 - Metodo trim -> Retira os espaços
// 7 - Metodo includes -> determina se um conjunto de caracteres ser encontrado com true ou false
// 8 - Replace all -> Troca todas ocorrencias de um conjunto de caracteres
// 9 - Comando Unshift - Para Adicionar no começo dao array
// 10 - Comando Shift Apaga o Primeiro do Indice
// 11 - Comando Concat Concatena
// 12 - Comando Sort e um metodo para ordernar os elementos
//Arrrays em JavaScript
let ay = ["1","2","3","4","5"]//Array um
let ay2 = ["6","7"] //Array dois
let arraybiz = [0,1,2,3,4,5,6,7,8,9,11,12,13,14,15] // Array do Biz minha posição 1 pra lembrar depois
let somarrray = ay+ay2 // Concatenação de Array
let somarrray2 = ay.concat(ay2); // Soma os arrays
let imprimeay = `Meu array total ${somarrray2}`
let chama = ay[0]
console.log(somarrray)
console.log(somarrray2)
console.log(imprimeay)
console.log(chama)
// 1) Atividade Criar Array para cachorro
let racadog = ["husky","doberman","neuriono","golden","buldog"]
let imprimedog = racadog[0] // Posição do Arrray pelo Indice pode usar lenght para contar o tamanho do array e verificar pelo indice
let imprimedog2 = racadog[1]
console.log(imprimedog)
console.log(imprimedog2)
// Fim da atividade 1
// Usando Template de String
let nome = "Pedro"
let idade = 28
let cor = "vermelho"
let filmefav = "Interstelar"
let time = " não há"
let frase = `Eu sou ${nome} e tenho ${idade} idade meu filme favorito é ${filmefav} e meu time é ${time} Cor ${cor}`
let frase2 = "Eu sou " + nome + " idade " + idade+ " Time " + time + " Filme " + filmefav + " idade " + idade + " Cor " + cor
let comidafavorida = "Marmita com bife de frango a milanesa"
let reb = nome.toLowerCase()
let reb2 = nome.toUpperCase()
let reb3 = nome.trim()
console.log(frase)
console.log(frase)
console.log(nome.length)
console.log(comidafavorida.length)
console.log(nome)
console.log(nome)
console.log(reb)
console.log(reb2)
console.log(reb3)
let frastes = "hoje ta azul"
frastes.includes("azul")
frastes.includes("anão")
console.log(frastes.includes("azul"))
console.log(frastes.includes("anão"))
let frase4 = "tem pão"
let frase5 = frase4.replaceAll("pao","teste")
console.log(frase5)
//Atvidade 2 - Guarda Roupa dos Guri
let roupeiro = ["pijama","terno","Calça especial e camisa do ACDC","roupa normal","calça de brim e camisa polo","roupa rasgada estilo festa junina"]
let passeio = roupeiro[3] //Chama pelo valor do array indice do array começa de 0 e vai ate o 5
let show = roupeiro[2]
let emprego = roupeiro[4]
let emCasa = roupeiro[0]
console.log(`Para passeio a roupa será ${passeio}`)
console.log(`Para o Show a roupa será ${show}`)
console.log(`Para ir na vaga de emprego será ${emprego}`)
console.log(`Para dormir e ver serie em casa ${emCasa}`)
console.log(`Roupa para festa Junina é ${roupeiro[5]}`) // Pode ser chamado no console.log chamando sobre o valor do array [pelo indice] Ex [5]indice <-
// Atividade 3 - Comidas & Personagens
let lancheHomer = ["rosquisa","rosquinha","rosquisa"]
let lancheScooby = ["hambugue","batafrita","milkshake","biscoito scooby","pizza"]
let lancheMagali = ["rmelancia","maçã","banana","abacate"]
let lanchebob = ["hamb de ciri","refri","batata","sorvete","molho secreto"]
console.log(`Lanche do Homer terá ${lancheHomer.length} itens`)
console.log(`Lanche do Schooby terá ${lancheScooby.length} itens`)
console.log(`Lanche do Magali terá ${lancheMagali.length} itens`)
console.log(`Lanche do Bob Esponja terá ${lanchebob.length} itens`)
// Atividade 3.1 - Includes Array
let seriesboas = ["breaking bad","brokylin nine-nine"]
console.log(seriesboas.includes("breaking bad"))
console.log(seriesboas.includes("brokylin nine-nine"))
// Atividade 3.2 Pokemons
let pokemonsCapturados = ["pikachu","charmander","bulbasaur","squirtle"]
console.log(pokemonsCapturados.includes("pikachu"))
console.log(pokemonsCapturados.includes("Meowth"))
// Atividade 3.4 
let numero = [1,2,3]
numero.push(4)
console.log(numero)// Comando Push
//Atividade 5 - Push em array Lista de compra Ex4
let listadeCompra = ["Arroz","Feijão","Macarrão"]
listadeCompra.push("Leite","Farinha","Banana","Canela","Franco","Margarina","Farofa")
console.log(`A Lista completa será ${listadeCompra}`)
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
//Atividade 7- Atividade do bolo
let listaIngriendes = ["ovo","farinha","açucar","manteiga","chocolate em pó","leite ninho","cacau","fermento","morangos"]
let baseBolo = ["ovo","farinha","açucar","manteiga"]
let recheio1 = ["chocolate","leite ninho"]
let recheio2 = ["morango","cacau"]
let recheio3 = ["morango picado","chocolate liquido"]
let bolopronto = []
bolopronto.push(baseBolo+recheio1+recheio2+recheio3)
console.log(`Bolo pronto terá um recheios de: ${recheio1} com segundo recheio: ${recheio2} e com terceiro recheio: ${recheio3} e o bolo pronto terá o seguinte ingredientes ${bolopronto}`)
// Comando Unshift - Para Adicionar no começo dao array
let cores  = ["azul","verde"]
cores.unshift("vermelho")
console.log(cores)
// Comando Unshift
let marcaantiga = ["Samsung","Xaiomi","Realme","Poco"]
marcaantiga.unshift("Motorola")
console.log(marcaantiga) 
// Comando Shift
let frutas = ["Maças","Banana","Laranja"]
frutas.shift()
console.log(frutas)
// Comando Shift 
let cidade  = ["SP","RJ","RS"]
cidade.shift()
console.log(cidade)
// Comando POP
const meuspeixes = ["palhaço","mandarim","estujrão"]
console.log(meuspeixes)
meuspeixes.pop()
console.log(meuspeixes)
// Exercicio Ex6:
// Gerenciador de tarefas simples array
// Gerenciador de tarefas simples array
let tarefas = ["Construir 3D","Construir um Jogo","Construir Script","Programar","Construir sistema","Construir HTML"]
console.log(tarefas)
tarefas.pop()
let concluidas = tarefas[4]
console.log(`Tarefas Concluidos: ${concluidas}`)
//Comando Splice
const letras = ["1","2","3","4","5","6"]
console.log(letras)
letras.splice(2,1) // Remove da posição 2 o indice 1
letras.splice(0,1) // Remove o Indice 0 valor 1
console.log(letras)
// Comando Splice Exercicio Pokemon
let deck = ["Pikachu","Charmander","Bulbasaur","Pikachu","Squirtle","Meowth"]
deck.splice(3,1)
deck.splice(3,1,"Snorlax")
deck.splice(5,1,"Eevee")
console.log(deck)
// Comando concat contatena
let fruta2 = ["maça","banana"]
let legume = ["cenoura","batana"]
let alimentos = fruta2.concat(legume)
console.log(alimentos)
//Exericio Novo
let pacote1 = ["Pikachu","Bulbasaur","Charmander"]
let pacote2 = ["Squirtle","Jigglypuff"]
let pacote3 = ["Meowth","Snolarx","evee"]
let receball = pacote1.concat(pacote2,pacote3)
console.log(receball)
console.log(`Quantas Cartas temos : ${receball.length}`)
//Comando sort e um metodo para ordernar os elementos
let frutas = ["Banana","Maça","Laranja"]
frutas.sort()
console.log(frutas)
let frase = "    Eu adoro JavaScript e estudar com meus colegas incriveis !   "
let conv1 = frase.trim()
let conv2 = frase.toLowerCase()
let conv3 = frase.includes("JavaScript")
let conv4 = frase.replaceAll("JavaScript","TypeScript")
console.log(`Frase sem Espaços: ${conv1}`)
console.log(`Frase em Caixa Baixa: ${conv2}`)
console.log(`Existe JavaScript na frase ? ${conv3}`)
console.log(`Frase ${conv4}`)




