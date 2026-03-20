let numeros = [10,90,1000,78]
let maior = numeros[0]
for(let i=0; i<numeros.length; i++){
     if (numeros[i] > maior) {
    maior = numeros[i]; // Atualiza se achar um número maior
  }
}
let resultado = [maior]
console.log(`Maior Numero será: ${resultado}`)
