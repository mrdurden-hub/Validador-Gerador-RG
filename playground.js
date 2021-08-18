const regExp = /\.|-|''/gi;

const rg = '55.204.273-x'

console.log(rg.match(regExp))
console.log(rg.replace(regExp,''))

