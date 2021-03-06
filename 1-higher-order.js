const assert = require('assert')
console.log('test 1')
// Programmation fonctionnelle

//
// Fonctions d'ordre supérieur
//   aka Higher order functions
//


// 1. Les fonctions sont des valeurs
function triple(x) {
  return x * 3
}

// est la même chose que
var triple = function (x) {
  return x * 3
}

// peut aussi être assigné à une autre variable
var func2 = triple

assert(triple(2) === 6)
assert(func2(2) === 6)



// 2. Array.filter
// http://goo.gl/Jr7cn
const animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'fish' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'dog' },
  { name: 'Jimmy',      species: 'fish' },
]


// filtrer les chiens
// pre ES 5
{
  const dogs = []
  for (let i = 0; i < animals.length; i++) {
    if ( animals[i].species == 'dog' ) {
      dogs.push(animals[i])
    }
  }

  assert.deepEqual(dogs, [
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Ursula',     species: 'dog' },
  ])
}


// ES 5 -- function composition :
// la fonction .filter prend une fonction comme argument
{
  const dogs = animals.filter(function (animal) {
    return animal.species == 'dog'
  })

  assert.deepEqual(dogs, [
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Ursula',     species: 'dog' },
  ])
}


// ou
const isDog = function (animal) {
  return animal.species == 'dog'
}

{
  const dogs = animals.filter(isDog)

  assert.deepEqual(dogs, [
    { name: 'Hamilton',   species: 'dog' },
    { name: 'Ursula',     species: 'dog' },
  ])
}



// 3. Array.map
// http://goo.gl/8BSD2u

// obtenir une liste des noms
// pre ES 5
{
  const names = []
  for (let i = 0; i < animals.length; i++) {
    names.push(animals[i].name)
  }

  assert.deepEqual(names, ['Fluffykins', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jimmy'])
}


// ES 5
const getName = function (animal) {
  return animal.name
}

{
  const names = animals.map(getName)

  assert.deepEqual(names, ['Fluffykins', 'Caro', 'Hamilton', 'Harold', 'Ursula', 'Jimmy'])
}



// 4. Chaining
// Array.map et .filter retournant des Arrays, ces fonctions peuvent être
// chaînées autant de fois que nécessaire

// obtenir le nom des chiens
{
  const names = animals.filter(isDog).map(getName)

  assert.deepEqual(names, ['Hamilton', 'Ursula'])
}



// 5. ES6 / ES2015 syntactic sugar: arrow functions
// http://goo.gl/t4hMxL
let names
names = animals.map(function (animal) {
  return animal.name
})

// les arrow functions permettent de supprimer le keyword function :
// function () {} devient () => {}
names = animals.map( (animal) => {
  return animal.name
})

// si le corps de la fonction n'est constitué que d'un return statement, on
// peut également supprimer les accolades et le return :
names = animals.map( (animal) => animal.name )

// s'il n'y a qu'un argument, on peut également supprimer ses parenthèses :
names = animals.map( animal => animal.name )

// enfin, en programmation fonctionnelle on a tendance à remplacer les noms de
// variable par des lettres :
names = animals.map( a => a.name )

// in fine, on passe donc pre ES 5 de :
names = []
for (let i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}

// à :
names = animals.map( a => a.name )

// voici ce que donne l'exemple pour Array.filter une fois transformé :
var dogs = animals.filter( a => a.species == 'dog' )
assert.deepEqual(dogs, [
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Ursula',     species: 'dog' },
])



// 6. Array.reduce
// http://goo.gl/rQSAhf

// Pour effectuer des opérations plus complexes pour lesquelles filter ou map
// ne conviennent pas

// Ici pour remplacer le chainage précédent :
names = animals.filter( a => a.species == 'dog' ).map( a => a.name )

// Par :
names = animals.reduce(function (list, animal) {
  if ( animal.species == 'dog' ) {
    list.push(animal.name)
  }
  return list
}, [])

// Ça n'est pas forcément une bonne idée car on gagne peu/pas en performance,
// et on perd en lisibilité


// Sum
const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
{
  const sum = numbers.reduce( function (sum, n) {
    return sum + n
  }, 0)
}

// en ES 2015
{
  const sum = numbers.reduce( (sum, n) => sum + n , 0)
}



// 7. Array.forEach
// http://goo.gl/XE0c1Z

// Pour les cas où l'on a simplement besoin d'itérer sur une liste sans
// la retourner (pour console.log par exemple)
const display = () => {}
const returnValue = animals.forEach( animal => { display(animal) } )

// returnValue est undefined
assert(returnValue === undefined)


// Attention, préférer Array.map/filter à Array.forEach pour éviter les effets
// collatéraux
const miscNums = [8, 9, 10, 11]

// Ici oddNums est modifié dans le scope de la fonction f1, alors qu'il n'en
// est pas un argument. La modification de oddNums est un effet collatéral de
// l'exécution de la fonction.
{
  const oddNums = [1, 3, 5, 7]
  miscNums.forEach(function f1(x) {
    if ( x % 2 == 1 ) {
      oddNums.push(x)
    }
  })

  assert.deepEqual(oddNums, [1, 3, 5, 7, 9, 11])
}

// vs
// Ici oddNums n'est pas accédé dans la fonction f2, pas d'effet collatéral
{
  const oddNums = [1, 3, 5, 7]
  const res = oddNums.concat(miscNums.filter(function f2(x) { return x % 2 == 1 } ))

  assert.deepEqual(res, [1, 3, 5, 7, 9, 11])
}
