/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.
Puedes usar este array para probar tu función:*/

const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumNumbers(numberList) {
  let counter = 0
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i]
    counter += number
  }
  return counter
}

console.log('La suma de todos los números es: ' + sumNumbers(numbers))
