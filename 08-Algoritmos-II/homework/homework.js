"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {

  // Implementar el método conocido como quickSort para ordenar de menor a mayor

  // el array recibido como parámetro.

  // Devolver el array ordenado resultante.

  // Tu código:

  

  if (array.length < 2)  return array

  const calcPivot = array[0]

  let left = [];
  let right = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] >= calcPivot) {
        right.push(array[i]);
      }
      if (array[i] < calcPivot) {
        left.push(array[i]);
      }
    }

    if (left.length > 1) {
      left = quickSort(left);
    }
    if (right.length > 1) {
      right = quickSort(right);
    }

  let result = left.concat(calcPivot, right);

  console.log(left);
  console.log(right);

  return result;

}

let array = [10, 10, 16, 12];

console.log(quickSort(array));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length < 2) return array;

  const half = Math.floor(array.length / 2); // Redondea hacia abajo.

  let left = array.slice(0, half); // Divide el array, desde 0 hasta donde le diga (el último no lo incluye). Siempre hablando de posiciones.

  let right = array.slice(half, array.length); // Dividimos el array, desde la mitad hasta el último con array.length (El último no lo incluye, no hace falta - 1)
  //let right = array.slice(half) Es lo mismo porque cuenta de la mitad hasta el final. No hace falta el segundo parámetro

  array = []; // Pisamos el array principal, ya que no lo necesitamos y ocupamos espacio al pedo.

  left = mergeSort(left); // Aplicamos recursión, para volver a dividir el array

  right = mergeSort(right); // Aplicamos recursión, para volver a dividir el array

  while (left.length && right.length) {
    // Comparamos mientras hay elementos en el array.

    if (left[0] < right[0]) {
      // Comparamos los índices 0 entre los 2 arrays

      array.push(left.shift()); // aplicamos .shift(), este método elimina el primer elemento de una matriz y devuelve ese elemento eliminado almacenada en la variable creada.
    } else {
      array.push(right.shift()); // aplicamos .shift(), este método elimina el primer elemento de una matriz y devuelve ese elemento eliminado almacenada en la variable creada.
    }
  }

  array = array.concat(left, right);

  return array;

  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
