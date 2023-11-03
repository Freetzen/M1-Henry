"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol.
  - insert: agrega un nodo en el lugar correspondiente.
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS).
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  //! Función Constructora
  (this.value = value), (this.left = null), (this.right = null);
}

BinarySearchTree.prototype.size = function () {
  // - size: retorna la cantidad total de nodos del árbol.

  if (this.left === null && this.right === null && this.value === null)
    return 0;

  if (this.left === null && this.right === null && this.value) return 1;

  if (this.left === null) return 1 + this.right.size();

  if (this.right === null) return 1 + this.left.size();

  if (this.left && this.right) {
    return 1 + this.right.size() + this.left.size();
  }
};

BinarySearchTree.prototype.insert = function (val) {
  // - insert: agrega un nodo en el lugar correspondiente.

  if (val < this.value) {
    if (!this.left) {
      return (this.left = new BinarySearchTree(val));
    } else {
      return this.left.insert(val);
    }
  } else {
    if (!this.right) {
      return (this.right = new BinarySearchTree(val));
    } else {
      return this.right.insert(val);
    }
  }
};

BinarySearchTree.prototype.contains = function (val) {
  //   - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol.

  if (this.value === val) return true;

  if (val < this.value) {
    if (this.left) {
      return this.left.contains(val);
    }
  } else {
    if (this.right) {
      return this.right.contains(val);
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {  // "post-order", "pre-order", o "in-order"
  
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []) {};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

const arbol = new BinarySearchTree(12);

arbol.insert(8);
arbol.insert(5);
arbol.insert(9);
arbol.insert(3);
arbol.insert(17);
arbol.insert(15);
arbol.insert(23);

console.log(arbol.depthFirstForEach(arbol));
