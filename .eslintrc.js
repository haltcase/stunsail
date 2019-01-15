module.exports = {
  parser: 'babel-eslint',
  extends: 'standard',
  rules: {
    // doesn't play well with pipe operator/do expressions
    'no-unused-expressions': 1
  }
}
