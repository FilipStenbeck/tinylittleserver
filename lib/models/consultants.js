'use strict';

module.exports = (consultants, total) => {
	return {
		data: consultants,
		meta: {
			id: 'consultants',
			type: 'beamon_people',
			count: consultants.length,
			total: total
		}
	};
};
