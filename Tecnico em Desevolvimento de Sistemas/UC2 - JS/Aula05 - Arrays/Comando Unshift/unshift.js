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
