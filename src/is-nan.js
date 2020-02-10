import getType from "./get-type"

export default function isNan (value) {
  return getType(value) === "nan"
}
