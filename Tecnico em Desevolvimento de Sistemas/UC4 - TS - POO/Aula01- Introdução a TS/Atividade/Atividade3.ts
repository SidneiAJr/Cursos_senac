// 3 - Defina um array de strings com nomes de amigos e percorra ele com forEach.
function amigos(){
    let amigos : String[] = ["Ana","Bia","Carlos","Daniel","Eduardo"]; // Tipo de Array indentico ao C# e java
    amigos.forEach(function(amigo){
        console.log(`Olá ${amigo}`);
    });
}
