import reduce from "./reduce.js"
import getType from "./get-type.js"
import toEmpty from "./to-empty.js"

function addTo (type, target, value, key) {
  switch (type) {
    case "array": return target.concat(value)
    case "object":
      target[key] = value
      return target
    case "string": return target + value
    case "set": return target.add(value)
    case "map": return target.set(key, value)
    case "null": return null
    case "undefined": return undefined
  }
}

export default function partition (collection, fn) {
  const type = getType(collection)
  const [truthy, falsy] = [toEmpty(type), toEmpty(type)]

  return reduce(collection, (accumulator, v, k, o) => {
    const target = fn(v, k, o) ? 0 : 1
    accumulator[target] = addTo(type, accumulator[target], v, k)
    return accumulator
  }, [truthy, falsy])
}
