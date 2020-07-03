import { mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "fs"
import { dirname, join, relative, resolve } from "path"
import { fileURLToPath } from "url"

import terser from "terser"

const __dirname = fileURLToPath(dirname(import.meta.url))

const root = resolve(__dirname, "..")
const prod = resolve(__dirname, "..", "prod")

const makeDirPath = path => {
  const mode = parseInt("0777", 8)
  try {
    mkdirSync(path, mode)
    return true
  } catch (err) {
    if (err.code === "EEXIST") {
      return statSync(path).isDirectory()
    }

    if (err.code === "ENOENT") {
      const target = dirname(path)
      return (
        target !== path &&
        makeDirPath(target) &&
        mkdirSync(path, mode)
      )
    }

    return false
  }
}

const minifyFile = (src, dest) => {
  if (!makeDirPath(dirname(dest))) {
    return false
  }

  const source = readFileSync(src, "utf8")
  const { code, error } = terser.minify(source)
  return error
    ? false
    : writeFileSync(dest, code, { flag: "w" }) || true
}

const isDirectory = path =>
  statSync(path).isDirectory()

const getFiles = (dir = prod) => {
  const results = []

  readdirSync(dir).forEach(item => {
    const absolutePath = join(dir, item)
    if (isDirectory(absolutePath)) {
      getFiles(absolutePath).forEach(v => results.push(v))
    } else {
      results.push(absolutePath)
    }
  })

  return results
}

const run = () => {
  console.log("Minifying source files...")
  const files = getFiles()
  let success = 0

  files.forEach(item => {
    const dest = join(root, relative(prod, item))
    if (minifyFile(item, dest)) {
      success++
    } else {
      console.error("Failed to minify file at " + item)
    }
  })

  console.log(`Minified source files. (${success} of ${files.length} files)`)
}

run()
