/**
 * @name Happy Number
 * According to https://leetcode.com/problems/happy-number/
 * 
 * "A happy number is a number defined by the following process: 
 * Starting with any positive integer, replace the number by the 
 * sum of the squares of its digits, and repeat the process until 
 * the number equals 1 (where it will stay), or it loops endlessly 
 * in a cycle which does not include 1. Those numbers for which 
 * this process ends in 1 are happy numbers."
 * 
 * Example: Input: 19
 * Output: true
 * Explanation: 
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * "sum of the squares of its digits": 46 => (4^2 + 6^2)
 * 
 * STEPS:
 * set base case to returning true if the num is 1,
 * because if num is a happy number this will 
 * eventually be 1
 * 
 * set base case to returning false if the num is 4,
 * because if num is an unhappy number this will
 * eventually be 4
 * 
 * convert number into individual digits
 * 
 * iterate through the digits to square them and 
 * add them up, reducing them to a single value
 * 
 * pass new number into happyNumber function
 * 
 * @param {number} number any positive integer
 * @returns {boolean} true if it is a happy number 
 */
function happyNumber (num) {

    if(num === 1) {
        return true;
    }

    if(num === 4) {
        return false;
    }

    // convert number into digits
    let numberArray = num.toString().split('').map(item => parseInt(item));

    // add up new number
    let newNumber = numberArray.reduce((acc, item) => {
        return acc + item**2;
    }, 0);

    return happyNumber(newNumber);
}

module.exports = happyNumber;
