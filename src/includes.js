import isOneOf from "./is-one-of"

export default function includes (collection, value) {
  return isOneOf(value, collection)
}
