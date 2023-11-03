"use strict";

const { cleanupData } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que (((1x2)x2)x3)x3x5 = 180 y son todos números primos
  // Tu código:

  const array = [1];
  let baseDiv = 2

  while (num > 1) {
    if (num % baseDiv === 0) {
      array.push(baseDiv);
      num /= baseDiv
    } else {
      baseDiv++;
    }
  }

  return array;

}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let arrI = array[i];
        let arrJ = array[j];

        array[i] = arrJ;
        array[j] = arrI;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let arr1 = array[i];

    while (j >= 0 && arr1 < array[j]) {
      // [2, 5, 5, 9, 8, 45, 4, 8, 487, 4, 1, 1, 5]
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = arr1;
  }

  console.log(array);
  return array;
}

let array = [2, 5, 5, 9, 8, 45, 4, 8, 487, 4, 1, 1, 5];

insertionSort(array);

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    let min = i
      for (let j = i + 1; j < array.length; j++) {
          if(array[j] < array[min]){
            min = j
          }
        }
        if (i !== min) {
        let aux = array[i]
          array[i] = array[min]
          array[min] = aux
      }
    }
    return array

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
