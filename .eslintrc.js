module.exports = {
  parser: 'babel-eslint',
  extends: 'standard',
  rules: {
    // doesn't play well with pipeline operator
    'no-unused-expressions': 1
  }
}
