

var _ = require("lodash")


/***************
**   MAP
****************/

var numbers = [ 1, 2, 3, 4, 5 ]
var numbersCubed = _.map(numbers, function(element) {
  return element * element * element
})

console.log(numbersCubed)


/***************
**   FILTER
****************/