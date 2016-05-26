#!/usr/bin/env node

const EventEmitter = require('events');
const util = require('util');

function MyEmitter() {
  EventEmitter.call(this);
}
util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred2!');
});
myEmitter.on('event', () => {
  //setTimeout(() => { 
	  console.log('an event occurred1!');
 // }, 1000);
});

myEmitter.on('event', () => {
  console.log('an event occurred3!');
});
myEmitter.on('event', () => {
  console.log('an event occurred4!');
});
myEmitter.on('event', () => {
  console.log('an event occurred5!');
});
myEmitter.on('event', () => {
  console.log('an event occurred6!');
});
myEmitter.on('event', () => {
  console.log('an event occurred7!');
});
myEmitter.on('event', () => {
  console.log('an event occurred8!');
});
myEmitter.on('event', () => {
  console.log('an event occurred9!');
});
myEmitter.on('event', () => {
  console.log('an event occurred10!');
});
myEmitter.on('event', () => {
  console.log('an event occurred11!');
});
myEmitter.on('event', () => {
  console.log('an event occurred12!');
});
myEmitter.on('event', () => {
  console.log('an event occurred12!');
});
myEmitter.on('event', () => {
  console.log('an event occurred12!');
});
myEmitter.on('event', () => {
  console.log('an event occurred12!');
});
myEmitter.emit('event');
console.log(EventEmitter.defaultMaxListeners);
console.log(myEmitter.getMaxListeners());
