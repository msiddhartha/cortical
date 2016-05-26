"use strict";
// generator function
function *generator () {
  let baal = yield 'Barry';
  console.log('sss');
  var name =  yield 'Barry';
    console.log('ss2s');

  return name + ', says hello';
}

// iterator object
let iterator = generator();

console.log(iterator.next()); // { value: "Barry",  done: false }
//console.log(iterator.next('Sue')); // { value: "Sue, says hello", done: true }

console.log(iterator.next());
