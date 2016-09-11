const assert = require('assert')

// es2015
const list = ['apples', 'oranges', 'kiwis']
list.name = 'groceries'

// Array.map, filter, reduce et forEach ne conviennent pas toujours : il est
// parfois utile d'intérompre l'exécution d'une boucle en cours à l'aide d'un
// `return` ou d'un `break`

// Seule bonne façon de faire avant es6
{
  const res = []
  for ( var i = 0; i < list.length; i++ ) {
    res.push(list[i])
  }

  assert.deepEqual(res, ['apples', 'oranges', 'kiwis'])
}

// L'autre façon de faire, for-in n'est pas une bonne pratique parce que :
// - i est une string et non un Number
// - for-in itère également sur les propriétés
// - for-in n'itère pas dans l'ordre dans certaines circonstances
{
  const res = []
  for ( var i in list ) {
    res.push(list[i])
  }

  assert(res.includes('groceries'))
}

// for-of
// - plus concis que for ( var i = 0; i < list.length; i++ ) {}
// - sans les problèmes de for-in
// - fonctionne avec break, continue et return
{
  const res = []
  for ( var fruit of list ) {
    res.push(fruit)
  }

  assert.deepEqual(res, ['apples', 'oranges', 'kiwis'])
}

// for-of fonctionne également sur d'autres collections
{
  const res = []
  for ( var chr of "abc" ) {
    res.push(chr)
  }

  assert.deepEqual(res, ['a', 'b', 'c'])
}


// Set est une collection dont chaque élément est unique
{
  const res = []
  for ( var n of new Set([1, 1, 2, 3]) ) {  // Set { 1, 2, 3 }
    res.push(n)
  }

  assert.deepEqual(res, [1, 2, 3])
}


// Map est une collection de paires clés valeurs
{
  const res = []
  for ( var [fruit, n] of new Map([['oranges', 2], ['apples', 3]]) ) {
    res.push('There are ' + n + ' ' + fruit)
  }

  assert.deepEqual(res, ['There are 2 oranges', 'There are 3 apples'])
}

// Si vous n'utilisez pas de Map, il est possible de faire quelque chose de
// similaire avec Object.entries (es2017)
if ( !Object.entries ) { require('object.entries').shim() }

{
  const res = []
  for ( var [fruit, n] of Object.entries({ oranges: 2, apples: 3 }) ) {
    res.push('There are ' + n + ' ' + fruit)
  }

  assert.deepEqual(res, ['There are 2 oranges', 'There are 3 apples'])
}
