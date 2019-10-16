/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.window binding is a bad, because it's not good behavior. the this keyword always trying to point to the 
	 window. You can prevent by using "use strict" accidentally binding to the window.
 
 * 2. Implicit Binding using objects and methods. Methods are just function inside of 
 	  objects. it's unavoidable, it's obvious what i'm pointing that by using the keyword "this".
	  
 * 3.
 * 4.
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding

function hello(name) {
  'use strict';
  return `Hello ${this.name}`;
}

console.log(hello('wed 19'));

// Principle 2
// code example for Implicit Binding

const strangerThings = {
  name: 'Dustin',
  age: 14,
  candy: '3 Musketeers',
  eat: function() {
    return `${this.name} love to eat ${this.candy}`;
  }
};

const newStrangerThings = {
  name: 'Mike',
  age: 14,
  candy: 'M&M',
  eat: function() {
    return `${this.name} love to eat ${this.candy}`;
  }
};

console.log(strangerThings.eat());
console.log(newStrangerThings.eat());

// Principle 3
// code example for New Binding

// Principle 4
// code example for Explicit Binding
