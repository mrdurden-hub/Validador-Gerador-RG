let rgSemUltDig = '55358698'

let count = 2;
let total = 0;
let resultados = []

for (let stringNumerica of rgSemUltDig) {
    stringNumerica = Number(stringNumerica)

    let mult = count * stringNumerica
    count++
    resultados.push(mult)
}

for (let i = 0; i < resultados.length; i++){
    total += resultados[i]
}

let resto = total % 11 

let digito = 11 - resto

console.log(digito)