const assert = require('assert')
console.log('test 7')
// ES 2015
// Les template strings permettent de faire de l'interpolation de chaine de
// caractères en javascript
var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'fish' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'dog' },
  { name: 'Jimmy',      species: 'fish' },
]

const res = []
for ( let { name, species } of animals ) {
  res.push(`${name} is a ${species}`)
}
assert.deepEqual(res, [
  'Fluffykins is a rabbit',
  'Caro is a fish',
  'Hamilton is a dog',
  'Harold is a fish',
  'Ursula is a dog',
  'Jimmy is a fish',
])

// Des backticks permettent de délimiter une template string
// Les substitutions sont délimitées par ${...}
// Les substitutions peuvent contenir tout code js évaluable :
//   variables, opérations, appels à une fonction

const { holder, current, savings } = { holder: 'Anna', current: 10, savings: 30 }
assert(`${holder} has ${current + savings} in the bank` === 'Anna has 40 in the bank')

const sum = (...amounts) => amounts.reduce( (p, c) => p + c , 0)
assert(`${holder} has ${sum(current, savings)} in the bank` === 'Anna has 40 in the bank')
