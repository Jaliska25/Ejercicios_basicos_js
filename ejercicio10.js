/* Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
Puedes usar este array para probarla:*/
const numbers = [12, 21, 38, 5, 45, 37, 6]

function average(numberList) {
  let total = 0
  let average = 0
  for (const number of numberList) {
    total += number
  }
  average = total / numberList.length
  return average
}
console.log('El promedio es: ' + average(numbers))
