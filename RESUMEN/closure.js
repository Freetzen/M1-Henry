//! CLOSURES

let persona = {
    nombre: 'Federico',
    apellido: 'Ruiz Gei'
}

function saludar(saludo){

    console.log(`${saludo}, mi nombre es: ${this.nombre} y mi apellido: ${this.apellido}`)
    
}



//! BIND
// Guarda la función en una variable (saludarPersona)
// saludar.bind(persona, 'Hola') | Primer parámetro siempre es el objeto. (Se le coloca null)

let saludarPersona = saludar.bind(persona) //Bindea el objeto que vamos a trabajar

saludarPersona('Hola') // Param saludo, de la función saludar(saludo)



//! CALL
// A diferencia de .bind, No guarda la funcion, ejecuta y termina

saludar.call(persona, 'Hola')



//! APPLY
// A diferencia de Call, los parámetros se pasan en un arreglo / array
//No guarda la funcion, ejecuta y termina



saludar.apply(persona, ['Hola'])
