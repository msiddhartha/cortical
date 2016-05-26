#!/usr/bin/env node
"use strict";

var fs = require('fs');

function *gen1(){
	yield 1;
	yield 2;
	yield function (text) {
		return function () {
			return 'baal' + text;
		}
	};
	
	yield function exists(filename) {
		return function(done){
			fs.stat(filename, function(err, res){
				console.log(res);
				done(null, !err);
			});
		};
	};
}


let g = gen1();
let g1 = g.next();

console.log(g1);


let g2 = g.next();

console.log(g2);



let g3 = g.next();

console.log(g3.value(33)());

let g4 = g.next();

console.log(g4.value('/home/siddhartham/Documents/core_work/repos/Eye-of-Sauron/eventor/es6_samples/sssv.js')(function(a,b){
		console.log(a);
		console.log(b);
		console.log('done..');
		return 2;
	}));
