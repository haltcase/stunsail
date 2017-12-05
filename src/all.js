import each from './each'

export default (collection, fn) => {
  let all = true
  each(collection, (v, k, o) => {
    if (!fn(v, k, o)) {
      return (all = false)
    }
  })

  return all
}
