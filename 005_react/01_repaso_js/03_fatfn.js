//FAT ARROW FUNCTIONS
// No pueden ser llamadas como objeto con la palabra reservada new
// No tienen contexto de this

const fatFn = () => {
    return 'hola'
}

const r1 = fatFn()
console.log(r1)

// Tienen return implicito
const fnR = () => 2

console.log(fnR())