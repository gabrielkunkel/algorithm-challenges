const findLongestPalindrome = require('../../lib/devCodeCamp/09_findTheLongestPalidromic');

describe('longest palindrome', () => {
    
    it('should return itself if the entire string is a palindrome', () => {
        expect(findLongestPalindrome("abacabbacaba")).toEqual("abacabbacaba");
    });

    it('returns *no palindromes* if there are none', () => {
        expect(findLongestPalindrome("abcdefghi")).toEqual('No Palindromes');
    });

    it('returns a palindrome hidden inside a non-palindrome toward the right', () => {
        expect(findLongestPalindrome("abcdefghabaijk")).toEqual('aba');
        expect(findLongestPalindrome("abcdefghijkdabbadlmno")).toEqual('dabbad');
    });

    it('returns a palindrome hidden inside a non-palindrome toward the left', () => {
        expect(findLongestPalindrome("abcabadefghijk")).toEqual('aba');
        expect(findLongestPalindrome("adabbadbcdefghijklmno")).toEqual('dabbad');     
    });


});