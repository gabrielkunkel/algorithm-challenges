/**
 * @name fromThirteen
 * @description Write a JavaScript program to get the 
 * difference between a given number and 13, if the number 
 * is greater than 13 return double the absolute difference
 * 
 * STEPS:
 * if the number is less get the difference
 * 
 * if the number is greater give double the absolute difference
 * 
 * @param {number} num 
 * @returns {number} difference from 13 or double absolute difference if greater than 13
 */

function fromThirteen(num) {
    
    return num <= 13 ? 13 - num : 2 * (Math.abs(13 - num));
}

module.exports = fromThirteen;