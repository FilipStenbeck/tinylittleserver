'use strict';
const version = require('../../package').version;

module.exports = function healthHandler(req, res) {
	res.json({
		status: 'UP',
		version: version
	});
};
