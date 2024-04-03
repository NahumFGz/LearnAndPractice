const arr = [5, 1, 2, 3, 4, 51]

const red1 = arr.reduce((acc, el) => acc + el, 0)
console.log(red1)

const getMax = (a, b) => Math.max(a, b)
const red2 = arr.reduce(getMax, 0)
console.log(red2)

const red3 = arr.reduce( (acc, el) => {
    console.log('...')
    console.log(`Acumulador ${acc}`)
    console.log(`Elemento ${el}`)
    return Math.max(acc, el)
})
console.log(red3)

// * Obtener el arreglo de todos los nombres de usuarios
const users = [
    { id:1, name:'User 1'},
    { id:2, name:'User 2'},
    { id:3, name:'User 3'},
    { id:4, name:'User 4'},
    { id:5, name:'User 5'},
]

const r1 = users.reduce((acc, el) => `${acc}, ${el.name}`, '')
console.log(r1)

const r2 = users.reduce((acc, el) => `${acc === '' ? '' : `${acc}, `}${el.name}`, '')
console.log('-->',r2)

const r3 = users.reduce((acc, el) => `${acc === '' ? '' : `${acc}, `}${el.name}` , '')
console.log(r3)