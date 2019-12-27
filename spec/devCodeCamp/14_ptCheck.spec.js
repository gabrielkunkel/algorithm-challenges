const ptCheck = require('../../lib/devCodeCamp/14_ptCheck');

describe('ptCheck', () => {
    
    it('returns a boolean', () => {
        expect(typeof ptCheck("this-string")).toBe("boolean");
    });

    it('tells us if p\'s and t\'s are present in equal number', () => {
        let ptString = "pptt";
        expect(ptCheck(ptString)).toBe(true);
    });

    it('tells us if p\'s and t\'s are not present in equal number', () => {
        let ptString = "ppptt";
        expect(ptCheck(ptString)).toBe(false);
    });

});