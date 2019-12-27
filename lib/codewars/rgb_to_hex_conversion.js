
/**
 * https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript
 * 
 * @param {number} r 
 * @param {number} g 
 * @param {number} b 
 */
function rgb(r, g, b){
    const rHex = convertToHex(r);
    const gHex = convertToHex(g);
    const bHex = convertToHex(b);
    return rHex + gHex + bHex;
}

function convertToHex(num) {
    if(num < 0) {
        num = 0;
    } else if (num > 255) {
        num = 255;
    }

    let hexStr = num.toString(16);
    hexStr = hexStr.toUpperCase();

    if(hexStr.length < 2) {
        hexStr = '0' + hexStr;
    }

    return hexStr;
}


  module.exports = rgb;