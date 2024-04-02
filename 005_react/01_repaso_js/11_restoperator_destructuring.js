const rest = (...argumentos) => {
    console.log(argumentos)
}

rest(1, 2, 3)

// !rest operator solo va al final de los parametros, a la derecha
const rest1 = (a, b, ...argumentos) => {
    console.log(a, b, argumentos)
}

rest1(1, 2, 3, 4, 5, 6)

// Object destructuring
console.log('-----')
const obj = {
    a: 1, b: 2, c: 3, d: 4
}
const { a } = obj
console.log(a)

const { b, c } = obj
console.log(b, c)

const { d, e, ...restoperator } = obj
console.log(d, e, restoperator)

// Destructuring en arreglos
console.log('------')
const arr = [1, 2, 3, 4, 5]
const [m, n, o, p, q, r, s] = arr
console.log(m, n, o, p, q, r, s)

console.log('------')
const [h, j, ...l] = arr
console.log(h, j, l)

console.log('-----')
const useState = () => ['valor', () => { }]
const [valor, setValor] = useState()
console.log(valor, setValor)