/**
 * Steps:
 * 
 * First, take in a string.
 * 
 * Convert that string into an array so we can
 * use a built-in array methods.
 * 
 * Use the reverse method on the array.
 * 
 * With characters reversed in the array I
 * convert the array into a string and return.
 * 
 * @param {string} str any of string type
 * @return {string} the reversed string
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}