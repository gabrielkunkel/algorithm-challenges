const greatestCommonFactor = require('../../lib/codewars/greatest_common_factor.js');

describe('Greatest Common Factor', function() {

  it('should return a Number', function() {
    expect(typeof greatestCommonFactor([1,1])).toEqual('number');
  });

  it('returns gcf', function() {
    expect(greatestCommonFactor([1, 8])).toBe(1);
    expect(greatestCommonFactor([171, 45, 297, 342])).toBe(9);
  });

});
