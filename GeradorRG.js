const ValidadorRG = require('./ValidadorRG')

class GerarRG {
    randNumber(min = 10000000, max = 99999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    gerarRg() {
        const rgSemUltDig = this.randNumber()
        let digitoValidador = ValidadorRG.geraDigito(rgSemUltDig)

        if(digitoValidador === 10) digitoValidador = 'X'
        const novoRg = rgSemUltDig + digitoValidador

        return novoRg;
    }
}

module.exports = GerarRG;


