let num1 = Number(prompt("Por favor insira um numero 1"))
let num2 = Number(prompt("Por favor insira o numero 2"))
 
let comp = (num2 !== 0) && (num1 % num2 === 0)
let comp2 = (num1 !== 0) && (num2 % num1 === 0)


console.log(comp)
console.log(comp2)
