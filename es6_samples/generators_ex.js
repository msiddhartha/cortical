"use strict";
// generator function - declared with *
function *generator () {
  yield 'wow';
  yield 'this';
  yield 'is';
  yield 'sweet';
}

// create and iterator object
let iterator = generator();
 
let val = iterator.next(); 

console.log(val);

let val2 = iterator.next(); 

console.log(val2);

let val3 = iterator.next(); 

console.log(val3);
