import curry from './curry'
import reduce from './reduce'
import getType from './get-type'
import toEmpty from './to-empty'

function addTo (type, target, value, key) {
  switch (type) {
    case 'array': return target.concat(value)
    case 'object':
      target[key] = value
      return target
    case 'string': return target + value
    case 'set': return target.add(value)
    case 'map': return target.set(key, value)
    case 'null': return null
    case 'undefined': return undefined
  }
}

export default curry(function partition (fn, collection) {
  let type = getType(collection)
  let [truthy, falsy] = [toEmpty(type), toEmpty(type)]

  return reduce((accumulator, v, k, o) => {
    let target = fn(v, k, o) ? 0 : 1
    accumulator[target] = addTo(type, accumulator[target], v, k)
    return accumulator
  }, [truthy, falsy], collection)
})
