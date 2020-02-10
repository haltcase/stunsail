import getType from "./get-type"

export default function isNumber (value) {
  return getType(value) === "number"
}
