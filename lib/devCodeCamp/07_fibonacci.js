/**
 * @name getFibonacci
 * @description produces the fibonacci sequence starting
 * from one
 * 
 * STEPS:
 * Create a list (array) of the fibonnaci sequence
 * by using the prior two numbers to calculate the
 * following number.
 * 
 * All of the numbers should be concatenated into
 * one final array.
 * 
 * @param {number} num to the level that we want the sequence
 * @returns {array} array of numbers in the fibonacci sequence
 */
function getFibonacci(num) {
    return fibonacci(1, 1, num)
}

function fibonacci(n, m, terminate) {
    if (n > terminate) {
        return m;
    }
    else {
        return [].concat(m, fibonacci(n + m, n, terminate));
    }
}

module.exports = getFibonacci;