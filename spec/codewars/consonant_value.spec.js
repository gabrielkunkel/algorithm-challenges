var solve = require('../../lib/codewars/consonant_value.js');

describe("Solve function", function() {

  it("should return a number", function() {
    let returned = solve('s');
    expect(typeof returned).toBe('number');
  });

  it('should return a number corresponding to the consonant letter', function() {
    let returned = solve('c');
    expect(returned).toBe(3);

    expect(solve('z')).toBe(26);
  });

  it('should give us a zero for a vowel', function() {
    expect(solve('a')).toBe(0);
  });

  it('should take two consonants together and give a total', function() {
    expect(solve('cz')).toBe(29);
  });

  it('should return the highest result from consonants separated by vowels', function() {
    expect(solve('caz')).toBe(26);
    expect(solve('zac')).toBe(26);
  });

  it('should return 26 from zodiac', function() {
    expect(solve('zodiac')).toBe(26);
  });

  it('should pass all other tests', function() {
    expect(solve('chruschtschov')).toBe(80);
  });

/*  describe("Basic tests", function(){
Test.assertEquals(solve("chruschtschov"),80);
Test.assertEquals(solve("khrushchev"),38);
Test.assertEquals(solve("strength"),57);
Test.assertEquals(solve("catchphrase"),73);
Test.assertEquals(solve("twelfthstreet"),103);
Test.assertEquals(solve("mischtschenkoana"),80);
});*/

});
