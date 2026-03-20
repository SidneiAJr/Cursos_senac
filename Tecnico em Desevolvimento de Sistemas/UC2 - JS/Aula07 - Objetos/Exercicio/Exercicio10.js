const celular={
    marca:"Platina",
    modelo:"",
    cor:"",
    armazenamento:"1YB"
}
for(let cel in celular){
    if(celular[cel] === ""){
        console.log("O Campo " + cel + " esta vazio preencha")
    }
}
