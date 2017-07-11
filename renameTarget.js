/*
 * rename foo to bar
 */
var foo = {asd: 1, foo: 2}

function fn () {
  var foo = 2
  return foo
}

fn()
console.log(foo)
