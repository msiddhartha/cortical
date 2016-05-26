"use strict";

let querystring = require('querystring');

// Parse query string
let credentials = querystring.parse(window.location.search.substr(1));

// If we have credentials, we store them
if (credentials.clientId && credentials.accessToken) {
  // Store credentials in localStorage for later tutorials
  localStorage.credentials = JSON.stringify({
    clientId:     credentials.clientId,
    accessToken:  credentials.accessToken,
    certificate:  credentials.certificate
  });
  console.log("TaskCluster credentials loaded from query string:");
  console.log(credentials);
  console.log("You may now continue to the next step...");
} else {
  console.log("Missing credentials in query string!");
  console.log("Please, start from top of this page...");
}
