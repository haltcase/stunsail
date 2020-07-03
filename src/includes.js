import isOneOf from "./is-one-of.js"

export default function includes (collection, value) {
  return isOneOf(value, collection)
}
