const {countA, countLetter} = require("./index");


describe('countA', ()=> {
    it('returns 0 if not "a" are found', ()=> {
        expect(countA('fffffffffffffff')).toBe(0);
    });

    it('returns the number of "a" that are found', ()=> {
        expect(countA('gato albino')).toBe(2);
    });

    it('can recognize "A" as well', ()=> {
        expect(countA('gato Albino')).toBe(2);
    });
});

describe('countLetter', ()=> {
    it('returns 0 if letter is found', ()=> {
        expect(countLetter('fffffffffffffff','b')).toBe(0);
    });

    it('returns how many times the letter is found', ()=> {
        expect(countLetter('gato albino', 'o')).toBe(2);
    });

    it('can recognize the capital letter too', ()=> {
        expect(countLetter('gato AlbiNo','n')).toBe(1);
    });
})