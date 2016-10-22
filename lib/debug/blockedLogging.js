'use strict';

var env = require('../env');
var warn = require('debug')('svtse:server:blockedlogging:warn');

if (env.BLOCKED_CHECK_THRESHOLD > 0) {
	if (env.BLOCKED_CHECK_THRESHOLD < 10) {
		warn("BLOCKED_CHECK_THRESHOLD has to be at least 10ms but was %sms. Blocked logging will not be enabled.", env.BLOCKED_CHECK_THRESHOLD);
	} else {
		var blocked = require('blocked');
		blocked(function (ms) {
			if (ms >= env.BLOCKED_CHECK_THRESHOLD) {
				warn('Event loop blocked for %sms', ms);
			}
		});
	}


}
