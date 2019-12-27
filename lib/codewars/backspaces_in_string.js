/**
 * https://www.codewars.com/kata/backspaces-in-string/javascript
 * 
 * Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
 * Your task is to process a string with "#" symbols.
 * 
 * "abc#d##c"      ==>  "ac"
 * "abc##d######"  ==>  ""
 * "#######"       ==>  ""
 * ""              ==>  ""
 * 
 * @param {string} s 
 */
function cleanString(s) {

    if(s === '') {
        return '';
    }

    let stringSplitArray = s.split('');
    let workingArray = [];
    let stringSplitIterator = 0;

    while (stringSplitIterator < stringSplitArray.length) {
        
        if(stringSplitArray[stringSplitIterator] === '#') {
            if(workingArray.length) {
                workingArray.pop();
            }
        } else {
            workingArray.push(stringSplitArray[stringSplitIterator])
        }

        stringSplitIterator += 1;
    }


    return workingArray.join('');
};

module.exports = cleanString;


// old solution

function cleanString(s) {

    if(s === '') {
        return '';
    }

    if(isHashes(s)) {
        return '';
    }

    let stringSplitArray = s.split('');
    let workingArray = [];
    let stringSplitIterator = 0;

    while (stringSplitIterator < stringSplitArray.length) {
        
        if(stringSplitArray[stringSplitIterator] === '#') {
            if(workingArray.length) {
                workingArray.pop();
            }
        } else {
            workingArray.push(stringSplitArray[stringSplitIterator])
        }

        stringSplitIterator += 1;
    }


    return workingArray.join('');
};

function isHashes(str) {
    let strInArray = str.split('');

    for (let i = 0; i < strInArray.length; i++) {
        
        if(strInArray[i] === '#') {
            continue;
        }
        else {
            return false;
        }
    }

    return true;
}