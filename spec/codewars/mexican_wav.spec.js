const wave = require('../../lib/codewars/mexican_wave.js');

describe('Mexican wave', function() {

  it('should take hello and wave it', function() {
    expect(wave('hello')).toEqual(["Hello", "hEllo", "heLlo", "helLo", "hellO"]);
  });

  it('should return an empty array for an empty string', function() {
    expect(wave('')).toEqual([]);
  });

  it('skips the spaces', function() {
    expect(wave('two words')).toEqual(["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]);
  });

});
