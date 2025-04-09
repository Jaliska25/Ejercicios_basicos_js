/*Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio. Puedes usar este array para probar tu función:*/
const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]

function averageWord(list) {
  let numbers = 0
  let string = 0
  let total = 0
  let promedio = 0

  for (const element of list) {
    if (typeof element === 'number') {
      numbers += element
    } else if (typeof element === 'string') {
      string += element.length
    }
  }
  total = numbers + string
  console.log('La suma de números y caracteres del array es: ' + total)

  promedio = total / list.length
  console.log('El promedio del array es: ' + promedio)
  return promedio
}
averageWord(mixedElements)
