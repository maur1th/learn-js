// Il est possible d'attribuer une valeur par défaut à un argument
// cette valeur par défaut remplacera tout argument dont la valeur est undefined
var f = function (n=2) {
  return n
}

assert(f() === 2)           // => 2
assert(f(3) === 3)          // => 2
assert(f(null) === null)    // => null
assert(f(undefined) === 2)  // => 2
