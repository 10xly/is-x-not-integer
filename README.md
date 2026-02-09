# is-x-not-integer
wrapper for [is-not-integer](https://github.com/evilfactory/is-not-integer) that doesn't throw up on falsy. this is a simpler version of [lolite.__private.isNotInteger](https://github.com/10xly/lolite/blob/src/private/isNotInteger.js) that doesn't depend on integer-values through lolite.__private.crash, therefore making a faster instakll

```js
const isNotIntegerEvilfactory = require("is-not-integer")
const isNotInteger = require("is-x-not-integer")

console.log(isNotInteger(0)) // false
console.log(isNotIntegerEvilfactory(0)) // crashes program
```