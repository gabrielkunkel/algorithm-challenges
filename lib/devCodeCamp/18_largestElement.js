/**
 * @name largestElement
 * @description Write a function that returns the 
 * largest element in an array.
 * 
 * @param {number[]} arr
 * @returns {number} the highest number in the array 
 */
function largestElement(arr) {
    return arr.sort((a, b) => b - a)[0];
}

module.exports = largestElement;