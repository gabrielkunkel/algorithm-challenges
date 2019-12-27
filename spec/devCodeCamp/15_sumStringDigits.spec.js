const sumStringDigits = require('../../lib/devCodeCamp/15_sumStringDigits');

describe('Summing digits in a string', () => {
    
    it('returns a number', () => {
        expect(typeof sumStringDigits('478')).toEqual("number");
    });

    it('gives me a single digit answer for a single digit string', () => {
        expect(sumStringDigits('7')).toBe(7);
    });

    it('adds up the digits in a two character string with only numbers', () => {
        expect(sumStringDigits('78')).toBe(15);
    });

    it('adds up the digits in a multiple character string with only numbers', () => {
        expect(sumStringDigits('789104')).toBe(29);
    });

    it('adds up the digits in a multiple character string with numbers, letters, and symbols', () => {
        expect(sumStringDigits('7aa$8**9b1q04m')).toBe(29);
    });
});