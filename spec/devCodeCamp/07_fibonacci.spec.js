const getFibonacci = require('../../lib/devCodeCamp/07_fibonacci');

describe('fibonacci generator', () => {
    
    it('generates fibonacci sequence to a limit', () => {
        expect(getFibonacci(22)).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
    });
});