import getType from "./get-type"
import isPrimitive from "./is-primitive"

const arrayImpl = (str, search, maxOccurrences) => {
  let num = 0
  let pos = str.indexOf(search)

  while (pos !== -1 && num < maxOccurrences) {
    num++
    pos = str.indexOf(search, pos + 1)
  }

  return num
}

const iteratorImpl = (iter, search, maxOccurrences) => {
  let num = 0

  for (const value of iter) {
    if (num === maxOccurrences) break
    num += Boolean(value === search)
  }

  return num
}

export default function count (collection, search, maxOccurrences = Number.MAX_SAFE_INTEGER) {
  const type = getType(collection)
  const primitive = isPrimitive(collection)

  switch (type) {
    case "array":
    case "string":
      return arrayImpl(collection, search, maxOccurrences)
    case "number":
      return Math.min(Math.floor(collection / search), maxOccurrences)
    case "set":
      return Number(collection.has(search))
    case "map":
      return iteratorImpl(collection.values(), search)
    case "object":
      return arrayImpl(Object.values(collection))
  }

  if (primitive) {
    return Number(collection === search)
  }

  throw new TypeError(`Unexpected collection type: ${type}`)
}
