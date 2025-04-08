import { describe, it } from 'node:test';
import { equal } from 'node:assert/strict';
import {
    countLetter,
    countLetterA,
    countLetterWithOption,
    countNumbers,
    greaterEvenNumber,
    isIncreasing,
    isInOrder,
} from './index.js';

// describe('countLetterA', ()=> {
//     it('returns 0 if not "a" are found', ()=> {
//         const result = countLetterA('fffffffffffffff');
//         equal(result, 0);
//     });

//     it('returns the number of "a" that are found', ()=> {
//         const result = countLetterA('gato albino');
//         equal(result, 2);
//     });

//     it('can recognize "A" as well', ()=> {
//         const result = countLetterA('gato Albino');
//         equal(result, 1);
//     });
// });

// describe('countNumbers', () => {
//     it('should not found number', () => {
//         const str = 'qwerty';
//         equal(countNumbers(str), 0)
//     })

//     it('should found 3', () => {
//         const str = '0qwe1rty2';
//         equal(countNumbers(str), 3)
//     })
// })

describe('countLetter', ()=> {
    it('returns 0 if letter is found', ()=> {
        const str = 'fffffffffffffff';
        equal(countLetter(str, 'b'), 0)
    });

    it('returns how many times the letter is found', ()=> {
        const str = 'gato albino';
        equal(countLetter(str, 'o'), 2)
    });
})

// describe('countLetterWithOption', () => {
//     describe('case sensitive', () => {
//         it('should not found the letter', () => {
//             const str = 'qwerty';
//             equal(countLetterWithOption(str, 'u', true), 0);
//         })

//         it('should count uppercase letters', () => {
//             const str = 'QWERTY';
//             equal(countLetterWithOption(str, 'q', true), 1);
//         })

//         it('should count lowercase letter', () => {
//             const str = 'qwerty';
//             equal(countLetterWithOption(str, 'q', true), 1);
//         })

//         it('should count uppercase and lowercase letter', () => {
//             const str = 'qwertyQWERTY';
//             equal(countLetterWithOption(str, 'q', true), 2);
//         })
//     })

//     describe('no case sensitive', () => {
//         it('should not found the letter', () => {
//             const str = 'qwerty';
//             equal(countLetterWithOption(str, 'u'), 0);
//         })

//         it('should ignore uppercase letters', () => {
//             const str = 'QWERTY';
//             equal(countLetterWithOption(str, 'q'), 0);
//         })

//         it('should find results', () => {
//             const str = 'qwerty';
//             equal(countLetterWithOption(str, 'q'), 1);
//         })

//         it('should NOT count uppercase and lowercase letter', () => {
//             const str = 'qwertyQWERTY';
//             equal(countLetterWithOption(str, 'q', true), 1);
//         })
//     })
// })

// describe('greaterEvenNumber', () => {
//     it('should not find any', () => {
//         const list = [3,5,7,9];
//         equal(greaterEvenNumber(list), 0);
//     })

//     it('should find one result', () => {
//         const list = [3,2,7,9];
//         equal(greaterEvenNumber(list), 1);
//     })

//     it('should check a increasing list', () => {
//         const list = [2, 4, 6, 8];
//         equal(greaterEvenNumber(list), 1);
//     })

//     it('should check a decreasing list', () => {
//         const list = [8, 6, 4, 2];
//         expect(greaterEvenNumber(list), 1);
//     })
// })

// describe('isIncreasing', () => {
//     it('should check a complete decreasing list', () => {
//         const list = [5, 4, 3, 2, 1];
//         equal(isIncreasing(list), false);
//     });

//     it('should check a complete increasing list', () => {
//         const list = [1, 2, 3, 4, 5];
//         equal(isIncreasing(list), false);
//     });

//     it('should check broken increasing list', () => {
//         const list = [1, 2, 1, 4, 5];
//         equal(isIncreasing(list), false);
//     });
// })

// describe('isInOrder', () => {
//     it('should check a complete decreasing list', () => {
//         const list = [5, 4, 3, 2, 1];
//         equal(isInOrder(list), false);
//     });

//     it('should check a complete increasing list', () => {
//         const list = [1, 2, 3, 4, 5];
//         equal(isInOrder(list), true);
//     });

//     it('should check broken increasing list', () => {
//         const list = [1, 2, 1, 4, 5];
//         equal(isInOrder(list), false);
//     });
// })
