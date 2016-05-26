#!/usr/bin/env node

"use strict";

function *foo() {
    var x = 1 + (yield "foo");
    console.log(x);
    return 2;
}

let foo_gen = foo();
let foo_res = foo_gen.next();
console.log(foo_res);
//restart..
//foo_gen.next();

let foo_res2 = foo_gen.next(3);
console.log(foo_res2);

let foo_res3 =foo_gen.next();
console.log(foo_res3);

foo_gen.next();
