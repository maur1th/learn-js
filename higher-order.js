'use strict'
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


// 2. Array.filter
// http://goo.gl/Jr7cn
var animals;
animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'fish' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'dog' },
  { name: 'Jimmy',      species: 'fish' }
]

// filtrer les chiens
// pre es5
var dogs
dogs = []
for (var i = 0; i < animals.length; i++) {
  if ( animals[i].species == 'dog' ) {
    dogs.push(animals[i])
  }
}

// es5 -- function composition
dogs = animals.filter(function (animal) {
  return animal.species == 'dog'
})

// ou
var isDog = function (animal) {
  return animal.species == 'dog'
}
dogs = animals.filter(isDog)

// es2015 -- syntactic sugar
dogs = animals.filter( animal => animal.species == 'dog' )


// 3. Array.map
// http://goo.gl/8BSD2u
animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'fish' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'dog' },
  { name: 'Jimmy',      species: 'fish' }
]

// obtenir une liste des noms
// pre es5
var names
names = []
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}

// es5
names = animals.map(function (animal) {
  return animal.name
})

// es2015
names = animals.map( animal => animal.name )


// 4. Chaining
animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'fish' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'dog' },
  { name: 'Jimmy',      species: 'fish' }
]

// obtenir le nom des chiens
names = animals
          .filter( animal => animal.species == 'dog' )
          .map( animal => animal.name )
