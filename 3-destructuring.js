const assert = require('assert')
console.log('test 3')
// En ES 2015, il est possible de déstructurer les arrays et les objets
// http://goo.gl/ay7XRY


// 1. Les Arrays
const peopleQueue = ['Joe', 'Clara', 'Jenn', 'Philip', 'Xavier']

// < ES 2015
{
  const first = peopleQueue[0]
  const second = peopleQueue[1]
  const third = peopleQueue[2]

  assert(first === 'Joe')
  assert(second === 'Clara')
  assert(third === 'Jenn')
}

// ES 2015
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

// < ES 2015
{
  const date = query.date
  const summary = query.summary

  assert(date === 'YYYY-MM-DD HH:mm:ss')
  assert(summary === 'Lunch with Sarah')
}

// ES 2015
{
  const {summary, date} = query

  assert(date === 'YYYY-MM-DD HH:mm:ss')
  assert(summary === 'Lunch with Sarah')
}

// changer le nom de la variable
{
  const {summary: note, date} = query

  assert(date === 'YYYY-MM-DD HH:mm:ss')
  assert(note === 'Lunch with Sarah')
}


// 3. Imbrications
{
  const record = {
    name: 'John',
    age: 21,
    hobbies: [
      {
        name: 'swimming',
        frequency: 'twice a week',
      },
      {
        name: 'painting',
        frequency: 'every sunday morning',
      }
    ],
  }

  const {name, hobbies: [{name: firstHobby}, {name: secondHobby}]} = record

  assert(name === 'John')
  assert(firstHobby === 'swimming')
  assert(secondHobby === 'painting')
}


// 4. Dans les fonctions

// < ES 2015
function process(query) {
  const summary = query.summary
  const date = query.date

  if ( !(summary && date) ) {
    throw new Error('Invalid query')
  }

  // do stuff
}

// ES 2015
function process({ summary, date }) {
  if ( !(summary && date) ) {
    throw new Error('Invalid query')
  }

  // do stuff
}
