const isProperFraction = require('../../lib/devCodeCamp/16_isProperFraction');

describe('determining a proper fraction or not', () => {
    
    it('returns a boolean', () => {
        expect(typeof isProperFraction("1/2")).toEqual("boolean");
    });

    it('judges a proper fraction correctly', () => {
        expect(isProperFraction("1/2")).toBe(true);
    });

    it('judges an improper fraction correctly', () => {
        expect(isProperFraction("4/3")).toBe(false);
    });

    it('judges a negative fraction correctly', () => {
        expect(isProperFraction("-1/2")).toBe(false);
    });

});