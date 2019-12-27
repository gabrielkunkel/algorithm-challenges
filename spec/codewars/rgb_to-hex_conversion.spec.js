const rgb = require("../../lib/codewars/rgb_to_hex_conversion");

describe('rgb to hex conversion', () => {
    
   it('should return a string', () => {
    let result = rgb(250, 250, 250);
    expect(typeof result).toEqual('string');
   });

   it('converts rgb to hex', () => {
       let result = rgb(173, 255, 47);
       let result_two = rgb(148, 0, 211);
       expect(result).toEqual('ADFF2F');
       expect(result_two).toEqual('9400D3');
   });

   it('converts rgb to hex when 0', () => {
    let result_one = rgb(0, 0, 0);
    expect(result_one).toEqual('000000');
    });

    it('rounds up if negative', () => {
        let result = rgb(-173, -255, -47);
        expect(result).toEqual('000000');
    });

    it('rounds down if over 255', () => {
        let result = rgb(300, 475, 256);
        expect(result).toEqual('FFFFFF');
    });

    
});