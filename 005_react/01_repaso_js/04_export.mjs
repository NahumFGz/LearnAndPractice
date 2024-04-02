const chanchosFelices = ['chancho 1', 'chancho 2', 'chancho 3']
const chanchosTristes = ['triste 1', 'triste 2']
const otrosChanchos = []
// export const chanchosTristes = ['triste 1', 'triste 2']
// export const otrosChanchos = []

// ANTIGUA FORMA
// module.exports = {
//     chanchosFelices,
//     chanchosTristes
// }

// NUEVA FORMA 
// export default chanchosFelices

// OTRA FORMA DE EXPORTAR 
// TAMBIEN SE PUEDEN IMPORTAR FUNCIONES
const fn1 = () => {
    console.log('soy la funcion 1')
}

function fn2() {
    console.log('soy una funcion 2')
}

export { chanchosTristes, otrosChanchos, fn1, fn2}
export default chanchosTristes