
// Escribe una función que tome un arreglo de números y devuelva un nuevo arreglo con solo los números pares.


function eliminarDuplicado(array){



    let fil = array.filter((value, index, arr2) => { // Value es el valor del array
        console.log(value)
        console.log(index)
        return arr2.indexOf(value) === index
    })

    console.log(fil)
    
    console.log(eliminarDuplicado(arreglo))
    
    return fil

}




let arreglo = [9, 85, 5, 4, 9, 4, 8, 8, 5, 80, 6, 8, 8, 8, 8, 7, 4, 455]



























