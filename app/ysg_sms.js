var thumper = require('./thumper')
;

var message_consumer = {
    exchange: 'ysg-sms-intercept',
    destination: 'ysg-messages',
    routingKey: '',
    callback: function(msg, headers, deliveryInfo) {

    }
};

exports.startConsumers = function() {
    /*thumper.bindExchanges([
		message_consumer
    ]);*/
};
