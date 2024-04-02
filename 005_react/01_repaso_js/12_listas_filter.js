const arr = [5, 1, 2, 3, 4, 5]

const r = arr.filter(el => el > 2)
console.log(r)

const s = arr.filter((el, i) => {
    console.log(i)
    return el > 2
})
console.log(s)