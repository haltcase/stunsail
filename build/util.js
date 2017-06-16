const fs = require('fs')
const path = require('path')

const SOURCE_DIRECTORY = path.resolve(__dirname, '..', 'src')
const DOCS_SOURCE_DIRECTORY = path.resolve(__dirname, '..', 'docs-src')

const KEYWORDS = new Set([
  'if',
  'in',
  'do',
  'var',
  'for',
  'let',
  'new',
  'try',
  'this',
  'else',
  'case',
  'void',
  'with',
  'enum',
  'null',
  'true',
  'false',
  'async',
  'await',
  'while',
  'break',
  'catch',
  'throw',
  'const',
  'yield',
  'class',
  'super',
  'return',
  'typeof',
  'delete',
  'switch',
  'export',
  'import',
  'default',
  'finally',
  'extends',
  'function',
  'continue',
  'debugger',
  'instanceof'
])

function camelize (string) {
  return string.replace(
    /[-|.](\w)/g,
    (m, p1) => p1.toUpperCase()
  )
}

function isKeyword (word) {
  return KEYWORDS.has(word)
}

function getFiles (atPath, additionalFilters = []) {
  let files = fs.readdirSync(atPath)

  let filters = [
    file => file.slice(-3) === '.js',
    file => file !== 'index.js'
  ].concat(additionalFilters)

  return files.reduce((list, current) => {
    if (filters.every(filter => filter(current))) {
      list.push(current)
    }

    return list
  }, [])
}

module.exports = {
  camelize,
  getFiles,
  isKeyword,

  SOURCE_DIRECTORY,
  DOCS_SOURCE_DIRECTORY
}
