const {
    countLetterA,
    countLetter,
    countNumbers,
    countLetterWithOption,
    isIncreasing,
    isInOrder,
} = require("./index");


describe('countLetterA', ()=> {
    it('returns 0 if not "a" are found', ()=> {
        expect(countLetterA('fffffffffffffff')).toBe(0);
    });

    it('returns the number of "a" that are found', ()=> {
        expect(countLetterA('gato albino')).toBe(2);
    });

    it('can recognize "A" as well', ()=> {
        expect(countLetterA('gato Albino')).toBe(1);
    });
});

describe('countNumbers', () => {
    it('should not found number', () => {
        const str = 'qwerty';
        expect(countNumbers(str)).toBe(0);
    })

    it('should found 3', () => {
        const str = '0qwe1rty2';
        expect(countNumbers(str)).toBe(3);
    })
})

describe('countLetter', ()=> {
    it('returns 0 if letter is found', ()=> {
        expect(countLetter('fffffffffffffff','b')).toBe(0);
    });

    it('returns how many times the letter is found', ()=> {
        expect(countLetter('gato albino', 'o')).toBe(2);
    });
})

describe('countLetterWithOption', () => {
    describe('case sensitive', () => {
        it('should not found the letter', () => {
            const str = 'qwerty';
            expect(countLetterWithOption(str, 'u', true)).toBe(0)
        })

        it('should count uppercase letters', () => {
            const str = 'QWERTY';
            expect(countLetterWithOption(str, 'q', true)).toBe(1)
        })

        it('should count lowercase letter', () => {
            const str = 'qwerty';
            expect(countLetterWithOption(str, 'q', true)).toBe(1);
        })

        it('should count uppercase and lowercase letter', () => {
            const str = 'qwertyQWERTY';
            expect(countLetterWithOption(str, 'q', true)).toBe(2);
        })
    })

    describe('no case sensitive', () => {
        it('should not found the letter', () => {
            const str = 'qwerty';
            expect(countLetterWithOption(str, 'u')).toBe(0)
        })

        it('should ignore uppercase letters', () => {
            const str = 'QWERTY';
            expect(countLetterWithOption(str, 'q')).toBe(0)
        })

        it('should find results', () => {
            const str = 'qwerty';
            expect(countLetterWithOption(str, 'q')).toBe(1);
        })

        it('should NOT count uppercase and lowercase letter', () => {
            const str = 'qwertyQWERTY';
            expect(countLetterWithOption(str, 'q', true)).toBe(1);
        })
    })
})

describe('greaterEvenNumber', () => {
    it('should not find any', () => {
        const list = [3,5,7,9];
        expect(greaterEvenNumber(list)).toBe(0)
    })

    it('should find one result', () => {
        const list = [3,2,7,9];
        expect(greaterEvenNumber(list)).toBe(1)
    })

    it('should check a increasing list', () => {
        const list = [2, 4, 6, 8];
        expect(greaterEvenNumber(list)).toBe(1)
    })

    it('should check a decreasing list', () => {
        const list = [8, 6, 4, 2];
        expect(greaterEvenNumber(list)).toBe(1)
    })
})

describe('isIncreasing', () => {
    it('should check a complete decreasing list', () => {
        const list = [5, 4, 3, 2, 1];
        expect(isIncreasing(list)).toBe(false)
    });

    it('should check a complete increasing list', () => {
        const list = [1, 2, 3, 4, 5];
        expect(isIncreasing(list)).toBe(false)
    });

    it('should check broken increasing list', () => {
        const list = [1, 2, 1, 4, 5];
        expect(isIncreasing(list)).toBe(false)
    });
})

describe('isInOrder', () => {
    it('should check a complete decreasing list', () => {
        const list = [5, 4, 3, 2, 1];
        expect(isInOrder(list)).toBe(false)
    });

    it('should check a complete increasing list', () => {
        const list = [1, 2, 3, 4, 5];
        expect(isInOrder(list)).toBe(true)
    });

    it('should check broken increasing list', () => {
        const list = [1, 2, 1, 4, 5];
        expect(isInOrder(list)).toBe(false)
    });
})