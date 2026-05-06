const texto = document.getElementById("texto");
const classe2 = document.querySelector(".exc2")
const remover = document.getElementById("remover")
const info = document.getElementById("info")
const saida = document.getElementById("Saida")

function one(){
    texto.textContent = "Exercicio 1 | Criar um botão que muda o texto de um título | Alterado"
}

function double() {
    const classe2 = document.querySelector('.exc2');
    classe2.classList.toggle("Ativo");
}

function tres(){
    const input = document.getElementById("inputTexto");
    const lista = document.getElementById("lista");
    const novoItem = document.createElement("li");
    novoItem.textContent = input.value;
    lista.appendChild(novoItem);
    input.value = ""; 
}

function quatro(){
   remover.remove();
}

info.addEventListener("input",function(){
    saida.textContent = info.value;
})
