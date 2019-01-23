



/**************************
**   PARTIAL APPLICATION
***************************/

function add(x, y, z) {
  return x + y + z
}

function partiallyApply(func, x, y) {
  return function(z) {
    return func(x, y, z)
  }
}

var add5and2 = partiallyApply(add, 5, 2)

console.log(add5and2(3))
console.log(add(5, 2, 3))




/**************************
**   RECURSION
***************************/

function loop(i) {
  console.log("i is " + i)
  if (i < 10) {
    loop(i + 1)
  }
}

loop(0)
