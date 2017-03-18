import getType from './get-type'
import isOneOf from './is-one-of'

export default value => {
  let type = getType(value)

  return isOneOf([
    'error',
    'typeerror',
    'rangeerror',
    'referenceerror',
    'evalerror',
    'urierror',
    'syntaxerror'
  ], type)
}
