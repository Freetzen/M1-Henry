//! RECURSIÓN
// Es la técnica en la que una función se llama a si misma para repetir un procedimiento.
// Siempre debe tener un caso de corte, sino crea un bucle infinito.

function alCero(num){

    if(num === 0){
        return 'Terminó el proceso'
    }

    alCero(num - 1)

}

console.log(alCero(10)) // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0

//! *******************************************************

//Sumar todos los números de un arreglo.

function sumarArreglo(array){

    if(array.length === 0){
        return 0
    }else{
        const primerNumero = array[0]
        const restoDelArreglo = array.slice(1) //
        console.log(restoDelArreglo) // [6, 2, 8], [2, 8], [8], []

        return primerNumero + sumarArreglo(restoDelArreglo)
    }

}

let arr = [5, 6, 2, 8]

console.log(sumarArreglo(arr)) // 21




//! ESTRUCTURA DE DATOS
// Son el estudio de distintas formas en las que se puede organizar la información. 
// Aprenderemos:
// Arreglos 
// LinkedList
// Árboles
// Pilas
// Colas
// Tablas Hash

//Tips M4
// Gráficos
// Conjuntos
// Mapas
// Montículos

//! STACK
// Siguen una estructura de tipo LIFO (Last In First Out). Ultimo ingresa, Primero se va.
// Stack puede hacer: Agregamos con .push() y sacamos con .pop(). 

// LIFO:
// 8 Última tarea y es la primera en salir. Después el 10 y último el 5
// 10 Segunda tarea
// 5 Primera tarea 

function Stack(){
    this.data = [] // Propiedad
}

Stack.prototype.add = function(value){ // Agregamos el valor a this.data
    this.data.push(value)
}

Stack.prototype.delete = function(){ // Eliminamos el último elemento del array
    this.data.pop()
}

let miStack = new Stack() // Instanciamos el Stack para crearlo
miStack.add(8)
console.log(miStack) // Stack { data: [8] }


//! QUEUE
// Al revés de Stack.
// FIFO: (First In First Out)
// 8 Última tarea y sale, finaliza.
// 10 Segunda tarea y sale
// 5 Primera tarea y sale

function Queue() {
    this.arr = []
  }
  
  Queue.prototype.size = function(){
    return this.arr.length
  }
  
  Queue.prototype.enqueue = function(e){ //agrega un valor al ARR --> []
    this.arr.push(e)
  }
  
  Queue.prototype.dequeue = function(){ // Eliminamos el primer elemento, que fue el primero en ingresar.
    if(this.arr.length === 0){
      return undefined
    }else{
      return this.arr.shift()
    }
  
  }