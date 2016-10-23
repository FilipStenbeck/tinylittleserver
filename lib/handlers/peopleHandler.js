'use strict';
const people = require('../../data/beamon_people.json');
const model = require('../models/consultants');

const validatedOffset = (offset) => offset = Number(offset) || 0;
const validatedSize = (size) => size = Number(size) || people.length;

module.exports = (req, res) =>  {
	let { offset, size } = req.query;
	let result = people.slice(validatedOffset(offset), validatedSize(size) + validatedOffset(offset));
	return res.json(model(result, people.length));
}
