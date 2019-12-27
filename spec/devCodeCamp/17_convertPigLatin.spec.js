const pigLatinSuite = require('../../lib/devCodeCamp/17_convertPigLatin');

const convertPigLatin = pigLatinSuite.convertPigLatin;
const convertToPigLatin = pigLatinSuite.convertToPigLatin;
const convertToEnglish = pigLatinSuite.convertToEnglish;
const detectPigLatin = pigLatinSuite.detectPigLatin;

// integration tests
describe('convertPigLatin strategy', () => {
    
    it('returns a string', () => {
        expect(typeof convertPigLatin('the')).toEqual('string');
    });

    it('returns pig latin from English', () => {
        expect(convertPigLatin('the quick brown fox')).toEqual('hetay uickqay rownbay oxfay');
    });

    it('returns english from pig latin', () => {
        expect(convertPigLatin('hetay uickqay rownbay oxfay')).toEqual('the quick brown fox');
    });


});


// unit tests
describe('converting English to pig latin', () => {
    
    it('returns a string', () => {
        expect(typeof convertToPigLatin('the')).toEqual('string');
    });

    it('returns pig latin from English', () => {
        expect(convertToPigLatin('the quick brown fox')).toEqual('hetay uickqay rownbay oxfay');
    });

});

describe('converting pig latin to English', () => {
    
    it('returns a string', () => {
        expect(typeof convertToEnglish('hatay')).toEqual('string');
    });

    it('returns english from pig latin', () => {
        expect(convertToEnglish('hetay uickqay rownbay oxfay')).toEqual('the quick brown fox');
    });

});

describe('detecting pig latin', () => {

    it('returns a boolean', () => {
        expect(typeof detectPigLatin('patay')).toEqual('boolean');
    });

    it('tells us if any words are not pig latin', () => {
        expect(detectPigLatin('Hetay uickqay rownbay oxfay')).toBe(true);
    });

    it('tells us if just one word is off it\'s not pig latin', () => {
        expect(detectPigLatin('crowbar Hetay uickqay rownbay oxfay')).toBe(false);
    });

    it('tells us if just one word in the middle isn\'t pig latin', () => {
        expect(detectPigLatin('Hetay uickqay duck taysay rownbay oxfay')).toBe(false); 
    });

});