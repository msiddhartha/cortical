#!/usr/bin/env node
"use strict";

var cortical = module.exports = require("koa")();
var router = require("koa-route");
var parseBody = require("koa-better-body")();

//Configuration bootstrap..
var config = require('./config')();

// HTTP bootstrap..
//middleware..
cortical.use(parseBody);

// routes..
var apihandler = require("./routes/routesApi.js");
cortical.use(router.post("/api/sms_sync/" , apihandler.smsSync));

//Rabbitmq bootstrap..
var ysgMessages = require('./lib/ysg_messages.js');
ysgMessages.startConsumers();

if (module.parent) {
  module.exports = cortical.callback();
} else {
	// start it
	cortical.listen(config.port, function () {
    console.log("The app is started. Listening on port "+ config.port);
	console.log("This is the configuration we're running:");
	console.log(config);
  });
}
