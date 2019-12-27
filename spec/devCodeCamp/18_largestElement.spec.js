const largestElement = require('../../lib/devCodeCamp/18_largestElement');

describe('largest element', () => {
    
    it('finds the largest element in an array of numbers', () => {
        expect(largestElement([3, 6, 2])).toBe(6);
    });

});