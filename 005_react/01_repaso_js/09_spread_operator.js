// Nota: Leer parametro y argumento 

const fn = (a, b, c) => console.log(a, b, c)
const arr1 = [1,2,3]
const arr2 = [1,2]
const arr3 = [1,2,3,4]

fn(arr1[0], arr1[1], arr1[2])
fn(...arr1)
fn(...arr2)
fn(...arr3)

const arr4 = [5,6]
const arr5 = [...arr1, ...arr4]
console.log(arr5)

// Son copias de los valores, si se modifica arr6[0], no modificará arr
const arr6 = [...arr1, 8, 9, 10]
console.log(arr6)
arr6[0] = 'Modificación'
console.log(arr1, arr6)

// Casos donde se modifican
const arr7 = arr1
arr1[0] = 'x'
console.log(arr1, arr7)

// !IMPORTANTE <- JS por defecto asigna por referencia
// https://chat.openai.com/c/11d9845e-674f-4295-9662-016934bdbef3