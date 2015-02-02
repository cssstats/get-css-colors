var assert = require('assert')
var getCssColors = require('..')

var stringWithColors = 'foobar hsl(,,) hsla(1, 1.111%, 1.1111%, .8) rgba(123, 123, 123, .8) #fff turtles rebeccapurple'

describe('get-css-colors', function() {

  it('should do something awesome', function() {
    assert.deepEqual(
      getCssColors(stringWithColors),
      ['hsla(1, 1.111%, 1.1111%, .8)', 'rgba(123, 123, 123, .8)', '#fff', 'rebeccapurple']
    )
  })
})
