import getType from "./get-type.js"

export default function isNumber (value) {
  return getType(value) === "number"
}
