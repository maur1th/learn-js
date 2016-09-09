// es2015
// Les template strings permettent de faire de l'interpolation de chaine de
// caractères en javascript
var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro',       species: 'fish' },
  { name: 'Hamilton',   species: 'dog' },
  { name: 'Harold',     species: 'fish' },
  { name: 'Ursula',     species: 'dog' },
  { name: 'Jimmy',      species: 'fish' }
]

for ( { name, species } of animals ) {
  console.log(`${name} is a ${species}`)
}

// Des backticks permettent de délimiter une template string
// Les substitutions sont délimitées par ${...}
// Les substitutions peuvent contenir tout code js évaluable :
//   variables, opérations, appels à une fonction

var { holder, current, savings } = { holder: 'Anna', current: 10, savings: 30 }
console.log(`${holder} has ${current + savings} in the bank`)

const sum = (...amounts) => amounts.reduce( (p, c) => p + c , 0)
console.log(`${holder} has ${sum(current, savings)} in the bank`)
