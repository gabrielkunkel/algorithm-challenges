const fromThirteen = require('../../lib/devCodeCamp/11_fromThirteen');

describe('fromThirteen', () => {
    
    it('returns 0 from 13', () => {
        expect(fromThirteen(13)).toBe(0);
    });

    it('gets the difference when 13 or less', () => {
        expect(fromThirteen(6)).toBe(7);
        expect(fromThirteen(1)).toBe(12);
    });

    it('gives us double the absolute difference above 13', () => {
        expect(fromThirteen(14)).toBe(2);
        expect(fromThirteen(30)).toBe(34);
    });

});