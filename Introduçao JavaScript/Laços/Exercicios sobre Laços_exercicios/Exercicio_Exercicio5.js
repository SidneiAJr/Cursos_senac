//Letra A exercicio 5.
let arrayog = [1,2,4,5,6,7,8]

function tetra(arrayog){
for(let i = 0; i < arrayog.length; i++){
    let receb = arrayog[i]
    console.log(receb)
}
}
tetra(arrayog)
//Letra B exercicio 5.
let arrayog = [1,2,4,5,6,7,8]


function tetra(arrayog){
for(let i = 0; i < arrayog.length; i++){
    let receb = arrayog[i]/10
    console.log(receb)
}
}
tetra(arrayog)
//Letra C exercicio 5.
let arrayog = [1,2,4,5,6,7,8]
let array2 = []

function tetra(arrayog){
for(let i = 0; i < arrayog.length; i++){
    if(arrayog[i]%2===0){
        array2.push(arrayog[i])
    }
}
 console.log(array2)
}
tetra(arrayog)

//Letra D exercicio 5.

let arrayog = ["Pao","batata","feijao","arroz"]

function tetra(arrayog){
for(let i = 0; i < arrayog.length; i++){
    let receb = arrayog[i]
    console.log("O elemento do índex", i ,"é numero",arrayog[i])
}
}
tetra(arrayog)

//Letra E exercicio 5.



let arrayog = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maiornum = 0
let menornum = 100
function tetra(arrayog){
for(let i = 0; i < arrayog.length; i++){

let numatu = arrayog[i]

if(numatu>maiornum){
    maiornum = numatu
}
if(numatu<menornum){
   menornum = numatu
}
}
console.log("O maior número é:",maiornum,"e o menor é",menornum)

}

tetra(arrayog)

