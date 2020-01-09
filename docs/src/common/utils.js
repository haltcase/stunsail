import remark from 'remark'
import remarkHtml from 'remark-html'

const separators = /[-|.](\w)/g

export const md = remark().use(remarkHtml)

export const camelize = str =>
  str.replace(separators, (_, p1) => p1.toUpperCase())
