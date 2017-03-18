import toArray from './to-array'
import _renameFunction from './lib/_renameFunction'

export default function curry (fn) {
  let arity = fn.length || 0
  if (arity === 0) return fn

  return _renameFunction(fn.name, function f1 () {
    let args = toArray(arguments, 0)
    if (args.length >= arity) {
      return fn.apply(null, args)
    } else {
      return _renameFunction(fn.name, function f2 () {
        let args2 = toArray(arguments, 0)
        let newArgs = args2.length > 0 ? args.concat(args2) : args
        return _renameFunction(fn.name, f1)
          .apply(null, newArgs)
      })
    }
  })
}
