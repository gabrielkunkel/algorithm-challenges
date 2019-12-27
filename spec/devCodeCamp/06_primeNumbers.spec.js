const inputFunctions = require('../../lib/devCodeCamp/06_primeNumbers');
const generatePrimeNumbers = inputFunctions.generatePrimeNumbers;
const isPrime = inputFunctions.isPrime;

describe('the isPrime function', () => {

    it('should say 7 is a prime number', () => {
        expect(isPrime(7)).toBe(true);
    });

    it('should say 8 is NOT a prime number', () => {
        expect(isPrime(8)).toBe(false);
    });

});

describe('generatePrimeNumbers', () => {

    it('returns an array object', () => {
        expect(Array.isArray(generatePrimeNumbers())).toBe(true);
    });

    it('returns all the prime numbers between 1 and 100', () => {
        expect(generatePrimeNumbers()).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    });

});