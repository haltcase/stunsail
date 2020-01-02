import isThenable from './is-thenable'

export default function pipe (...args) {
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
