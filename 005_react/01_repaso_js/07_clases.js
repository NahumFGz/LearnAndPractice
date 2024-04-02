class Chancho {
    propiedad = 'mi propiedad'

    constructor(estado = 'feliz') {
        this.estado = estado
    }

    hablar() {
        console.log(`soy un chancho ${this.estado}`)
    }
}

const feliz = new Chancho()
console.log(feliz)
// Se ve en el explorador, pero no en el terminal de node
console.log(feliz.__proto__.hablar)
feliz.hablar()

const triste = new Chancho('triste')
triste.hablar()