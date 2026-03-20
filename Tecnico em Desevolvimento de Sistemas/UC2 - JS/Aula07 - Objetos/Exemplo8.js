let formulario ={
    nome:"Pedro bala",
    email:"",
    cidade:""
}
for(let campo in formulario){
    if(formulario[campo]=== ""){
        console.log("O Campo "  +campo+  "Esta vazio preencha")
    }
}
