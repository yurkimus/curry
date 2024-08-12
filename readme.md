# Curry

JavaScript curry utility.

## Table of Contents

- [Installation](#installation)
- [Exports](#exports)
  - [curry](#curry)
- [License](#license)

## Installation

### npm

```
npm install @yurkimus/curry
```

### urls

```
"@yurkimus/curry": "npm:@yurkimus/curry"
```

```
"@yurkimus/curry": "github:yurkimus/curry"
```

```
"@yurkimus/curry": "https://raw.githubusercontent.com/yurkimus/curry/main/source/index.js"
```

## Exports

### curry

#### Definition:

```
curry :: function -> number -> function
```

#### Example:

```javascript
curry(
  // predicate, not need to specify length unless using variadic function parameters
  (a, b) => a + b
)(1)(2); // => 3

curry(
  // predicate
  (a, ...numbers) => a + numbers.reduce((x, a) => x + a, 0),
  // specified length to handle variadic function parameters
  2
)(1)(2, 3); // => 6
```

## License

[MIT](LICENSE)
