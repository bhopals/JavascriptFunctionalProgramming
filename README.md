## Functional Programming with JAVA Script

This project contains how to bring your javascript expertise to a new level by incorporating Functional Programming style.



### Installation

**NODEJS** - Node JS allows you to run JAVASCRIPT code outside the browser. [Download](https://nodejs.org/en/download/)

**Loadash**- A NPM package that have built-in methods 
	``npm install loadash --save ``





### Core Concepts of Functional Programming

	- Keep functions and data separate 
	- Avoids state change and mutable data
	- Treats functions as first class citizens




#### First-Class Functions 

In JavaScript, functions are first-class objects, which means that the language treats functions as values so they can be:

 - stored in a variable, object, or array
 - passed as an argument to a function
 - returned from a function




#### Higher-Order Functions 

A function that takes a function as an argument, returns a function or both




#### Popular Array Functions
 -  **_.map**    - Returns Modified list of passed array object by applying function to all the elements and return new Object array.
 -  **_.filter** - Returns Filtered list of the array if passed function condition evaluated to TRUE.
 -  **_.every**  - Returns TRUE if the function we pass returns true for all the elements.
 -  **_.some**   - Returns TRUE if the fuction we pass returns true for any of the passed element.
  - **_.reduce** - Returns accumulated response by piping OUTPUT of first element to next element till the end.




#### Advance Concepts
 -  **Partial Application**  - Apply partial elements to the called function
 -  **Recursion**  - Function calling iteself


### Java Script Classes

- Syntactic Sugar over prototypes as it inherits all the methods and prototypes
- Class changes get passed down 
- Classes aren't hoisted so has to be declared first and then should be used
- Two ways we can declare classes in javascript :
	- class declarations  
	- class expressions

#### Difference Between Function and Classes

	Functions    
		- Hoisted
		- Can be overwritten

	Classes
		- Not Hoisted
		- Can't be overwritten (can only be extended)


#### Mixins
 You can extend one class at a time, but sometimes you want to extend multiple classes and this is where mixins are useful. As per the GOF pattern, this is one case where we favour composition over inheritance.
 With extend we **Inherit** from a parent class, with mixins we **compose** into a new class.


### Running Demos

	To execute code of below files, run with these commands

	node 01_function_substitution.js
	node 02_create_high_order_function.js
	node 03_array_functions_loadash.js
	node 04_combining_javascript_functions.js
	node 05_partial_application_and_recursion_functions.js

