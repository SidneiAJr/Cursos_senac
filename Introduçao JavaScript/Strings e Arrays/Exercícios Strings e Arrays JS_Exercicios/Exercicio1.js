let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)
// Vai imprimir indefinido pois não foi definida.
//Vai imprir no console null.
//Vai imrprimir 11 pois e o tamanho do array.
//Vai imprimir 0 pois 3 e o primeiro numero da array.
//Vai imprir o array completa e substitui o valor 4 por 19.
//Vai imprimir o array 9.

