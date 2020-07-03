import getType from "./get-type.js"

export default function isDate (value) {
  return getType(value) === "date"
}
