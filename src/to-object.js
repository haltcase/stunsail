import toObjectWith from "./to-object-with"

export default function toObject (value) {
  return toObjectWith(value, v => v)
}
