/**
 * @name shareOnesPlace
 * @description Write a JavaScript program to check from 
 * three given numbers (non negative integers) that two 
 * or all of them have the same rightmost digit.
 * NOTE: This solution covers any number of inputs.
 * 
 * @param {number[]} arr of numbers
 * @returns {boolean} whether two or more numbers share the same digit in the one's place 
 */
function shareOnesPlace(arr) {
    let poppedElement;

    let arrayOnesPlace = arr.map(number => {
        let stringedNumber = number.toString();
        return stringedNumber[stringedNumber.length-1];
    });

    while(arrayOnesPlace.length) {
        poppedElement = arrayOnesPlace.pop();
        if (arrayOnesPlace.indexOf(poppedElement) !== -1) {
            return true;
        }
    }

    return false;
}

module.exports = shareOnesPlace;