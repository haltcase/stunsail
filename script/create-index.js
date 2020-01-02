'use strict'

const { resolve } = require('path')
const { readdirSync, writeFileSync } = require('fs')

const src = resolve(__dirname, '..', 'src')
const idx = resolve(src, 'index.js')
const def = resolve(src, 'index.d.ts')

const separators = /[-|.](\w)/g

const camelize = str =>
  str.replace(separators, (_, p1) => p1.toUpperCase())

const getFiles = () =>
  readdirSync(src).filter(file =>
    file.slice(-3) === '.js' && file !== 'index.js'
  )

const createIndex = () => {
  const files = getFiles()

  const [imports, outputs, defaults] =
    files.reduce(([imports, outputs, defaults], file) => {
      const filename = file.slice(0, -3)
      const token = camelize(filename)

      imports += token === 'constants'
        ? `import * as ${token} from './${filename}'\n`
        : `import ${token} from './${filename}'\n`

      outputs += `export { ${token} }\n`
      defaults += `  ${token},\n`

      return [imports, outputs, defaults]
    }, ['', '', 'export default {\n'])

  const code =
    imports + '\n' +
    outputs + '\n' +
    defaults.slice(0, -2) + '\n}\n'

  writeFileSync(idx, code)
  writeFileSync(def, code)

  return files.length
}

try {
  console.log('Creating index file...')
  const quantity = createIndex()
  console.log(`Index file created. (${quantity} source files)`)
  process.exit(0)
} catch (e) {
  console.error(e)
  process.exit(1)
}
