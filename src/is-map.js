import getType from './get-type'

export default function isMap (value) {
  return getType(value) === 'map'
}
