const palindrome = require("../../lib/devCodeCamp/04_palindrome");

describe("check for a palindrome", function () {

    it("should be defined as a function", function() {
      expect(palindrome).toBeDefined();
    }); // end it
  
    it("should return true for 'eye' ", function() {
      expect(palindrome("eye")).toBe(true);
    }); // end it
  
    it("should return false for 'almostomla'", function() {
      expect(palindrome("almostomla")).toBe(false);
    }); // end it

    it('handles even-lettered palindromes', () => {
        expect(palindrome("brdbbdrb")).toBe(true);
    });
  
    it('returns true for multiple word palindromes', () => {
        expect(palindrome("never odd or even")).toBe(true);
    });

    it('returns false for even-lengthed oddities', () => {
        expect(palindrome("eyeyey")).toBe(false);
    });

    it('returns true for odd-length oditties', () => {
        expect(palindrome("eyeye")).toBe(true);
    });

  }); // end describe