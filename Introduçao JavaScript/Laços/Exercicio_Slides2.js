const array=[11,15,18,14,12,13]
function devmaior(array){
let maiorNum = 0
   for(let i=0; i<array.length; i++){
      let numat = array[i]
      if(numat >= maiorNum){
       maiorNum = numat  
      }
   }

console.log(`O maior numero será ${maiorNum}`)
}
devmaior(array)
