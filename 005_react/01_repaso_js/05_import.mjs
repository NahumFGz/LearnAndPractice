// ANTIGUA FORMA
// const chanchos = require('./04_export.js')


// console.log(chanchos)
// console.log(chanchos.chanchosFelices)

// NUEVA FORMA
import chanchos, {chanchosTristes, otrosChanchos, fn1, fn2} from './04_export.mjs'

console.log(chanchos)
console.log(chanchosTristes)
console.log(otrosChanchos)
fn1()
fn2()