/*Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:*/
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function nameFinder(nameList, element) {
  let index = nameList.indexOf(element)
  if (index !== -1) {
    return { found: true, position: index }
  } else {
    return { found: false }
  }
}
console.log(nameFinder(names, 'Peggy'))
console.log(nameFinder(names, 'Luis'))
