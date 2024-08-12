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
curry((a, b) => a + b)(1)(2); // => 3
```

## License

[MIT](LICENSE)
