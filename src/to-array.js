import getType from './get-type'

export default function toArray (value, begin, end) {
  const kind = getType(value)
  if (kind === 'undefined') return []

  const array = do {
    if (kind === 'array') value
    else if (kind === 'arguments') Array.from(value)
    else Array.of(value)
  }

  return getType(begin) === 'number'
    ? array.slice(begin, end)
    : array
}
