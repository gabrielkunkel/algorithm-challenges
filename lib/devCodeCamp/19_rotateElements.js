
/**
 * @name rotateElements
 * @description Write a function that rotates a list by k elements. 
 * You input a value for k the represents how many places in the 
 * array you want to rotate by. For example, if k is rotated by 
 * 2,[1,2,3,4,5,6]becomes[3,4,5,6,1,2]. Try solving this without 
 * creating a copy of the array. How many swap or move operations 
 * do you need?
 * 
 * @param {any[]} arr 
 * @param {number} rotations the number of rotations to the array
 * @returns {any[]} the new array
 */
function rotateElements(arr, rotations) {
    for (let i = 0; i < rotations; i+=1) {
        let shiftingDigit = arr.shift();
        arr.push(shiftingDigit);
    }

    return arr;
}

module.exports = rotateElements;