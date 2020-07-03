import each from "./each.js"

export default function any (collection, fn = value => !!value) {
  let any = false
  each(collection, (v, k, o) => {
    if (fn(v, k, o)) {
      return !(any = true)
    }
  })

  return any
}
