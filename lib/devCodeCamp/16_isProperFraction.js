/**
 * @name isProperFraction
 * @description Write a JavaScript program to check whether 
 * a given fraction is proper or not.
 * 
 * There are two types of common fractions, proper or improper. 
 * When the numerator and the denominator are both positive, 
 * the fraction is called proper if the numerator is less 
 * than the denominator, and improper otherwise.
 * 
 * This function also returns 'false' if the fraction is
 * negative.
 * 
 * @param {string} str of a fraction
 * @returns {boolean} is it a proper fraction
 */
function isProperFraction(str) {
    let fractionArr = str.split('/').map(num => parseInt(num));

    if(
        fractionArr[0] > fractionArr[1] || 
        fractionArr[0] < 1 && fractionArr[1] >= 1 ||
        fractionArr[0] >= 1 && fractionArr[1] < 1
    ) { return false }


    return true;
}

module.exports = isProperFraction;