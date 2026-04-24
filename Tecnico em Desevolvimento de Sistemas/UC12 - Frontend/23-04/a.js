const botao = document.getElementById("btn")
const titulo = document.getElementById("a")
const input = document.getElementById("b")
const p = document.getElementById("p")

input.addEventListener("input",(event)=>{
    const valor = event.target.value
    titulo.textContent = valor;
    p.textContent = valor;
})

