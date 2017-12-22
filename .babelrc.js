'use strict'

const env = process.env.NODE_ENV

const isEsm = env === 'esm'
const isDev = !isEsm && env !== 'production'

const presets = [
  ['@babel/env', {
    targets: { node: isDev || 6 },
    loose: true,
    modules: isEsm ? false : 'commonjs'
  }],
  '@babel/stage-1'
]

const plugins = []

if (!isEsm) {
  plugins.push('add-module-exports')
}

module.exports = {
  presets,
  plugins
}
