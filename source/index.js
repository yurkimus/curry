/**
 * Returns a curried version of a function.
 *
 * @param {Function} predicate
 * @param {number} length
 *
 * @returns {Function}
 *
 * @throws {TypeError} "predicate" must be a function
 * @throws {TypeError} "length" must be a number
 *
 * @example
 * ```javascript
 * let add = (a, b) => a + b
 *
 * curry(add)(1)(2) // => 3
 * ```
 */
export var curry = (predicate, length = predicate.length) => {
  if (typeof predicate != "function")
    throw new TypeError('"predicate" must be a function')

  if (Object.prototype.toString.call(length) != "[object Number]")
    throw new TypeError('"length" must be a number')

  return (...parameters) =>
    parameters.length >= length
      ? predicate(...parameters)
      : curry(predicate.bind(null, ...parameters), length - parameters.length)
}