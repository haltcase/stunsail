import toArray from './to-array'
import isThenable from './is-thenable'

export default function pipe (input) {
  let args

  if (Array.isArray(input)) {
    args = input
  } else {
    if (arguments.length > 1) {
      args = toArray(arguments)
    } else {
      args = toArray(input)
    }
  }

  let output
  args.forEach((fn, i) => {
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
  })

  return Promise.resolve(output)
}
