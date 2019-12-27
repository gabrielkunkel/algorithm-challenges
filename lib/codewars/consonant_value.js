/**
 * Given a lowercase string that has alphabetic
 * characters only and no spaces, return the highest
 * value of consonant substrings. Consonants are any
 * letters of the alpahabet except "aeiou".
 * We shall assign the following values:
 *          a = 1, b = 2, c = 3, .... z = 26.
 * @param  {string} s Given a lowercase string that has alphabetic characters only and no spaces
 * @return {number}   the highest value of consonant substrings
 */
function solve(s) {

  // determine value of individual letter
  function checkLetter(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz', vowels = 'aeiou';
    return vowels.indexOf(s) === -1 ? alphabet.indexOf(s) + 1 : 0;
  }

  // create a new array from the string
  let arrayFromString = s.split('');
  let arrayProcessedToNumbers = arrayFromString.map(item => checkLetter(item));

  // process array of the added numbers that aren't zero, sort, and pop
  let workingArray = [], accumulater = 0;

  arrayProcessedToNumbers.forEach(function(item, index){
    if(item === 0) {
      workingArray.push(accumulater);
      accumulater = 0;
    } else {
      accumulater += item;
    }

    if(index === arrayProcessedToNumbers.length-1) {
      workingArray.push(accumulater);
    }

  });
  
  return workingArray.sort((a,b) => a - b).pop();
}

module.exports = solve;
