import getType from "./get-type.js"

export default function isArray (value) {
  return getType(value) === "array"
}
