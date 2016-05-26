// Function that returns a promise that is fulfilled after 500 ms
var myAsyncFunc = function() {
  console.log("myAsyncFunc was called!");
  return new Promise(function(fulfill) {
    setTimeout(function() {
      fulfill("Hello World");
    }, 500)
  });
};

// Call myAsyncFunc twice in parallel
var aPromiseObject = Promise.all([
  myAsyncFunc(),
  myAsyncFunc()
]);

// When the promise from Promise.all() is returns it is an array of results
// from the promises it was given
aPromiseObject.then(function(results) {
  console.log("Got results:");
  console.log(results);
});
