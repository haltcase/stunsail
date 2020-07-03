import toObjectWith from "./to-object-with.js"

export default function toObject (value) {
  return toObjectWith(value, v => v)
}
