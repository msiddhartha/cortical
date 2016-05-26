const PI = Math.PI;

exports.area = (r) => PI * r * r;

exports.circumference = (r) => 2 * PI * r;

console.log('>>>>>>>>>>>>>>>>>');
console.log(module);

console.log(exports);

console.log(module.exports === exports);

console.log('<<<<<<<<<<<<<<<<<<');
