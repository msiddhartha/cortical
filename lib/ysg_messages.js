var thumper = require('./thumper')
;

var message_db_log_consumer = {
    exchange: 'ysg-messages',
    queue: 'ysg_msg_db_log',
    routingKey: '',
    callback: function(msg, headers, deliveryInfo) {
		console.log('Consumed by message_db_log_consumer...');
		console.log(msg);
		console.log(msg.content);
    }
};

var ola_driver_login_consumer = {
    exchange: 'ysg-messages',
    queue: 'ola_driver_login_queue',
    routingKey: '',
    callback: function(msg, headers, deliveryInfo) {
        
    }
};

var ola_driver_logout_consumer = {
    exchange: 'ysg-messages',
    queue: 'ola_driver_logout_queue',
    routingKey: '',
    callback: function(msg, headers, deliveryInfo) {

    }
};

var ola_driver_ride_on_consumer = {
    exchange: 'ysg-messages',
    queue: 'ola_driver_ride_on_queue',
    routingKey: '',
    callback: function(msg, headers, deliveryInfo) {
        
    }
};

var ola_driver_ride_off_consumer = {
    exchange: 'ysg-messages',
    queue: 'ola_driver_ride_off_queue',
    routingKey: '',
    callback: function(msg, headers, deliveryInfo) {
        
    }
};

var ola_otp_consumer = {
    exchange: 'ysg-messages',
    queue: 'ola_otp_queue',
    routingKey: '',
    callback: function(msg, headers, deliveryInfo) {
        
    }
};

exports.startConsumers = function() {
    thumper.startConsumers([
		message_db_log_consumer,	// all messages are persisted to database...but also the type of message is critical..to persist..sms exchange        
        ola_driver_login_consumer, // picks from message_exchange..
        ola_driver_logout_consumer, 
        ola_driver_ride_on_consumer,
        ola_driver_ride_off_consumer,
        ola_otp_consumer, // publish to slack...
    ]);  
};
