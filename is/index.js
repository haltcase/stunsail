'use strict'

const reqAll = require('req-all')
const equal = require('./equal')

Object.assign(equal, reqAll())

module.exports = equal
