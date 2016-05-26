var config = require('../config')()
, thumper = require('../lib/thumper.js');


module.exports.smsSync = function *(next) {
	const clientAck = {'payload': {
									'success': true,
									'error': null							
									}
						};						
	
	thumper.publishMessage('ysg-messages', JSON.stringify(this.request.fields), '');
	
    this.body = JSON.stringify(clientAck, null, 2)
    
    yield next;
};
