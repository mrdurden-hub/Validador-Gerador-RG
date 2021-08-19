const ValidadorRG = require("./src/ValidadorRG");
const GeradorRG = require("./src/GeradorRG");

const rgGerado = new GeradorRG().gerarRg();
const valido = new ValidadorRG(rgGerado).valida();

console.log(`Seu RG gerado: ${rgGerado}. Valido: ${valido}`);
