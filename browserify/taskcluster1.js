"use strict";

let querystring = require('querystring');

// Redirect
window.location = "https://login.taskcluster.net?" + querystring.stringify({
  // Target to redirect back to, in this case we want to back to the tutorial
  target:       window.location.href,
  // Description to explain to the user why we want his credentials
  description:  "Tutorial needs credentials to do things, we're not evil :)"
});
