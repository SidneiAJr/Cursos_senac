//Letra A
function calculo(n1,n2){
    let somatotal = n1 + n2
    return somatotal
    
}

let somatotal2 = calculo(2,2)
console.log(somatotal2)
//Letra B
function calculo2(n3,n4){
    let verifica = n3 >= n4
    return verifica
}
let verifica = calculo2(4,7)
console.log(verifica)

//Letra C
function calculo3(n5){
    let verifica = n5 %2
    let verifica3 = verifica ===0 
    return verifica3
}
let verifica2 = calculo3(7)
console.log(verifica2)

//Letra D
const frase = "Ola mundo"
function frase2(frase){
    const verifica = frase.toUpperCase()
    console.log(frase.length)
    console.log(verifica)
}
frase2(frase)



