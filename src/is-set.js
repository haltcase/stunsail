import getType from "./get-type.js"

export default function isSet (value) {
  return getType(value) === "set"
}
