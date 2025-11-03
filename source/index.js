/**
 * Returns a curried version of a function.
 *
 * @param {(...parameters: any[]) => any} predicate
 * @param {number} [length]
 *
 * @throws {TypeError} "predicate" must be a function
 * @throws {TypeError} "length" must be a number
 */
export var curry = (predicate, length = predicate.length) => {
  if (typeof predicate !== 'function')
    throw new TypeError(`Parameter 'predicate' must be a function.`)

  if (typeof length !== 'number')
    throw new TypeError(`Parameter 'length' must be a number.`)

  return (...parameters) =>
    parameters.length >= length
      ? predicate(...parameters)
      : curry(predicate.bind(null, ...parameters), length - parameters.length)
}
