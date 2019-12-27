const palindrome = require("./04_palindrome");

/**
 * @name findLongestPalindrome
 * @description find the longest palindrome substring
 * 
 * STEPS:
 * Using str.substr and a palindrome checker, check
 * every substring if it is a palindrome.
 * 
 * Another solution: using the string if it is a palindrome, 
 * check if its in the string through a search.
 * 
 * @param {string} string which might include a palindrome
 * @returns {string} string of longest palindrome
 */

 function findLongestPalindrome(str) {
    let stringToCheck = '';
    let palindromeWinner = '';

    for (let i = 0; i <= str.length-1; i+=1) {
        for (let j = 1; j <= str.length - i; j+=1) {
            stringToCheck = str.substr(i, j);
            if (palindrome(stringToCheck)) {
                if (stringToCheck.length > palindromeWinner.length) {
                    palindromeWinner = stringToCheck;
                }
            }
        }
    }

    return palindromeWinner.length < 2 ? 'No Palindromes' : palindromeWinner;

 }

 module.exports = findLongestPalindrome;