let turno  = prompt("Por favor digite O seu turno M/V/N: ")
let Mat = "M"
let Not = "N"
let ves = "V"

if(turno === Mat){
    console.log("Bom dia seu turno é Matutino ")
}else if(turno === ves){
   console.log("Boa Tarde seu turno é Vespertino")
}else{
  console.log("Boa noite seu turno é Noturno ")
}
