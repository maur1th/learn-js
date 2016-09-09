// es2015
var list = ['apples', 'oranges', 'kiwis']
list.name = 'groceries'

// Array.map, filter, reduce et forEach ne conviennent pas toujours : il est
// parfois utile d'intérompre l'exécution d'une boucle en cours à l'aide d'un
// `return` ou d'un `break`

// Seule bonne façon de faire avant es6
for ( var i = 0; i < list.length; i++ ) {
  console.log(list[i])
}
console.log()

// for-in est mauvais parce que :
// - i est une string et non un Number
// - for-in itère également sur les propriétés
// - for-in n'itère pas dans l'ordre dans certaines circonstances
for ( var i in list ) {
  console.log(list[i])
}
console.log()

// for-of
// - plus concis que for ( var i = 0; i < list.length; i++ ) {}
// - sans les problèmes de for-in
// - fonctionne avec break, continue et return
for ( var fruit of list ) {
  console.log(fruit)
}
console.log()

// for-of fonctionne également sur d'autres collections
for ( var chr of "abc" ) {
  console.log(chr)
}
console.log()

// Set est une collection dont chaque élément est unique
assert(new Set([1, 2, 3, 3]) === new Set([1, 2, 3]))
for ( var n of new Set([1, 1, 2, 3]) ) {
  console.log(n)
}
console.log()

// Map est une collection de paires clés valeurs
for ( var [fruit, n] of new Map([['oranges', 2], ['apples', 3]]) ) {
  console.log(fruit, n)
})

// Si vous n'utilisez pas de Map, il est possible de faire quelque chose de
// similaire avec Object.entries (es2017)
for ( var [fruit, n] of Object.entries({ oranges: 2, apples: 3 }) ) {
  console.log(fruit, n)
}
