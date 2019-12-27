/**
 * THE STEPS:
 * Taking a string, separate it into individual words
 * 
 * Processing each word, recreate each word with the
 * first letter capitalized.
 * 
 * Convert the separated words into one string.
 * 
 * @param {string} str 
 * @returns {string}
 */
function capitalizeLetter(str) {
    return str.split(" ").map(word => {
        return word[0].toUpperCase() + word.substring(1, word.length);
    }).join(" ");
}

module.exports = capitalizeLetter;