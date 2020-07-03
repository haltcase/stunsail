const [off, warn, error] = [0, 1, 2]

module.exports = {
  parser: "babel-eslint",
  extends: [
    "standard"
  ],
  plugins: [
    "react"
  ],
  rules: {
    quotes: [error, "double", {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    // doesn't play well with pipe operator/do expressions
    "no-unused-expressions": warn,
    "react/jsx-uses-react": error,
    "react/jsx-uses-vars": error
  }
}
