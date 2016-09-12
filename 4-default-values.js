const assert = require('assert')
console.log('test 4')
// Il est possible d'attribuer une valeur par défaut à un argument
// cette valeur remplacera tout argument dont la valeur est `undefined`
var f = function (n=2) {
  return n
}

assert(f() === 2)           // => 2
assert(f(3) === 3)          // => 2
assert(f(null) === null)    // => null
assert(f(undefined) === 2)  // => 2


// Fonctionne également avec les destructuring assignments
const process = ({date, summary, location:place='Home'}) => {
  assert(date === 'YYYY-MM-DD HH:mm:ss')
  assert(summary === 'Lunch with Sarah')
  assert(place === 'Home')
}

const query = {
  date: 'YYYY-MM-DD HH:mm:ss',
  summary: 'Lunch with Sarah',
}

process(query)
