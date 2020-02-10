import getType from "./get-type"

export default function isDate (value) {
  return getType(value) === "date"
}
