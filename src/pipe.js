import toArray from './to-array'
import isThenable from './is-thenable'

export default function pipe (...args) {
  if (args.length > 1) {
    throw new Error('`pipe` must be passed an array, not an argument list')
  }

  args = toArray(args[0])

  let output
  let i = -1
  const { length } = args

  while (++i < length) {
    const fn = args[i]
    if (isThenable(output)) {
      output = output.then(fn)
    } else if (typeof fn === 'function') {
      if (i === 0) {
        output = fn()
      } else {
        output = fn(output)
      }
    } else {
      output = i === 0 ? fn : output
    }
  }

  return Promise.resolve(output)
}
