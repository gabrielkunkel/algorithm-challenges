const arrayMath = require('../../lib/devCodeCamp/20_digitArrayMath');

const multiply = arrayMath.multiply;
const add = arrayMath.add;


describe('adding', () => {

    it('takes two numbers', () => {
        expect(add('5', '5')).toBe('10');
    });

    it('takes two longer numbers with many zeroes', () => {
        expect(add('10000', '30000')).toBe('40000');
    });




});

describe('multiplication', () => {

    it('takes two very large numbers and multiplies them correctly', () => {
        expect(multiply('88888888', '99999999')).toBe('8888888711111112');
    });

});