import getType from "./get-type.js"

export default function isBoolean (value) {
  return getType(value) === "boolean"
}
