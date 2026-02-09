const isNotInteger = require("./index")

describe("isNotInteger", () => {
  test("returns true for floats", () => {
    expect(isNotInteger(1.5)).toBe(true)
    expect(isNotInteger(-0.1)).toBe(true)
    expect(isNotInteger(Math.PI)).toBe(true)
  })

  test("returns false for integers", () => {
    expect(isNotInteger(10)).toBe(false)
    expect(isNotInteger(0)).toBe(false)
    expect(isNotInteger(-500)).toBe(false)
    expect(isNotInteger(1.0)).toBe(false)
  })

  test("returns true for non-number types", () => {
    expect(isNotInteger("5")).toBe(true)
    expect(isNotInteger(null)).toBe(true)
    expect(isNotInteger(undefined)).toBe(true)
    expect(isNotInteger({})).toBe(true)
    expect(isNotInteger([])).toBe(true)
    expect(isNotInteger(true)).toBe(true)
  })

  test("returns true for Infinity and NaN", () => {
    expect(isNotInteger(Infinity)).toBe(true)
    expect(isNotInteger(-Infinity)).toBe(true)
    expect(isNotInteger(NaN)).toBe(true)
  })
})