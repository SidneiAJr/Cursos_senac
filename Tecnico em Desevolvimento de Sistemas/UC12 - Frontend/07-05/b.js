const div = document.getElementById('div');
const btn = document.getElementById('btn');


btn.addEventListener('click', ()=>{
const novo = document.createElement("p");
novo.textContent = "Alo ALOOOOO!";
div.appendChild(novo);
})

