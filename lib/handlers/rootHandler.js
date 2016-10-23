'use strict';

module.exports = function rootHandler(req, res) {
	res.type('text/plain');
	res.send('A tiny little server. Try /health or /people');
};
