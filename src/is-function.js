import getType from "./get-type.js"

export default function isFunction (value) {
  return getType(value) === "function"
}
