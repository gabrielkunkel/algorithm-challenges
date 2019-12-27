/**
 * STEPS:
 * Count the repeated characters of a string.
 * 
 * Presuming each character is repeated and is a letter,
 * replace each series of repeated characters with
 * a number, representing the total, followed by
 * the repeated character.
 * 
 * @param {string} str string with repeated letters in succession
 * @returns {string}
 */
function compressCharacterString(str) {
    let finalArray = [], 
        workingArray = [],
        sectionArray = [],
        workingChar = '';

    // break string into sections
    str.split('').forEach((item, index, arr) => {
        if (!workingChar) {
            sectionArray.push(item);
            workingChar = item;

        } else {
            if (workingChar === item) {
                sectionArray.push(item);

                if (index === arr.length-1) {
                    let stringOfSame = sectionArray.join('');
                    workingArray.push(stringOfSame);    
                }

            } else {
                let stringOfSame = sectionArray.join('');
                workingArray.push(stringOfSame);
                sectionArray = [];
                workingChar = item;
                sectionArray.push(item);

            }
        }
        
    });

    // apply compressRepeatCharacter to each section
    workingArray.forEach(item => {
        // OTHER WAY let compressedString = compressRepeatCharacter(item);
        finalArray.push(parseInt(item.length) + item[0]);
    });

    // return joined array
    return finalArray.join('');

}

// other way refactored out
function compressRepeatCharacter(str) {
    let workingChar = '';

    return str.split('').reduce((acc, item) => {
        if (workingChar === item) {
            return acc+=1
        } else {
            workingChar = item;
            return 2;  
        }
    }) + workingChar;
}

module.exports = compressCharacterString;