var services = require('./services.js')
, co =  require('co')
;

/**
 * Consumption patterns...
 * */

/**
 * consumes can be either an array with consumers or an object consumer.
 * a consumer has this shape:
 * {exchange: exchangeName, routingKey: routingKey, callback: fn}
 */
function genericStartConsumers(consumers, isAnon) {
    var consumerFunc = isAnon ? getAnonConsumer : getConsumer;
        
	if (consumers instanceof Array) {
		for(var i=0; i < consumers.length; i++) {
			consumerFunc(consumers[i].exchange, consumers[i].queue, 
						 consumers[i].routingKey, consumers[i].callback);
		}
	} else {
		consumerFunc(consumers.exchange, consumers.queue, 
					 consumers.routingKey, consumers.callback);
	}
   
}

function startConsumers(consumers) {
    genericStartConsumers(consumers, false);
}

function startAnonConsumers(consumers) {
    genericStartConsumers(consumers, true);
}

function getConsumer(exchangeName, queueName, routingKey, callback) {
    var exchange = {
        name: exchangeName,
        type: 'direct',
        opts: { durable: true, autoDelete: false}
    };

    var queue = {
        name: queueName,
        opts: {exclusive: false, durable: true, autoDelete: false}
    };
    
    installCallback(exchange, queue, routingKey, callback);
}

function getAnonConsumer(exchangeName, queueName, routingKey, callback) {
    var exchange = {
        name: exchangeName,
        type: 'fanout',
        opts: { durable: true, autoDelete: false}
    };
    var queue = {
        name: queueName,
        opts: {exclusive: true, durable: false, autoDelete: true}
    };    
    installCallback(exchange, queue, routingKey, callback);
}

function installCallback(exchange, queue, routingKey, callback) {	
	return co(function* () {				
		var conn = yield services.getRabbitMqConnection();			
		var channel = yield conn.createChannel();					
		var ex = yield channel.assertExchange(exchange.name, exchange.type, exchange.opts);	
		var q =  yield channel.assertQueue(queue.name, queue.opts);  		
		var bind = yield channel.bindQueue(q.queue, ex.exchange, routingKey);				
		channel.consume(q.queue, function(msg){
								console.log(" [x] %s: '%s'", msg.fields.routingKey, msg.content.toString());
								callback(msg);
							}, {noAck: true}
						);		
    }).catch(err => {
		return `Error: ${err}`;
	});
}

/**
 * Publishing patterns...
 * */
 
function publishMessage(exchangeName, msg, routingKey) {	
	co(function*(){		
				var conn = yield services.getRabbitMqConnection();
				var exchange = {
						name: exchangeName,
						type: 'direct',
						opts: { durable: true, autoDelete: false}
					};
				var channel = yield conn.createChannel();		
				var ex = yield channel.assertExchange(exchange.name, exchange.type, exchange.opts);	
				var published = yield channel.publish(ex.exchange, routingKey, new Buffer(msg), {persistent: true});		
				console.log(published);		
		});    
}

function publishPubSubMessage(exchangeName, msg, routingKey) {
	return co(function*(){
		var conn = services.getRabbitMqConnection();   
        var exchange = {
            name: exchangeName,
            type: 'fanout',
            opts: { durable: true, autoDelete: false}
        };
        var channel = yield conn.createConfirmChannel();		
		var ex = yield channel.assertExchange(exchange.name, exchange.type, exchange.opts);				 
		var published = yield channel.publish(ex.exchange, routingKey, new Buffer(msg), {persistent: true});
		console.log(published);		
	});
}

exports.startConsumers = startConsumers;
exports.startAnonConsumers = startAnonConsumers;
exports.publishMessage = publishMessage;
exports.publishPubSubMessage = publishPubSubMessage;
