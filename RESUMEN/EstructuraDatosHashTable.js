//! LISTAS ENLAZADAS (simple)
// Consta de NODOS interconectados. Estos nodos contienen un VALOR y una REFERENCIA al siguiente nodo.
// Si eliminamos una referencia (nodo), se pierde todo lo que le sigue.
// Métodos para una LinkedList
// Iterar sobre la lista (recorrerla o buscar un elemento).
// Insertar un nodo (Al comienzo, en el medio o al final).
// Eliminar un nodo (del comienzo, del medio o del final).

function LinkedList() { 
    this.head = null, // Siempre al inicio comienza en NULL
    this._length = 0; 
  }
  
  function Node(value) { // Cada nodo se conecta entre si, a través de NEXT. 
    this.value = value, 
    this.next = null; // Puntero, que almacena una referencia al siguiente nodo.
  }

  LinkedList.prototype.add = function (ele) {
    let newNode = new Node(ele)
    let current = this.head // Current es el NODO al que APUNTA.
  
    if (!current) {
      this.head = newNode;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this._length++;
    return newNode
  };




  //! HASH TABLES
  // Nos permiten crear una lista de pares con CLAVE - VALOR.
  // De este modo podremos retornar un valor a partir de su 'contraseña' que tendremos de antemano.
  // Si nos ingresa un valor'fede', con toCharAt() sacamos el valor de cada letra, y el resto de x casillero es la posición.

  function HashTable(){
    this.buckets = [],
    this.numOfBuckets = 35
  }

  HashTable.prototype.hash = function(str){ // Para saber en que posición guardaremos el elemento.

    let resultado = 0

    for (let i = 0; i < str.length; i++) { 
        resultado += str[i].charCodeAt()
    }

    return result % this.numOfBuckets // Retorna el resto, el cual será la ubicación del elemento en el array (this.buckets)

  }

  HashTable.prototype.set = function(key, value){ // Guardar
    if(typeof key === 'function') throw TypeError('Keys must be Strings')
    let numBox = this.hash(key)
    if(this.buckets[numBox] === undefined){
         this.buckets[numBox] = {}
    }

    this.buckets[numBox][key] = value
    return this.buckets

  } 

  HashTable.prototype.get = function(key){ // Buscar
    let numBox = this.hash(key)
    if(this.buckets[numBox] && this.buckets[numBox][key]){
        return this.buckets[numBox][key]
    }
    return null
  }

  HashTable.prototype.hasKey = function(key){ // Encontrar si existe key
    const result = this.get(key) // devuelve null o un valor
    if(result) return true
    else return false
  }