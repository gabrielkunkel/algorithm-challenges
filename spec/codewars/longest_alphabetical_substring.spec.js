const longest = require("../../lib/codewars/longest_alphabetical_substring");

describe('find longest alphabetical substring', () => {
    
   it('should return a string', () => {
    let result = longest('aseonh');
    expect(typeof result).toEqual('string');
   });

   it('returns alphabetically ordered string in its entirety', () => {
       let result = longest('abcdef');
       expect(result).toEqual('abcdef');
   });

   it('returns alphabetically ordered string with doubled up', () => {
    let result = longest('aabbccddeeff');
    expect(result).toEqual('aabbccddeeff');
    });

    it('returns the first if there is no number of alphabetical characters', () => {
        let result = longest('zcba');
        expect(result).toEqual('z');
    });

    it('should give ab for nab', () => {
        let result = longest('nab');
        expect(result).toEqual('ab');
    });

   it('should return the longest alphabetical substring', () => {
       let result = longest('asdfbyfgiklag');
       expect(result).toEqual('fgikl');
   });


    
});