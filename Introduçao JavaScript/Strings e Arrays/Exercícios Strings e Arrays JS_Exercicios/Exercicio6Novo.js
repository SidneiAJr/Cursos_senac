let array = ["fruta","fruta2"]

const filtro = array.map(item=>item.toLocaleUpperCase())
const comIndex = array.map((item, i) => `${i + 1}. ${item}`);
const tamanho = array.map(item => item.length);

console.log(filtro)
console.log(comIndex)
console.log(tamanho)