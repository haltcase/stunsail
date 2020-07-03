import getType from "./get-type.js"

export default function isMap (value) {
  return getType(value) === "map"
}
