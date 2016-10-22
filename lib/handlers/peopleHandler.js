'use strict';
const people = require('../../data/beamon_people.json');
const model = require('../models/consultants');

module.exports = (req, res) =>  res.json(model(people));
