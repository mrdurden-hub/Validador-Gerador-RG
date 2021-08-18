class ValidaRG {
    constructor(rgEnviado) {
        this.rgEnviado = rgEnviado;
    }

    limpaRG(rgEnviado){
        return rgEnviado.replace(/\D+/g, '')
    }

    valida() {
        this.rgLimpo = this.limpaRG(this.rgEnviado)

        if (!this.rgLimpo) return false
        if (this.rgLimpo.length !== 9) return false
        if (this.sequencia()) return false

        const rgSemUltDig = this.rgLimpo.slice(0, -1)
        const digito = ValidaRG.geraDigito(rgSemUltDig)
        const novoRg = rgSemUltDig + digito

        return this.rgLimpo === novoRg
    }

    static geraDigito(rgSemUltDig) {
        let total = 0;
        let count = 2;
        let resultados = []

        for (let stringNumerica of rgSemUltDig) {
            stringNumerica = Number(stringNumerica)

            let mult = count * stringNumerica
            count++
            resultados.push(mult)
        }

        for (let i = 0; i < resultados.length; i++) {
            total += resultados[i]
        }

        let digito = 11 - (total % 11)

        if(digito == 10) digito = 'X'

        return digito >= 11 ? 0 : digito
    }

    sequencia() {
        return this.rgLimpo.charAt(0).repeat(9) === this.rg;
    }
};

module.exports = ValidaRG
