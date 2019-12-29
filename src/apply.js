import getType from './get-type'
import toArray from './to-array'

export default function apply (fn, args) {
  const type = getType(fn)
  if (type !== 'function') {
    throw new TypeError(`Expected a function, got ${type}`)
  }

  args = toArray(args)

  const [a, b, c, d, e, f] = args
  switch (args.length) {
    case 0: return fn()
    case 1: return fn(a)
    case 2: return fn(a, b)
    case 3: return fn(a, b, c)
    case 4: return fn(a, b, c, d)
    case 5: return fn(a, b, c, d, e)
    case 6: return fn(a, b, c, d, e, f)
  }

  return fn.apply(null, args)
}
