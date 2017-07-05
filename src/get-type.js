const { toString } = Object.prototype

export default function getType (value) {
  if (value === null) return 'null'
  let type = typeof value
  if (type === 'object') {
    let kind = toString.call(value).slice(8, -1).toLowerCase()
    let isObjOrErr = kind === 'object' || kind === 'error'

    if (isObjOrErr && value.constructor) {
      return value.constructor.name.toLowerCase()
    }

    if (kind === 'uint8array' || value.constructor.isBuffer) {
      return 'buffer'
    }

    return kind
  }

  // eslint-disable-next-line no-self-compare
  if (value !== value) return 'nan'

  return type
}
