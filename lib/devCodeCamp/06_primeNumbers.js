/**
 * @name generatePrimeNumbers
 * 
 * STEPS:
 * check to see if each of the numbers through 100
 * is a prime
 * 
 * check to see if each number is a prime by
 * checking if each number from 2 can be divied evenly
 * into the number. If not, return true. If so, return false.
 * 
 * push all of the numbers that are prime onto an array
 * 
 * @returns {Array} array of prime numbers
 */
function generatePrimeNumbers() {
    let arrOfPrimes = []
    for(let i = 2; i < 101; i+=1) {
        if(isPrime(i)) {
            arrOfPrimes.push(i);
        }
    }
    return arrOfPrimes;
}

function isPrime(num) {
    if (num === 1 || num === 0) {
        return false;
    }

    for (var x = 2; x <= Math.round(num / 2); x += 1) {
        if (num % x === 0) {
            return false;
        }
    }
    return true;
}

module.exports = { 
    generatePrimeNumbers, 
    isPrime 
}