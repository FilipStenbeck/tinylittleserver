'use strict';
const env = require('./lib/env');

const express = require('express');

const healthHandler = require('./lib/handlers/healthHandler');
const rootHandler = require('./lib/handlers/rootHandler');


var app = express();

/*
* Configure Express
*/
app.use(function(req, res, next) {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Max-Age', '3600');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Cache-Control', 'max-age=120');
	next();
});


/*
* Configure cache
*/

var apicache = require('apicache').options({
	debug: env.API_CACHE_DEBUG,
	defaultDuration: env.API_CACHE_DURATION,
	enabled: env.API_CACHE_ENABLED
}).middleware;

/*
* Configure routes
*/
app.get('/', apicache(), rootHandler);
app.get('/health', apicache(), healthHandler);

var port = env.PORT;
console.log("Running on port: %s", env.PORT);
app.listen(port);
