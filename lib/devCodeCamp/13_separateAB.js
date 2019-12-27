
/**
 * @name separatedBy
 * @description Write a JavaScript program to check if the 
 * characters a and b are separated by exactly 3 places anywhere 
 * (at least once) in a given string.
 * 
 * @param {string} str 
 * @returns {boolean} true if a and b are separated by exactly 3 spaces
 */
function separatedBy(str) {

    // traverse and detect an a or b
    for (let i = 0; i < str.length; i++) {
        if(str[i] === 'a' && str[i+4] === 'b') {
            return true;
        }

        if(str[i] === 'b' && str[i+4] === 'a') {
            return true;
        }
    }

    return false;

}

module.exports = separatedBy;