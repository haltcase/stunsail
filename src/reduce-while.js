import each from "./each.js"

export default function reduceWhile (collection, predicate, fn, initial) {
  let accumulator = initial

  each(collection, (v, k, o) => {
    if (!predicate(accumulator, v)) return false
    accumulator = fn(accumulator, v, k, o)
  })

  return accumulator
}
