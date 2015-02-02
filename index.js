'use strict'

var cssColorList = require('css-color-list')
var rgbaRegex = require('rgba-regex')
var rgbRegex = require('rgb-regex')
var hslaRegex = require('hsla-regex')
var hslRegex = require('hsl-regex')

module.exports = function getCssColors(string) {
  if (typeof string != 'string') {
    throw new TypeError('get-css-colors expected a string')
  }

  var colorListRegex = cssColorList().join('|')
  var rgbOrRgbaRegex = rgbRegex().source + '|' + rgbaRegex().source
  var hslOrHslaRegex = hslRegex().source + '|' + hslaRegex().source
  var hexRegex = '#([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?\\b'

  var cssColorRegex = new RegExp(colorListRegex + '|' + rgbOrRgbaRegex + '|' + hslOrHslaRegex + '|' + hexRegex, 'ig')

  return string.match(cssColorRegex)
}
