const separatedBy = require('../../lib/devCodeCamp/13_separateAB');

describe('separated by', () => {
    
    it('returns a boolean', () => {
        expect(typeof separatedBy("love")).toEqual("boolean");
    });

    it('detects A and B separated by three places', () => {
        expect(separatedBy("aqqqb")).toBe(true);
    });

    it('returns false when the separation is further by one', () => {
        expect(separatedBy("aqqqqb")).toBe(false);
    });

    it('returns false when the separation is less by one', () => {
        expect(separatedBy("aqqb")).toBe(false);
    });

    it('returns true if separated by various characters', () => {
        expect(separatedBy("a5tmb")).toBe(true);
    });

    it('returns true if separated by various characters, buried in a longer string', () => {
        expect(separatedBy("grorguolurga5tmbeorueu")).toBe(true);
    });

    it('returns true if separated by various characters, buried in a longer string with other a or b', () => {
        expect(separatedBy("aaaaaaaaaayyyb")).toBe(true);
    });

});
