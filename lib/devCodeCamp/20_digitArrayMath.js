
/**
 * Write functions that add, subtract, and multiply 
 * two numbers in their digit-array representation 
 * (and return a new digit list). 
 * 
 * If you’re ambitious 
 * you can implement Karatsuba multiplication. Try different 
 * bases. What is the best base if you care about speed?
 * 
 * Presumes positive numbers.
 */

 /**
  * @name substract
  * @param {string} a of a number
  * @param {string} b of a number
  * @returns {string} of a number
  */
function substract(a, b) {
    // turn strings into arrays
    // reverse them to work on them in order of 1's place to 10's place etc.
    a = a.split('').reverse().map(digit => parseInt(digit));
    b = b.split('').reverse().map(digit => parseInt(digit));
    let result = [];

    // perform substractions

    // take the 10's in the next place to resolve negatives


}

/**
 * @name add
 * @description a simple version I did today
 * @param {string} a of a number
 * @param {string} b of a number
 * @returns {string} of a number
 */
function add(a, b) {

    // turn strings into arrays
    // reverse them to work on them in order of 1's place to 10's place etc.
    a = a.split('').reverse().map(digit => parseInt(digit));
    b = b.split('').reverse().map(digit => parseInt(digit));
    let result = [];

    // add up the numbers
    for (let i = 0; a[i] >= 0 || b[i] >= 0; i+=1) {
        result[i] = a[i] + b[i];
    }

    // go through the result and make it so each element has only one digit
    // TODO: factor this out into its own function
    for (let i = 0; result[i] >= 0; i += 1) {
        if (result[i] >= 10) {

            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10);

            result[i] %= 10;
        }
    } // end for loop

    return result.reverse().join('');
}

/**
 * @name add
 * @description this is a classic version I did in the past
 * @param {string} a string of numbers
 * @param {string} b of numbers
 */
function sumStrings(a, b) {
    var numArrA = a.split('');
    var numArrB = b.split('');
    var longestArrayLength = numArrA.length > numArrB.length ? numArrA.length : numArrB.length;
  
    while (numArrA.length !== numArrB.length) {
      if (numArrA.length > numArrB.length) {
        numArrB.unshift('0');
      }
      else if (numArrA.length < numArrB.length) {
        numArrA.unshift('0');
      }
    }
  
    var carry = {};
    var answer = [];
    var finalAnswerArr = [];
  
    for(var i = longestArrayLength - 1; i >= 0; i -= 1) {
      var totalNum = parseInt(numArrA[i] || 0) + parseInt(numArrB[i] || 0);
  
      if (carry[i]) {
        totalNum += parseInt(carry[i]);
        delete carry[i];
      }
  
      var totalString = totalNum.toString();
  
      if(totalString.length > 1) {
        var totalStringArray = totalString.split('');
        carry[i-1] = totalStringArray[0];
        answer.unshift(totalStringArray[1]);
      } else {
        answer.unshift(totalString);
      }
  
    } // end for loop
  
    if (carry[i]) {
      answer.unshift(carry[i]);
    }
  
    var passPositiveDigit = false;
    for (var j = 0; j < answer.length; j += 1) {
  
      if(answer[j] !== '0' || passPositiveDigit === true) {
        passPositiveDigit = true;
        finalAnswerArr.push(answer[j]);
      }
    }
  
    return finalAnswerArr.join('');
  
  }

/**
 * @name multiply
 * @param {string} a of a number
 * @param {string} b of a number
 * @returns {string} of a number
 */
function multiply(a, b) {

    // turn strings into arrays
    // reverse them to work on them in order of 1's place to 10's place etc.
    a = a.split('').reverse();
    b = b.split('').reverse();
    let result = [];

    // a permutation of multiplications
    for (let i = 0; a[i] >= 0; i += 1) {
        for (let j = 0; b[j] >= 0; j += 1) {

            if (!result[i + j]) {
                result[i + j] = 0;
            }

            result[i + j] += a[i] * b[j];
        }
    } // end for loops

    // go through the result and make it so each element has only one digit
    // TODO: factor this out into its own function
    for (let i = 0; result[i] >= 0; i += 1) {
        if (result[i] >= 10) {

            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10);

            result[i] %= 10;
        }
    } // end for loop

    // is this necessary?
    // remove any zeros at the front of the number, but first...
    if (result.length > 1) {     // ...check that it's worth the bother

        for (var i = result.length - 1; i >= 0; i -= 1) {
            if (result[i] === 0) {
                result.pop()
            }
            else {
                break;
            }
        } // end for loop

    }

    // make it so the digits are in the correct viewing order and are one string
    return result.reverse().join('');
}

module.exports = { 
    multiply,
    add,
    substract
};