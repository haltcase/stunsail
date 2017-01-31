'use strict'

const reqAll = require('req-all')
const isEqual = require('lodash.isequal')

function is (value, compare) {
  return isEqual(value, compare)
}

Object.assign(is, reqAll())

module.exports = is
