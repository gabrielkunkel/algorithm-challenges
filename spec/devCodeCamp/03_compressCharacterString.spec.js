const compressCharacterString = require('../../lib/devCodeCamp/03_compressCharacterString.js');

describe('compress character string', () => {
    
    it('returns a string', () => {
        let result = compressCharacterString("a");
        expect(typeof result).toBe("string");
    });

    it('returns a count of the letters, followed by the letter', () => {
        let result = compressCharacterString("aaa");
        expect(result).toEqual("3a");
    });

    it('returns a long string of the same characters', () => {
        const str = "aaaaaaaaaaaaa";
        let result = compressCharacterString(str);
        expect(result).toEqual(str.length + "a");
    });

    it('converts multiple characters into compressed string', () => {
        let result = compressCharacterString("aaabbb");
        expect(result).toEqual("3a3b");
    });

    it('converts multiple characters, repeated into compressed stirng', () => {
        let result = compressCharacterString("aaaabbbbaacccddaaaa");
        expect(result).toEqual("4a4b2a3c2d4a");
    });

});