import normalizePath from './lib/_normalize-path.js'

export default function pathDots (value) {
  if (typeof value === 'string') {
    return normalizePath(value)
  } else if (Array.isArray(value)) {
    return value.join('.')
  }
}
