// FUNCIONES QUE SE DECLARAN CON LA PALABRA RESERVADA FUNCTION 
// pueden funcionar como funciones y clases basadas en prototipos

function Fn() {
    return 'Hola'
}

const r = Fn()
console.log(r)

// Las funiones tienen un this, si se usa se comporta como clase
// Cada función en JS tiene una propiedad 'prototype' que se usa cuando se crea una 
// instancia de la función como objeto. Lo que significa que se puden agregar propiedades
// y metodos al prototipo de una función.
function Fn2 () {
    this.prop = 'propiedad'
}

const r2 = new Fn2()
console.log(r2)

// Cada función tiene un prototipo
console.log(r2.__proto__)

// Se puede modificar el prototipo
Fn2.prototype.lala = function FuncionDePrototipo() {}
console.log(r2.__proto__)