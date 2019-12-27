const findLeapYears = require('../../lib/devCodeCamp/08_leapYears');

describe('an array that has all of the upcoming leap years to a point', () => {
    
    it('returns the next 20 leap years', () => {
        expect(findLeapYears(20)).toEqual([
            2020,
            2024,
            2028,
            2032,
            2036
        ]);
    });

});