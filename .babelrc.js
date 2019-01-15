'use strict'

const env = process.env.NODE_ENV

const isEsm = env === 'esm'
const isDev = !isEsm && env !== 'production'

const presets = [
  ['@babel/env', {
    targets: { node: isDev || 8 },
    loose: true,
    modules: isEsm ? false : 'commonjs'
  }]
]

const plugins = [
  'macros',
  '@babel/plugin-proposal-do-expressions',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ['@babel/plugin-proposal-optional-chaining', { loose: false }]
]

if (!isEsm) {
  plugins.push('add-module-exports')
}

module.exports = {
  presets,
  plugins
}
