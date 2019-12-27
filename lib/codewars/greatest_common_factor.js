
function greatestCommonFactor(array) {
  // create an object to organize the factors and tallies
  let obj = {};
  // create a function that returns the factors of a number
  function findFactors(num) {
    let factorArray = [];

    // increment from one to the number itself
    for(let i = 1; i <= num; i += 1) {
      if (Number.isInteger(num / i)) {
        factorArray.push(i);
      };
    }
    return factorArray;
  }

  // use the function to traverse the array and build the object with tallies
  array.forEach(item => {
    let factorArray = findFactors(item);
    factorArray.forEach(numberToTally => {
      if (!obj[parseInt(numberToTally)]) {
        obj[parseInt(numberToTally)] = 1;
      } else {
        obj[parseInt(numberToTally)] += 1;
      }
    });
  });

  // go over the object and see who won
  let currentWinner;
  for (factor in obj) {
    if (!currentWinner && obj[factor] === array.length) {
      currentWinner = factor;
    }
    if (obj[factor] === array.length && Number(factor) > Number(currentWinner)) {
      currentWinner = factor;
    }
  }

  return Number(currentWinner);
};



module.exports = greatestCommonFactor;
