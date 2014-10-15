/**
 * checkDPI
 * @param  {Array} input  二维数组，表示图片长宽
 * @param  {Array} output 二维数组，表示印刷物理长宽
 * @return {Boolean} 长宽都满足300DPI则返回True
 * @algorithm image_width_in_pixels = DPI * physical_width_in_inches
 */

module.exports = function(input, output) {

  isArgValid();

  return (caculateDPI(input[0], output[0]) >= 300) && (caculateDPI(input[1], output[1] >= 300))
    ? true
    : false;

  function isArgValid() {
    if(!Array.isArray(input) || !Array.isArray(output)) {
      throw new Error('Input and output must be an array.');
    }
  }

  function caculateDPI (image_width_in_pixels, physical_width_in_inches) {
    return Number(image_width_in_pixels) / Number(physical_width_in_inches);
  }
}
