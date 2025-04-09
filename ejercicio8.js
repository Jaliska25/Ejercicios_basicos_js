/*Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. 
Puedes usar este array para probar tu función:*/

const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(stringList) {
  let longestWord = []
  let maxLength = 0

  for (const string of stringList) {
    if (string.length > maxLength) {
      maxLength = string.length
      longestWord = [string]
    } else if (string.length === maxLength) {
      longestWord.push(string)
    }
  }
  return longestWord
}
console.log(findLongestWord(avengers))
