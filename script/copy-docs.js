'use strict'

const { resolve } = require('path')
const { readFileSync, writeFileSync } = require('fs')

const root = resolve(__dirname, '..')
const docs = resolve(root, 'docs', 'docs')

const getHeader = id => `\
---
id: ${id.replace('.md', '')}
hide_title: true
---

`

const targets = [
  { src: 'readme.md', dest: 'quick-start.md' },
  { src: 'changelog.md', dest: 'changelog.md' },
  { src: 'license', dest: 'license.md' }
]

targets.forEach(({ src, dest }) => {
  const contents = readFileSync(resolve(root, src))
  const target = resolve(docs, dest)
  writeFileSync(target, getHeader(dest) + contents, { flag: 'w' })
})
