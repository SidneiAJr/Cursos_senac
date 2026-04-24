const imgs = document.getElementById("img")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const h1 = document.querySelector("h1")



function removerimg() {
  btn1.addEventListener('click', () => {
    if (btn1.textContent === "Esconder") {
      imgs.classList.add('esconder'); // Esconde a imagem
      btn1.textContent = "Voltar"; // Muda o texto do botão para "Voltar"
    } else {
      imgs.classList.remove('esconder'); // Mostra a imagem
      btn1.textContent = "Esconder"; // Muda o texto do botão para "Esconder"
    }
  });
}

function removerimg2() {
  btn2.addEventListener('click', () => {
    if (btn2.textContent === "Esconder") {
      img2.classList.add('esconder'); // Esconde a imagem
      btn2.textContent = "Voltar"; // Muda o texto do botão para "Voltar"
    } else {
      img2.classList.remove('esconder'); // Mostra a imagem
      btn2.textContent = "Esconder"; // Muda o texto do botão para "Esconder"
    }
  });
}

function removerimg3(){
 btn3.addEventListener('click',()=>{
      if (btn3.textContent === "Esconder") {
      img3.classList.add('esconder'); // Esconde a imagem
      btn3.textContent = "Voltar"; // Muda o texto do botão para "Voltar"
    } else {
      img3.classList.remove('esconder'); // Mostra a imagem
      btn3.textContent = "Esconder"; // Muda o texto do botão para "Esconder"
    }
  });
}

removerimg()
removerimg2()
removerimg3()
