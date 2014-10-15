var assert = require('assert');
var checkDPI = require('./lib/checkDPI');

describe('#checkDPI()', function(){
  it('should throws error when the arguments are not valid', function(){
    assert.throws(
      function() { checkDPI(1, [2]) },
      /Input and output must be an array./
    );

    assert.throws(
      function() { checkDPI(1, 2) },
      /Input and output must be an array./
    );

  });

  it('should return true when DPI larger than 300', function() {
    assert.equal(
      true,
      checkDPI([300, 300], [1, 1]));
  });

  it('should return false when DPI smaller than 300', function() {
    assert.equal(
      false,
      checkDPI([30, 30], [1, 1]));
  });

})

