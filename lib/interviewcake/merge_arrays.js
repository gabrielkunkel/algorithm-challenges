
/**
 * Solution for:
 * https://www.interviewcake.com/question/javascript/merge-sorted-arrays?course=fc1&section=array-and-string-manipulation
 * 
 */
function mergeArrays(myArray, alicesArray) {

    // solution #1: in a while loop (this is more efficint at O(n))
    let finalArray = [];
    let i = 0, j = 0;
    
    if (myArray.length === 0)
      return alicesArray;
    
    if (alicesArray.length === 0)
      return myArray;
    
    while(i < alicesArray.length && i < myArray.length) {
      
      if(alicesArray[i] > myArray[j]) {
        finalArray.push(myArray[j])
        j+=1;
      } else { 
        finalArray.push(alicesArray[i]);
        i+=1;
      }
    }
    
      if (i === alicesArray.length) {
        let remainingElements = myArray.slice(j) 
      finalArray = finalArray.concat(remainingElements);
    } else if (j === myArray.length) {
        let remainingElements = alicesArray.slice(i)
      finalArray = finalArray.concat(remainingElements);
    }
    
    return finalArray;
    
    // solution #2: Super Simple (this is less efficient at O(n log n))
    
    /*
    let newArray = alicesArray.concat(myArray);
    newArray.sort((a,b) => a - b );
    
    return newArray;
    */
  }
  