"use strict";

var amqp = require('amqplib')
, co =  require('co')
, config = require('./../config')();
;

let amqpConn = null;

function getRabbitMqConnection() {
	var url = config.rabbitUrl;
	//if(!amqpConn) {
		
		var fn = co.wrap(getAmqpConnection);
		
		return fn(url).then(conn => {

		  conn.on("error", err => {
			console.error("[AMQP] conn error: ", err.message);
			// if (err.message !== "Connection closing") {
			//   console.error("[AMQP] conn error", err.message);
			// }
		  });

		  conn.on("close", () => {
			console.error("[AMQP] reconnecting");
			return setTimeout(connect, 1000);
		  });

		  console.log("[AMQP] connected");
		  amqpConn = conn;
		  
		  
		  return conn;
		})
		.catch(err => {
		  console.warn('[AMQP] connect error: ', err);
		  return setTimeout(connect, 1000);
		});
	//}	
}

function *getAmqpConnection(url) {    
    return yield amqp.connect(url);
}

exports.getRabbitMqConnection = getRabbitMqConnection;
