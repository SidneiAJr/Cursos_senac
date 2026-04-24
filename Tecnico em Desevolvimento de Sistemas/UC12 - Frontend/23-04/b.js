const botao = document.getElementById("btn")
const titulo = document.getElementById("a")
const input = document.getElementById("b")
const p = document.getElementById("p")
const img = document.getElementById("img")

input.addEventListener("input",(event)=>{
    const valor = event.target.value
    titulo.textContent = valor;
    p.textContent = valor;
})

function trocimg(){
    img.src = "https://m.media-amazon.com/images/I/61ICi+5KyfL._AC_UF894,1000_QL80_.jpg"
}


/* Evente com Change
input.addEventListener("input",(event)=>{
    const valor = event.target.value
    titulo.textContent = valor;
    p.textContent = valor;
})
*/
