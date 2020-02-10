import each from "./each"

export default function reduce (collection, fn, initial) {
  let accumulator = initial

  each(collection, (v, k, o) => {
    accumulator = fn(accumulator, v, k, o)
  })

  return accumulator
}
