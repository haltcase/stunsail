import getType from "./get-type"

export default function isArray (value) {
  return getType(value) === "array"
}
