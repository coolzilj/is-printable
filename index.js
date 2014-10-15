/**
 * is-printable
 * @param  {String} imagePath
 * @param  {Array} physicalDimensions
 * @param  {Function} callback
 */

var sizeOf = require('image-size');
var checkDPI = require('./lib/checkDPI');

module.exports = function (imagePath, physicalDimensions, callback) {
  sizeOf(imagePath, function(err, dimensions) {
    if(err) callback(err);
    var result = checkDPI([dimensions.width, dimensions.height], physicalDimensions);
    callback(null, result);
  });
}
