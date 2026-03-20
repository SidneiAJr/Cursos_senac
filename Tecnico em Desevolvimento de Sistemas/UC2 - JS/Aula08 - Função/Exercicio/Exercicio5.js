// Sem prompt 
function calcularArea(b,h){
    return b*h
}
let area = calcularArea(8,6)
alert(`A area total será ${area}`)
// Com prompt
function calcularArea(b,h){
    return b*h
}
let b = Number(prompt("Insira a Base do Retangulo: "))
let h = Number(prompt("Insira a Base do h: "))
let area = calcularArea(b,h)
alert(`A area total será ${area}`)
// Area 1) 5 e 3
// Area 2) 10 e 4
// Area 3) 7 e 6
// Area 4) 8 e 2
// Area 4) 9 e 5
// Area 4) 10 e 7
