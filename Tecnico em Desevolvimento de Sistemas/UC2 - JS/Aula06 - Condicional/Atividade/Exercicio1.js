function comparaNum(){
    let num1 = Number(prompt("Informe um Numero: "))
    let num2 = Number(prompt("Informe um Numero: "))
    let comparaNum = num1 === num2
        if(comparaNum===true){
            alert(`Valor Comparado é: ${comparaNum}`)
        }else{
            alert(`Valor Comparado é: ${comparaNum}`)
        }
}
comparaNum()

function comparaNumero(n1,n2){
    if(n1===n2){
        alert("Sucesso os numeros são iguais cara!!")
        // Se forem iguais exeibe Mensagem de sucesso no console
    }else{
        alert("Não vai rola cara!!, Que Peninha os numeros não são iguais")
        // Se a condição não for verdadeira 
    }
}
