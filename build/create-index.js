const { resolve } = require('path')
const { writeFileSync, readdirSync } = require('fs')

function createIndex () {
  let src = resolve(__dirname, '..', 'src')

  let camelize = str =>
    str.replace(/-(\w)/g, (m, p1) => p1.toUpperCase())

  let files = readdirSync(src)
    .filter(file => file.slice(-3) === '.js')
    .filter(file => file !== 'index.js')

  let code = [`let modules = {}\n`]
  let imports = []
  let assigns = []

  files.forEach(file => {
    let token = camelize(file.slice(0, -3))
    if (token === 'constants') {
      imports.push(`import * as ${token} from './${file}'`)
    } else {
      imports.push(`import { default as ${token} } from './${file}'`)
    }
    assigns.push(`modules['${token}'] = ${token}`)
  })

  code = code.concat(imports, assigns).join('\n') + '\n\n'
  code += 'export default modules\n'

  writeFileSync(resolve(src, 'index.js'), code)

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
