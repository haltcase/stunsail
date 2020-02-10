import getType from "./get-type"

export default function isObject (value) {
  return getType(value) === "object"
}
