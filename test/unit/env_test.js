require("chai").should();
//require('child_process');
var env = require('../../lib/env');

describe('env', function () {



	describe("env.API_CACHE_ENABLED", function () {
		it("should default to true", function () {
			env.API_CACHE_ENABLED.should.equal(true);
		});
	});

	describe("env.API_CACHE_DEBUG", function () {
		it("should default to false", function () {
			env.API_CACHE_DEBUG.should.equal(false);
		});
	});

	describe("env.API_CACHE_DURATION", function () {
		it("should default to 2 seconds (2000ms)", function () {
			env.API_CACHE_DURATION.should.equal(2000);
		});
	});

	describe("env.PORT", function () {
		it("should default to 3000", function () {
			env.PORT.should.equal(3000);
		});
	});

});
