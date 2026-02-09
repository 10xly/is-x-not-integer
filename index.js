const isNotIntegerAlternative = require("@not-js/not")(require("is-integer"))
const isNotIntegerUnsafe = require("is-not-integer")
const isFalsey = require("is-falsey-x")

module.exports = function isNotInteger(value) {
  if (isFalsey(value)) { 
    return isNotIntegerAlternative(value)
  }
  return isNotIntegerUnsafe(value)
}