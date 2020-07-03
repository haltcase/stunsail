import getType from "./get-type.js"

export default function isString (value) {
  return getType(value) === "string"
}
