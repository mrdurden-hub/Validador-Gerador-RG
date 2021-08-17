class ValidaRG {
    constructor(rg) {
        this.rg = rg
        this.init()
    }

    init() {
        if (this.sequencia()){
            console.log('sequencia metodo')
        }

        if (typeof this.rg !== 'string') {
            console.log('NÃO É STRING')
        }

        if (this.rg.length > 9) {
            console.log('numero maior que o normal')
        }

        this.valida()
    }

    valida() {
        const rgSemUltDig = this.rg.slice(0, -1)

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

        let resto = total % 11
        console.log(resto)

        let digito = 11 - resto
        
        if(digito === 11) digito = 0;
        
        console.log(digito)

        const rgValidado = rgSemUltDig + digito

        if(this.rg === rgValidado){
            console.log('RG VÁLIDO')
        } else {
            console.log('RG INVÁLIDO')
        }
        
    }

    sequencia() {
        return this.rg.charAt(0).repeat(8) === this.rg;
    }
}

let rg = new ValidaRG('552042730')



