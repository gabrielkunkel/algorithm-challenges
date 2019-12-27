/**
 * @name ptCheck
 * @description Write a JavaScript program to check if a 
 * given string contains equal number of p's and t's present.
 * 
 * @param {string} str 
 * @returns {boolean} true if p's and t's are equal 
 */
function ptCheck(str) {
    let pCounter = 0, 
        tCounter = 0;

    str.split('').forEach(char => {
        if (char === 'p') {
            pCounter += 1;
        } else if (char === 't') {
            tCounter += 1;
        }
    });
    
    return pCounter === tCounter;

}

module.exports = ptCheck;