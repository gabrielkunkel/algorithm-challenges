const cleanString = require("../../lib/codewars/backspaces_in_string");

describe('backspaces in string clean String', () => {
    
   it('should return a string', () => {
    let result = cleanString('aseonh');
    expect(typeof result).toEqual('string');
   });

   it('returns an empty string from an empty string', () => {
       let result = cleanString('');
       expect(result).toEqual('');
   });

   it('returns an empty string for any number of just hashtags', () => {
       let result_one = cleanString('#########');
       let result_two = cleanString('#');

       expect(result_one).toEqual('');
       expect(result_two).toEqual('');
   });

   it('returns an empty string with a letter and a hashtag', () => {
        let result_one = cleanString('a#');
        let result_two = cleanString('abc###');

        expect(result_one).toEqual('');
        expect(result_two).toEqual('');
   });

   it('appropriately executes backspaces along mixed letters and hashtags', () => {
       let result_one = cleanString('abc#d##c');
       let result_two = cleanString('abc##');
       let result_three = cleanString('abc#def#');

       expect(result_one).toEqual('ac');
       expect(result_two).toEqual('a');
       expect(result_three).toEqual('abde');
   });

    
});