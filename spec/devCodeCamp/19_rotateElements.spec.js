const rotateElements = require('../../lib/devCodeCamp/19_rotateElements');

describe('rotate elements', () => {
    
    it('outputs an array', () => {
        expect(Array.isArray(rotateElements([1, 2, 3]))).toBe(true);
    });

    it('rotates elements by one', () => {
        expect(rotateElements([1, 2, 3], 1)).toEqual([2, 3, 1]);
    });

    it('rotates elements by three', () => {
        expect(rotateElements([1, 2, 3, 4, 5,], 3)).toEqual([4, 5, 1, 2, 3,]);
    });

});