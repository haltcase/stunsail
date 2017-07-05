import getType from './get-type'

export default function toEmpty (type) {
  let inputType = getType(type)

  if (inputType !== 'string') {
    return toEmpty(inputType)
  }

  switch (type) {
    case 'array': return []
    case 'object': return {}
    case 'string': return ''
    case 'number': return 0
    case 'boolean': return false
    case 'set': return new Set()
    case 'map': return new Map()
    case 'null': return null
    case 'undefined': return undefined
  }
}
