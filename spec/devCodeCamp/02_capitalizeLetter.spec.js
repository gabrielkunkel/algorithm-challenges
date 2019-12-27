const capitalizeLetter = require("../../lib/devCodeCamp/02_capitalizeLetter");

describe('capitalize Letter', () => {
    
    it('capitalize a single word', () => {
        expect(capitalizeLetter("rum")).toEqual("Rum");
    });

    it('capitalizes each words first letter', () => {
        expect(capitalizeLetter("mom preys")).toEqual("Mom Preys");
    });

});