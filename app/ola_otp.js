var thumper = require('./thumper')
;

var message_consumer = {
    exchange: 'ola-otp',
    queue: '',
    routingKey: '',
    callback: function(msg, headers, deliveryInfo) {

    }
};

var message_type_consumer = {
    exchange: 'ola-otp',
    queue: '',
    routingKey: '',
    callback: function(msg, headers, deliveryInfo) {

    }
};

exports.startConsumers = function() {
    thumper.startConsumers([
		message_consumer,
		message_type_consumer
    ]);  
};
