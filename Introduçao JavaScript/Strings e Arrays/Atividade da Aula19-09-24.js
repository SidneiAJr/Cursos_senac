const nome = prompt("Qual é seu nome?")
const corfav = prompt("Qual e sua cor favorita?")
const frase1 = "Seu nome é " +nome + " Sua cor favorita é "+corfav
const frase3 = `Seu nome é ${nome} Sua cor favorita é ${corfav}`
const frase5 = prompt("Por favor Digite Uma frase")
const frasemini = frase5.toLowerCase()
const frase6 = frasemini .replaceAll("o","i")
const frase7 = frasemini
const dog = ["Pasto alemão","Shitzu","buldogue","husky","pitbull","Caramelo"]
const raca = prompt("Digite um Numero de 0 a 4 ")
//ToLowerCase faz a letra ficar minuscula 
//Replace all procura
//Lenght procura no indice
//Splica adiciona

const arrays = [1,2,3,4,5,6]
arrays.push(7)
const arrays2 = arrays.splice(3,2)


console.log(frase1)
console.log(frase3)
console.log(frase5)
console.log(frasemini)
console.log(frase6)
console.log(frase7.length)
console.log(arrays2)
console.log(arrays)
console.log("A Raça Numero é:"+ dog[raca])
console.log(arrays.length)
