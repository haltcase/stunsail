import each from './each'

export default (collection, fn) => {
  let any = false
  each(collection, (v, k, o) => {
    if (fn(v, k, o)) {
      return !(any = true)
    }
  })

  return any
}
