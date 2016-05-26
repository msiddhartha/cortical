"use strict";
// Thunk
let get = function (url) {

  // return a function, passing in our callback
  return function (callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
      let response = xhr.responseText;
      if(xhr.readyState != 4) return;
      if (xhr.status === 200) {
        callback(null, response);
      }
      else {
        callback(response, null);
      }
    };
    xhr.send();
  };
};
let getTweets = function* () {
  let totalTweets = [];
  let data;
	console.log('sss');
  // pause. On `iterator.next()` get the 1st tweet and carry on.
  data = yield get('https://api.myjson.com/bins/2qjdn');
  totalTweets.push(data);

  // pause. On `iterator.next()` get the 2nd tweet and carry on.
  data = yield get('https://api.myjson.com/bins/3zjqz');
  totalTweets.push(data);

  // pause. On `iterator.next()` get the 3rd tweet and carry on.
  data = yield get('https://api.myjson.com/bins/29e3f');
  totalTweets.push(data);

  // log the tweets
  console.log(totalTweets);
};

// create the iterator
var iterator = getTweets();

// call the first yield (pauses)
let result = iterator.next();

// our value the return function from get(url), so call it and pass in a callback
result.value(function(err, res){
  if (err) console.log('do something with this error', err);

  // get the response
  // We need to call next again and pass in the response to assign it back to a variable
  let result = iterator.next(res);
  result.value(function(err, res){
    if (err) console.log('do something with this error', err);

    // get the response
    // We need to call next again and pass in the response to assign it back to a variable
    let result = iterator.next(res);
    result.value(function(err, res){
      if (err) console.log('do something with this error', err);

      // get the response
      // We need to call next again and pass in the response to assign it back to a variable
      let result = iterator.next(res);
    })
  });
});
