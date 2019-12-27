/**
 * @name numberToTime
 * @description converts minutes to hours and minutes
 * 
 * STEPS
 * divide the number by 60 and floor it to get the hours
 * 
 * subtract the (hours * 60) from the total minutes to get
 * the remainder minutes
 * 
 * concatenate the hours and minutes with a ":" to return
 * the time string
 * 
 * @param {number} num 
 * @returns {string} string of hours and minutes
 */
function numberToTime(num) {
    let hours = Math.floor(num/60);
    let minutes = num - (hours * 60);
    let filteredHours = hours < 1 ? "00" : hours;
    let filteredMinutes = minutes < 10 ? "0" + minutes : minutes

    return filteredHours + ":" + filteredMinutes;
}

module.exports = numberToTime;