'use strict'

const env = process.env.NODE_ENV

const isEsm = env === 'esm'
const isDev = !isEsm && env !== 'production'

const presets = [
  ['@babel/env', {
    targets: { node: isDev || 12 },
    loose: true,
    modules: isEsm ? false : 'commonjs'
  }]
]

const plugins = [
  'macros',
  '@babel/plugin-syntax-jsx',
  '@babel/plugin-proposal-do-expressions',
  '@babel/plugin-proposal-export-namespace-from',
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }]
]

if (!isEsm) {
  plugins.push('add-module-exports')
}

module.exports = {
  presets,
  plugins
}
