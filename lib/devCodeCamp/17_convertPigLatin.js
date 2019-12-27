/**
 * @name convertPigLatin
 * @description Write function that translates a text to Pig 
 * Latin and back. English is translated to Pig Latin by taking 
 * the first letter of every word, moving it to the end of the 
 * word and adding ‘ay’. “The quick brown fox” becomes “Hetay 
 * uickqay rownbay oxfay”.
 * 
 * @param {string} str of english or pig latin
 * @returns {string} of english or pig latin
 */
function convertPigLatin(str) {
    return detectPigLatin(str) ? convertToEnglish(str) : convertToPigLatin(str);
}

/**
 * @name convertToPigLatin
 * @param {string} str 
 */
function convertToPigLatin(str) {
    return str
        .split(' ')
        .map(word => word.substring(1) + word[0])
        .map(word => word + 'ay')
        .join(' ');
}

/**
 * @name convertToEnglish
 * @param {string} str 
 */
function convertToEnglish(str) {
    return str
        .split(' ')
        .map(word => word.substring(0, word.length-2))
        .map(word => word[word.length-1] + word.substring(0, word.length-1))
        .join(' ');
}

/**
 * @name detectPigLatin
 * @description returns true if each word in the string end
 * in 'ay', false if it doesn't
 * 
 * @param {string} str of text
 * @returns {boolean} whether it's pig latin or not
 */
function detectPigLatin(str) {
    let strArr = str.split(" ");
    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i];
        if (!(word[word.length-2] === 'a' && word[word.length-1] === 'y')) { 
            return false
        }
    }

    return true;
}

module.exports = {
    convertPigLatin,
    convertToPigLatin,
    convertToEnglish,
    detectPigLatin
}