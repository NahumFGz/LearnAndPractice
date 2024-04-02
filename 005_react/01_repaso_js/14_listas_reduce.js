const arr = [5, 1, 2, 3, 4, 5]

let valor_inicial_acumulador = 0
const r1 = arr.reduce( (acumulador, elemento) => acumulador + elemento, valor_inicial_acumulador)
console.log(r1)

const r2 = arr.reduce( (acc, el) => {
    console.log('...')
    console.log(`Acumulador ${acc}`)
    console.log(`Elemento ${el}`)

    return acc + el
}, 0)


// Ejemplo de uso real
const getMax = (a, b) => Math.max(a,b)
const r3 = arr.reduce(getMax, 0)
console.log(r3)

// Que pasaría si el arreglo tiene negativos
const arr2 = [-1,-10,-50,-4]
const r4 = arr2.reduce(getMax)
console.log(r4)

// !CUIDADO CON PONER EL 0 COMO VALOR INICIAL XQ EN NEGATIVOS PUEDE TENER UN ERROR
const r5 = arr2.reduce(getMax, 0)
console.log(r5)

// * Obtener el arreglo de todos los nombres de usuarios
const users = [
    { id:1, name:'User 1'},
    { id:2, name:'User 2'},
    { id:3, name:'User 3'},
    { id:4, name:'User 4'},
    { id:5, name:'User 5'},
]

const r6 = users.reduce((acc, el) => `${acc}, ${el.name}`, '')
console.log(r6)

const r7 = users.reduce((acc, el) => `${acc === '' ? '' : `${acc}, `}${el.name}`, '')
console.log(r7)

// !OTRO USO ES PARA FILTRAR Y HACER DEDUCE AL MISMO TIEMPO
const r8 = users.reduce((acc, el) => {
    if (el.id < 3){
        return acc
    }
    return acc.concat(el)
}, [])
console.log(r8)