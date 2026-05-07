const botaoAdd = document.getElementById("add");
const botaoRemove = document.getElementById("remove");
const container = document.getElementById("container");

let contador = 0;

botaoAdd.addEventListener("click", () => {
    const divNova = document.createElement("div");
    divNova.classList.add("bola"); 
    contador += 1;
    divNova.textContent = contador;
    container.appendChild(divNova);

    divNova.addEventListener('click',()=>{
     divNova.remove();
    })
    container.appendChild(div);
    
});

botaoRemove.addEventListener("click", () => {
    const bolas = container.querySelectorAll(".bola");
    if(bolas.length > 0){
        bolas[bolas.length - 1].remove(); 
    }
});

