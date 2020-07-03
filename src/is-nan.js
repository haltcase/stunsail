import getType from "./get-type.js"

export default function isNan (value) {
  return getType(value) === "nan"
}
