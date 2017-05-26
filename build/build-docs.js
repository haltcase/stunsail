'use strict'

const fs = require('fs')
const path = require('path')

const src = path.resolve(__dirname, '..', 'src')
const docDir = path.resolve(__dirname, '..', 'docs-src')
const templatePath = path.resolve(docDir, 'readme-template.md')
const outputPath = path.resolve(docDir, 'readme-output.md')

const camelize = str =>
  str.replace(/[-|\.](\w)/g, (m, p1) => p1.toUpperCase())

function getFiles () {
  return fs.readdirSync(src)
    .filter(file => file.slice(-3) === '.js')
    .filter(file => file !== 'index.js')
}

function markCode (string) {
  return '```js\n' + string + '\n```\n\n'
}

function buildDocs () {
  let api = ''
  let files = getFiles()

  files.forEach(file => {
    let token = camelize(file.slice(0, -3))
    api += `### ${token}\n\n`

    let docString = ''
    let docPath = path.join(docDir, file)

    try {
      let doc = require(docPath)

      if (doc.header) {
        docString += markCode(doc.header)
      }

      if (doc.description) {
        docString += doc.description + '\n\n'
      }

      if (doc.returns) {
        docString += '> **Returns**\n\n' + doc.returns + '\n\n'
      }

      if (doc.usage) {
        docString += '> **Usage**\n\n' + markCode(doc.usage)
      }
    } catch (e) {
      if (e.code === 'MODULE_NOT_FOUND') {
        // TODO: linkify 'contibute this' for easy PRs
        docString = '> coming soon [_contribute this_]\n\n'
      } else {
        throw e
      }
    }

    api += docString
  })

  let string = fs.readFileSync(templatePath, 'utf-8')
  let output = string.replace(/{{api}}/, api)
  try {
    fs.writeFileSync(outputPath, output, 'utf-8')
  } catch (e) {}
}

buildDocs()
