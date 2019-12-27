const happyNumber = require("../../lib/devCodeCamp/05_happyNumber");

describe('Happy number', () => {
    
    it('returns a boolean', () => {
        expect(typeof happyNumber(46)).toEqual("boolean");
    });

    it('returns true for 1', () => {
        expect(happyNumber(1)).toBe(true);
    });

    it('returns false for 4', () => {
        expect(happyNumber(4)).toBe(false);
    });

    it('returns true for 19', () => {
        expect(happyNumber(19)).toBe(true);
    });

    it('returns false for 2', () => {
        expect(happyNumber(2)).toBe(false);
    });

    it('returns false for 145', () => {
        expect(happyNumber(145)).toBe(false);
    });

    it('returns true for 998', () => {
        expect(happyNumber(998)).toBe(true);
    });

});