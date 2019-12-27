/**
 * @name sumStringDigits
 * @description Write a JavaScript program to compute the 
 * sum of all digits that occur in a given string.
 * 
 * @param {string} str with digits included
 * @returns {number} sum of digits
 */
function sumStringDigits(str) {
    return str.split('')
        .filter(charString => /\d/.test(charString))
        .map(numString => parseInt(numString))
        .reduce((sum, num) => sum += num);
}

module.exports = sumStringDigits;