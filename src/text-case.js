import {
  LEFT_RIGHT_NONALPHANUM_REGEX,
  LOWER_UPPER_PAIR_REGEX,
  NONALPHANUM_OR_UNDERSCORE_REGEX
} from "./constants"

export default function textCase (string) {
  return string
    .replace(LEFT_RIGHT_NONALPHANUM_REGEX, "")
    .replace(LOWER_UPPER_PAIR_REGEX, (m, a, b) => a + "_" + b.toLowerCase())
    .replace(NONALPHANUM_OR_UNDERSCORE_REGEX, " ")
    .toLowerCase()
}
