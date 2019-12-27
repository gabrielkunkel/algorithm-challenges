
function findLeapYears(terminate) {
    const startingYear = 2016;
    const terminateYear = startingYear + terminate;
    let leapYearsArray = [];

    for(let i = startingYear+4; i <= terminateYear; i+=4) {
        leapYearsArray.push(i);
    }

    return leapYearsArray;
}

module.exports = findLeapYears;