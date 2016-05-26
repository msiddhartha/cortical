
var config = {
	local: {
		mode: 'local',
		port: 3000,
		rabbitUrl: 'amqp://localhost'
	},
	staging: {
		mode: 'staging',
		port: 4000,
		rabbitUrl: ''
	},
	prod: {
		mode: 'prod',
		port: process.env.PORT || 5000,
		rabbitUrl: ''
	}
};

module.exports = function (mode) {
	return config[mode || process.argv[2] || 'local'] || config.local;
};
