const shareOnesPlace = require('../../lib/devCodeCamp/12_shareOnesPlace');

describe('numbers sharing ones place', () => {
    
    it('returns a boolean', () => {
        expect(typeof shareOnesPlace([1, 0, 4])).toEqual('boolean');
    });

    it('returns false when given three different single digit numbers', () => {
        expect(shareOnesPlace([1, 0, 4])).toBe(false);
    });

    it('returns true when given two single digit numbers that are the same', () => {
        expect(shareOnesPlace([1, 4, 4])).toBe(true);
    });

    it('returns false when given three different multiple digit numbers with different ones place', () => {
        expect(shareOnesPlace([426, 5138, 44])).toBe(false);
    });

    it('returns true when given three different multiple digit numbers with two same in ones place', () => {
        expect(shareOnesPlace([426, 5138, 46])).toEqual(true);
    });

    it('returns true when given several or more different multiple digit numbers with two same in ones place', () => {
        expect(shareOnesPlace([824, 5138, 46, 489, 724])).toEqual(true);
    });


});