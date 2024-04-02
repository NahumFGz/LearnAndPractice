const arr = [5, 1, 2, 3, 4, 5]

const mapped = arr.map( (el) => el * 2)
console.log(mapped)


const mapped2 = arr.map( (el) => `<h1>${el}</h1>`)
console.log(mapped2)

const users = [
    { id:1, name:'User 1'},
    { id:2, name:'User 2'},
    { id:3, name:'User 3'},
    { id:4, name:'User 4'},
    { id:5, name:'User 5'},
]
const mapped3 = users.map( (user) => `<h1>${user.name}</h1>`)
console.log(mapped3)