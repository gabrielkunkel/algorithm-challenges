function wave(str){
    let result = [];

    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });

    return result;
}



module.exports = wave;

function wave(s){
  // create an array out of the string
  let workingArray = s.split(''), finalArray = [];

  // iterate through array
  workingArray.forEach(function(item, index, array) {
    if('abcdefghijklmnopqrstuvwxyz'.indexOf(item) !== -1) {
      // create new word with uppercase letter
      let newArray = [...array];
      newArray[index] = item.toUpperCase();

      //    push onto final array
      let newWord = newArray.join('');
      finalArray.push(newWord);
    }
  });


  //    return that array
  return finalArray;
}