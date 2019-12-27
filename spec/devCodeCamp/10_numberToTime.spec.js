const numberToTime = require('../../lib/devCodeCamp/10_numberToTime');

describe('convert a number to hours and minutes', () => {
    
    it('should return correct hours from two digit even number', () => {
        expect(numberToTime(60)).toEqual("1:00");
    });

    it('should return correct hours and minutes from two digit odd number', () => {
        expect(numberToTime(61)).toEqual("1:01");
    });

    it('should return correctly from a three digit amount', () => {
        expect(numberToTime(860)).toEqual("14:20");
    });

    it('returns 00 for hours when less than an hour', () => {
        expect(numberToTime(20)).toEqual("00:20");
    });

});