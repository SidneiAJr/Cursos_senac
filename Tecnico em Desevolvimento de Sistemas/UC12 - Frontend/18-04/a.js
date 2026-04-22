const texto = document.getElementById('titulo')

function modoNoturno(){
      alert("Acertou!");
      texto.textContent = "Acertou"
      texto.style.color = "green"
      document.body.style.backgroundImage = "url('https://static.todamateria.com.br/upload/54/f2/54f271481875c-planetas-do-sistema-solar.jpg')";
} 

function erro(){
    texto.textContent = "Erro!"
    texto.style.color = "red"
    document.body.style.backgroundImage = "url('https://i.makeagif.com/media/4-04-2025/3dXXV6.gif')";
    document.body.style.filter = "brightness(1.5)";
}
