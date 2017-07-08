'use strict'

const fs = require('fs')
const path = require('path')
const camelCase = require('../camel-case')

const src = path.resolve(__dirname, '..', 'src')
const idx = path.resolve(src, 'index.js')

function getFiles () {
  return fs.readdirSync(src)
    .filter(file => file.slice(-3) === '.js')
    .filter(file => file !== 'index.js')
}

function createIndex () {
  let imports = ''
  let outputs = ''
  let defaults = 'export default {\n'

  let files = getFiles()

  files.forEach(file => {
    let token = camelCase(file.slice(0, -3))
    if (token === 'constants') {
      imports += `import * as ${token} from './${file}'\n`
    } else {
      imports += `import { default as ${token} } from './${file}'\n`
    }
    outputs += `export { ${token} }\n`
    defaults += `  ${token},\n`
  })

  let code = ''
  code += imports + '\n'
  code += outputs + '\n'
  code += defaults.slice(0, -2) + '\n}\n'

  fs.writeFileSync(idx, code)

  return files.length
}

try {
  console.log('Creating index file...')
  let quantity = createIndex()
  console.log(`Index file created. (${quantity} source files)`)
  process.exit(0)
} catch (e) {
  console.error(e)
  process.exit(1)
}
