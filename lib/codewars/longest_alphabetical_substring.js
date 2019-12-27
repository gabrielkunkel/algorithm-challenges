/**
 * https://www.codewars.com/kata/longest-alphabetical-substring/train/javascript
 * 
 * Find the longest substring in alphabetical order.
 * Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".
 * There are tests with strings up to 10 000 characters long so your code will need to be efficient.
 * The input will only consist of lowercase characters and will be at least one letter long.
 * If there are multiple solutions, return the one that appears first.
 * 
 * 
 * @param {string} str 
 */
function longest(str) {
    const alphabetArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const strArr = str.split('');
    let workingArr = [];
    let winningArr = [];

    if (str === '') {
        return '';
    }

    strArr.forEach((element, index, array) => {
        if(workingArr.length === 0) {
            workingArr.push(element);
        }

        else if(alphabetArr.indexOf(element) >= alphabetArr.indexOf(array[index-1])) {
            workingArr.push(element);
        }

        else if(workingArr.length > winningArr.length) {
            winningArr = workingArr;
            workingArr = [element];
        }
        else {
            workingArr = [element];
        }


    });

    if (workingArr.length === strArr.length || workingArr.length > winningArr.length) {
        return workingArr.join('');
    }

    return winningArr.join('');
  }

  module.exports = longest;