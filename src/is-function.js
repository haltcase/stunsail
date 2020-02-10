import getType from "./get-type"

export default function isFunction (value) {
  return getType(value) === "function"
}
