/**
 * 
 * https://www.interviewcake.com/question/javascript/cafe-order-checker
 * 
 * @param {number[]} takeOutOrders 
 * @param {number[]} dineInOrders 
 * @param {number[]} servedOrders 
 */
function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    if (takeOutOrders.length + dineInOrders.length !== servedOrders.length)
        return false;

    let checkTakeOutOrders = checkOneArray(takeOutOrders, servedOrders);
    let checkDineInOrders = checkOneArray(dineInOrders, servedOrders);
  
    
    if (checkTakeOutOrders && checkDineInOrders) {
      return true;
    } else {
      return false;
    }
  }
  
  function checkOneArray(arr, servedOrders) {
  
    let result = true;
    let servedOrderPosition = 0;
    
    arr.forEach(item => {
      
      let checkIndex = servedOrders.indexOf(item);
      
      if(checkIndex < servedOrderPosition) { 
        result = false;
      }
      else {
        servedOrderPosition = checkIndex;
      }
    });
    
    return result;
  }

  module.exports = isFirstComeFirstServed;