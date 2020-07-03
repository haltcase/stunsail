import getType from "./get-type.js"

export default function isObject (value) {
  return getType(value) === "object"
}
