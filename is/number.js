'use strict'

const getType = require('../get-type')

module.exports = value => getType(value) === 'number'
