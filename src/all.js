import each from "./each.js"

export default function all (collection, fn = value => !!value) {
  let all = true
  each(collection, (v, k, o) => {
    if (!fn(v, k, o)) {
      return (all = false)
    }
  })

  return all
}
