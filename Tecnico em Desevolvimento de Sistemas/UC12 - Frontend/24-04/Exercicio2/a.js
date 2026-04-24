const imgs = document.getElementById("img")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const h1 = document.querySelector("h1")


function removerimg(){
 btn1.addEventListener('click',()=>{
    if(imgs.style.display==="none"){
        imgs.style.display = "block"
        btn1.textContent = "Esconder"  
    }else{
        imgs.style.display = "none"
        btn1.textContent="Voltar"
    }
})

}

function removerimg2(){
 btn2.addEventListener('click',()=>{
    if(img2.style.display==="none"){
        img2.style.display = "block"
        btn2.textContent = "Esconder"  
    }else{
        img2.style.display = "none"
        btn2.textContent="Voltar"
    }
})
}

function removerimg3(){
 btn3.addEventListener('click',()=>{
     h1.textContent = "Malphite Brabo | Exodia"

    if(img3.style.display==="none"){
        img3.style.display = "block"
        btn3.textContent = "Esconder"  
    }else{
        img3.style.display = "none"
        btn3.textContent="Voltar"
    }
})
}

removerimg()
removerimg2()
removerimg3()
