// Construct a promise that is fulfilled after 500 ms
var aPromiseObject = new Promise(function(fulfill, reject) {
  // Note: the `new Promise()` constructor is only used when wrapping a function
  // that takes a callback rather then returning a promise. You'll rarely have
  // to use this, if the libraries you use a promise based.
  setTimeout(function() {
    fulfill("Hello World"); // A promise can only have a single result
  }, 500);
  setTimeout(function() {
    // Since reject is called after fulfill, this will have no effect
    reject("Goodbye World");
  }, 100);
});

// Let's supply the promise object with two callbacks, one for success and
// one for errors.
aPromiseObject.then(function(result) {
  console.log("Promise was fulfilled, with result: " + result);
}, function(err) {
  console.log("Promise was rejected with error: " + err);
});
