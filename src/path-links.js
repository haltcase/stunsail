import normalizePath from './lib/_normalize-path.js'

export default function pathLinks (value) {
  if (typeof value === 'string') {
    return normalizePath(value).split('.')
  } else if (Array.isArray(value)) {
    return value
  }
}
