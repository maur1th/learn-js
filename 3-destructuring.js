const assert = require('assert')
// En es2015, il est possible de déstructurer les arrays et les objets
// http://goo.gl/ay7XRY


// 1. Les Arrays
const peopleQueue = ['Joe', 'Clara', 'Jenn', 'Philip', 'Xavier']

// < es5
{
  const first = peopleQueue[0]
  const second = peopleQueue[1]
  const third = peopleQueue[2]

  assert(first === 'Joe')
  assert(second === 'Clara')
  assert(third === 'Jenn')
}

// es2015
{
  const [first, second, third] = peopleQueue

  assert(first === 'Joe')
  assert(second === 'Clara')
  assert(third === 'Jenn')
}

// il est possible de passer certains items
{
  const [,,third] = peopleQueue

  assert(third === 'Jenn')
}

// il est possible de capturer la fin de l'array en utilisant un `rest` pattern
{
  const [first, second, ...tail] = peopleQueue

  assert(first === 'Joe')
  assert(second === 'Clara')
  assert.deepEqual(tail, ['Jenn', 'Philip', 'Xavier'])
}

// pour les éléments qui n'existent pas, la valeur est `undefined`
{
  const fruits = ['apple', 'orange']
  const [,,,fourth] = fruits

  assert(fourth === undefined)
}



// 2. Les objets
const query = {
  date: 'YYYY-MM-DD HH:mm:ss',
  summary: 'Lunch with Sarah',
}

// < es5
{
  const date = query.date
  const summary = query.summary

  assert(date === 'YYYY-MM-DD HH:mm:ss')
  assert(summary === 'Lunch with Sarah')
}

// es2015
{
  const {summary, date} = query

  assert(date === 'YYYY-MM-DD HH:mm:ss')
  assert(summary === 'Lunch with Sarah')
}
