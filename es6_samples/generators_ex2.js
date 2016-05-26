"use strict";

function* foo(x) {
    yield x + 1;

    var y = yield null;
    return x + y;
}

var gen = foo(5);
console.log(gen.next()); // { value: 6, done: false }
console.log(gen.next()); // { value: null, done: false }
console.log(gen.next(7)); // { value: 13, done: true }

console.log('-----------');

function* goo(x) {
    while(true) {
        x = x * 2;
        yield x;
    }
}

var gen2 = goo(10);
console.log(gen2.next()); // { value: 6, done: false }
console.log(gen2.next()); // { value: null, done: false }
console.log(gen2.next(7)); // { value: 13, done: true }
