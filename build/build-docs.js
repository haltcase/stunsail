'use strict'

const fs = require('fs')
const path = require('path')
const dedent = require('dedent')

const pkg = require('../package')

const src = path.resolve(__dirname, '..', 'src')
const docSrc = path.resolve(__dirname, '..', 'docs-src')
const outputPath = path.resolve(__dirname, '..', 'docs', 'api.md')

const camelize = str =>
  str.replace(/[-|.](\w)/g, (m, p1) => p1.toUpperCase())

function getFiles () {
  return fs.readdirSync(src)
    .filter(file => file.slice(-3) === '.js')
    .filter(file => file !== 'index.js')
}

function markCode (string) {
  return '```js\n' + string + '\n```\n\n'
}

function makePullRequestURL (method) {
  let base = `https://github.com/citycide/stunsail/new/master`
  return `${base}?filename=docs-src/${method}`
}

function buildArgumentTable (parameters) {
  let heading = '> **Arguments**\n\n'
  let tableHeader = dedent`
    | name | type | description |
    | :--: | :--: | ----------- |
  `

  let tableRows = parameters.map(value => {
    let [name, type, description] = value
    return `| ${name} | \`${type}\` | ${description} |`
  })

  let table = tableHeader + '\n' + tableRows.join('\n')
  return heading + table + '\n\n'
}

function buildDocString (file) {
  let string = ''

  try {
    let builder = require(path.join(docSrc, file))
    let doc = builder({ dedent })

    if (doc.header) {
      string += markCode(doc.header)
    }

    if (doc.description) {
      string += doc.description + '\n\n'
    }

    if (doc.parameters) {
      string += buildArgumentTable(doc.parameters)
    }

    if (doc.returns) {
      string += '> **Returns**\n\n' + doc.returns + '\n\n'
    }

    if (doc.usage) {
      string += '> **Usage**\n\n' + markCode(doc.usage)
    }
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      let url = makePullRequestURL(file)
      string = `> coming soon [[_contribute this_](${url})]\n\n`
    } else {
      throw e
    }
  }

  return string
}

function buildDocs () {
  let api = `# stunsail _${pkg.version}_\n\n`

  getFiles().forEach(file => {
    let token = camelize(file.slice(0, -3))
    api += `### ${token}\n\n`
    api += buildDocString(file)
  })

  try {
    fs.mkdirSync(path.dirname(outputPath))
  } catch (e) {
    if (e.code !== 'EEXIST') {
      throw e
    }
  }

  try {
    fs.writeFileSync(outputPath, api, 'utf-8')
  } catch (e) {}
}

buildDocs()
