const ValidadorRG = require('./ValidadorRG')
const GeradorRG = require('./GeradorRG')

const rgGerado = new GeradorRG().gerarRg()
const valido = new  ValidadorRG(rgGerado).valida()

console.log(`Seu RG gerado: ${rgGerado}. Valido: ${valido}`)
