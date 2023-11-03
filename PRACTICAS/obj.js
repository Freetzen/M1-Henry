const obj = {

    a: {

        a1: 10,

        12: 'Felix',

        13: { f: 'r', a: 'n', c: { o: true } },

        b: 2,

        c: [ 1, { a: 1 }, 'Martin' ]

    }

}


const contadorDePropiedades = (objeto) => {

    let contador = 0
    
    for(let prop in objeto){
        
        console.log(objeto[prop])
        contador++
        
        if(typeof objeto[prop] === 'object'){ console.log(typeof objeto[prop] === 'object')
        
        if(!Array.isArray(objeto[prop])){ console.log(!Array.isArray(objeto[prop]))
            
            contador += contadorDePropiedades(objeto[prop])
            console.log(contador)
            }

        }

    }

    return contador

}

console.log(contadorDePropiedades(obj))