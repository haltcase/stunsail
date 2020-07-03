import { mkdirSync, readdirSync, promises } from "fs"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"

const __dirname = fileURLToPath(dirname(import.meta.url))

const src = resolve(__dirname, "..", "src")
const prod = resolve(__dirname, "..")
const es = resolve(__dirname, "..", "es")

mkdirSync(es, { recursive: true })

const getFiles = () =>
  readdirSync(src).filter(file =>
    file.slice(-5) === ".d.ts"
  )

console.log("Creating type definitions...")

Promise.all(
  getFiles().map(async file => {
    const esm = await promises.readFile(resolve(src, file), "utf8")
    const cjs = esm
      .replace("export default", "export =")
      .replace(/from '.\//g, "from './src/")

    const options = { flags: "w" }
    return Promise.all([
      promises.writeFile(resolve(es, file), esm, options),
      promises.writeFile(resolve(prod, file), cjs, options)
    ])
  })
).then(results => {
  console.log(`Created type definitions. (${results.length} files)`)
})
