const titulo = document.getElementById("a")
const botaoadd = document.getElementById("add")
const botaodelete = document.getElementById("remover")
const botaotitulo = document.getElementById("titulo")
const lista = document.getElementById("lista")

function mudatexto(){
    titulo.textContent = "Hello Word"
}

function addclass(){
}

function addlista(){}


function realtime(){
    input.addEventListener("input",(event)=>{
    const valor = event.target.value
    titulo.textContent = valor;
})
}
