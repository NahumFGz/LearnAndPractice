// PROPIEDADES PRIVADAS
// Se definen con #, se ve dentro de la clase, pero no por fuera
class Chancho {
    propiedad = 'mi propiedad'
    #hambre = false
    static propiedad_estatica = 42

    constructor(estado = 'feliz', hambre=false) {
        this.estado = estado
        this.#hambre = hambre
    }

    hablar() {
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre!': 'satisfecho'}`)
    }

    static comer() {
        console.log(this.propiedad, this.propiedad_estatica, 'estoy comiendo!')
    }
}

const feliz = new Chancho()
console.log(feliz)
feliz.hablar()

// METODOS ESTATICOS
// Se pueden entrar directo de la clase sin necesidad de instanciar
// No pueden acceder a las propiedades
// Para acceder se necesitan crear propiedades estáticas
Chancho.comer()