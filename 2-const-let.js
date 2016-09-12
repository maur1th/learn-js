const assert = require('assert')
console.log('test 2')
// En JS les blocks ne sont pas des scopes
// Le scope d'une variable `var` déclarée dans un bloc couvre donc toute sa
// fonction
while ( true ) {
  var foo = 'Foo'
  break
}
assert( foo == 'Foo' )


// 1. let
// `let` est comme `var` mais son scope est limité à son bloc
assert.throws( () => {
  while ( true ) {
    let bar = 'Bar'
    break
  }
  log
}, ReferenceError )

// utiliser une variable déclarée avec let avant sa déclaration est une erreur
assert.doesNotThrow( () => {
  baz
  var baz = 'Baz'
})

assert.throws( () => {
  foo
  let foo = 'Foo'
}, ReferenceError )

// redéclarer une variable déclarée avec let est une erreur
// assert.throws( () => {
//   let bar = 'Bar'
//   let bar = 'BAR'
// }, SyntaxError )


// 2. `const`
// `const` est comme `let` mais elle ne peut pas être réassignée en dehors de
// sa déclaration
assert.throws( () => {
  const baz = 'Baz'
  baz = 'BAZ'
}, TypeError )

// Attention, un type mutable assigné avec const ne le rend pas immutable pour
// autant
const t = [1, 2, 3]
t.push(4)
assert.deepEqual(t, [1, 2, 3, 4])
