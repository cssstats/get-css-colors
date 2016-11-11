# get-css-colors [![Build Status](https://secure.travis-ci.org/cssstats/get-css-colors.svg?branch=master)](https://travis-ci.org/cssstats/get-css-colors) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Get css colors from a string, including rgb, rgba, hsl, hsla, hex, named, etc.

## Installation

```bash
npm install --save get-css-colors
```

## Usage

```javascript
const getCssColors = require('get-css-colors')

getCssColors('foobar hsl(,,) #fff turtles rebeccapurple')
// => ['#fff', 'rebeccapurple']
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
