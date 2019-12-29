'use strict'

const { resolve } = require('path')
const { readFileSync, writeFileSync } = require('fs')

const root = resolve(__dirname, '..')
const docs = resolve(root, 'docs', 'docs')

const getHeader = id => `\
---
id: ${id}
hide_title: true
---

`

const targets = [
  { src: 'readme', dest: 'quick-start' },
  { src: 'changelog', dest: 'changelog' }
]

targets.forEach(({ src, dest }) => {
  const contents = readFileSync(resolve(root, src + '.md'))
  const target = resolve(docs, dest + '.md')
  writeFileSync(target, getHeader(dest) + contents, { flag: 'w' })
})
