

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

var employees = [
  { name: "John",  salary: 50000  },
  { name: "Susan", salary: 60000  },
  { name: "Greg",  salary: 100000 },
  { name: "Mary",  salary: 120000 }
]

var dueForARaise = _.filter(employees, function(employee) {
  return employee.salary < 70000
})

console.log(dueForARaise)



/***************
**   EVERY
****************/
var numbers = [ 3, 5, 7, 9, 11, 13 ]

var arrayIsAllEven = _.every(numbers, function(element) {
  return element % 2 === 0
})

console.log("Array is all even?: " + arrayIsAllEven)




/***************
**   SOME
****************/
var numbers = [ 3, 5, 7, 9, 11, 13 ]

var arrayIsAllEven = _.every(numbers, function(element) {
  return element % 2 === 0
})

console.log("Array is all even?: " + arrayIsAllEven)



/***************
**   REDUCE
****************/

var shoppingList = [
  { name: "Eggs",    price: 4.99 },
  { name: "Milk",    price: 3.99 },
  { name: "Bananas", price: 2.79 },
  { name: "Beer",    price: 6.99 }
]

var totalCost = _.reduce(shoppingList, function(acc, item) {
  return acc + item.price
}, 0)

console.log(totalCost)
