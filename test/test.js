var assert = require('assert')
var getCssColors = require('..')

var stringWithColors = 'foobar hsl(,,) HSLA(1, 1.111%, 1.1111%, .8) rgba(123, 123, 123, .8) #fff turtles rebeccapurple #123AAA'

describe('get-css-colors', function() {

  it('should do something awesome', function() {
    assert.deepEqual(
      getCssColors(stringWithColors),
      ['HSLA(1, 1.111%, 1.1111%, .8)', 'rgba(123, 123, 123, .8)', '#fff', 'rebeccapurple', '#123AAA']
    )
  })
})
