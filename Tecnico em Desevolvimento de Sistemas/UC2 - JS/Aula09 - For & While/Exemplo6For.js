//Exemplo 1.1
let voltas = 0
for(let i=0; i<10; i++){
    voltas ++
    console.log(`Volta será ${voltas}`)
}
//Exemplo 1.2
let voltas = 0
for(let i=0; voltas<=10; voltas++){
    voltas ++
    console.log(`Volta será ${voltas}`)
}
//Exemplo 1.3
//For - Para
//Varivel de controle
// Variavel de controle | condição | incremento
for(let voltas=0; voltas<=10; voltas++){
    console.log(`Volta será ${voltas}`)
}

//Exemplo 1.4
//Incremento diferenciado, não sabia que tinha:
let numeros = [1,2,3,4,5,6,7,8,9,10]
numeros[0]+=10
numeros[1]+=10
numeros[2]+=10
numeros[3]+=10
numeros[4]+=10
numeros[5]+=10
numeros[6]+=10
numeros[7]+=10
console.log(numeros)
// Exemplo de cima:
for(let i = 0; i < numeros.length; i++) {
    numeros[i] += 10;
    console.log(`Número atualizado: ${numeros[i]}`);
}


