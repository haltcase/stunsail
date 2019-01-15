import {
  BRACKETED_REGEX,
  LEFT_RIGHT_DOT_REGEX
} from '../constants'

export default function _normalizePath (path) {
  return path
    .replace(BRACKETED_REGEX, '.$1') // bracketed path link
    .replace(LEFT_RIGHT_DOT_REGEX, '') // leading or trailing dots
}
