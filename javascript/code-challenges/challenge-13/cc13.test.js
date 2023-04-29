'use strict';

// Require our linked list implementation
const {validateBrackets} = require('./index');

describe('Code Challenge 13: ValidateBrackets', () => {
  test('Should return true if brackets are good, false if brackets are bad in string', () => {
    expect(validateBrackets('{}')).toEqual(true);
    expect(validateBrackets('{}(){}')).toEqual(true);
    expect(validateBrackets('()[[Extra Characters]]')).toEqual(true);
    expect(validateBrackets('(){}[[]]')).toEqual(true);
    expect(validateBrackets('{}{Code}[Fellows](())')).toEqual(true);
    expect(validateBrackets('[({}]')).toEqual(false);
    expect(validateBrackets('(](')).toEqual(false);
    expect(validateBrackets('{(})')).toEqual(false);
    expect(validateBrackets('{')).toEqual(false);
    expect(validateBrackets(')')).toEqual(false);
    expect(validateBrackets('[}')).toEqual(false);
  });

});
