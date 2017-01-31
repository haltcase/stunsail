'use strict'

const reqAll = require('req-all')

function to (value) {
  return String(value)
}

Object.assign(to, reqAll())

module.exports = to
