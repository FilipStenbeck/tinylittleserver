'use strict';

module.exports = (consultants) => {
	return {
		data: consultants,
		meta: {
			id: 'consultants',
			type: 'beamon_people',
			count: consultants.length
		}
	};
};
