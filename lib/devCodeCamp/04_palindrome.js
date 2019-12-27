/**
 * @name Palindrome
 * STEPS:
 * remove spaces and any unwanted symbols from string
 * 
 * standardize it into lowercase
 * 
 * turn the string into an array
 * 
 * pop off the last element of the array
 * 
 * compare the last element with the first element
 * 
 * if their equal, repeat, but if their not then return false
 * 
 * repeat until there is no elements left in the array
 * 
 * if array gets down to an empty array it returns true
 * 
 * @param {string} str string to check for palindrome
 * @returns {boolean} to specify whether the string is a palindrome
 */
function palindrome(str) {

    //clean text: remove grammatical marks, spaces, etc.
    const regEx = /\W/ig;
    let cleanedString = str.replace(regEx, '');
    cleanedString = cleanedString.toLowerCase();
    let array = cleanedString.split('');

    //function to do actual palindrome evaluation
    function pl(arr) {

        let popped = arr.pop();

        if(arr.length === 0) {
            return true;
        }

        else {
            if(popped === arr[0]) {
                arr.shift();
                return pl(arr);
            }
            else {
                return false;
            }
        }
    }
    return pl(array);
}

module.exports = palindrome;