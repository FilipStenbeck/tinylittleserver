'use strict';

////////////////////////////////////////
//
// API Cache Config
//
////////////////////////////////////////

// Enable or disable the API cache. Enabled by default
module.exports.API_CACHE_ENABLED = process.env.API_CACHE_ENABLED ? Boolean(process.env.API_CACHE_ENABLED) : true;
// Enable or disable the apicache debug output. Disabled by default.
module.exports.API_CACHE_DEBUG = process.env.API_CACHE_DEBUG ? Boolean(process.env.API_CACHE_DEBUG) : false;
// Set the API cache duration (in ms). Defaults to 2 seconds.
module.exports.API_CACHE_DURATION = process.env.API_CACHE_DURATION ? Number(process.env.API_CACHE_DURATION) : 2000;


////////////////////////////////////////
//
// Misc application
//
////////////////////////////////////////

/**
 * The port that the API is bound to
 */
module.exports.PORT = process.env.PORT || 3000;

/**
 * If true all debug logging will be formatted in a key-value format required by Kibana
 */
module.exports.KIBANA_ENABLED = process.env.KIBANA_ENABLED === 'true';


/**
 * If the event loop is blocked for more that the specified threshold (in ms) a warning will be logged.
 *
 * If set to 0 it will be disabled. Threshold below 10ms is not supported.
 */
module.exports.BLOCKED_CHECK_THRESHOLD = (process.env.BLOCKED_CHECK_THRESHOLD | 0);

/**
* To which environmet should the links point to stage or prod
*/
module.exports.LINK_ENVIRONMENT = process.env.LINK_ENVIRONMENT || 'production';
