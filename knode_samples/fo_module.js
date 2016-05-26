#!/usr/bin/env node

const circle = require('./circle.js');

console.log('--------------');
console.log( `The area of a circle of radius 4 is ${circle.area(4)}`);
console.log('--------------');



console.log(module);

console.log(exports);

console.log(module.exports === exports);


console.log('+++++++++');
console.log(require);
