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

  const code =
    files.reduce((imports, file) => {
      const filename = file.slice(0, -3)
      const token = camelize(filename)

      imports += token === 'constants'
        ? `export * as ${token} from './${filename}'\n`
        : `export { default as ${token} } from './${filename}'\n`

      return imports
    }, '')

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
