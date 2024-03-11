/*global describe, it, expect*/
/*eslint no-undef: "error"*/

const checkSyntax = require('./checkSyntax');

describe('Check syntax function', () => {
  it('Should throw if line starts with _', () => {
    const line = '_something';
    const errorMessage = line + ' | Invalid input: Lines starting with _ followed by a word are not allowed.';
    expect(() => checkSyntax(line)).toThrow(errorMessage);
  });

  it('Should pass if line starts with `_ `', () => {
    const line = '_ something';
    expect(checkSyntax(line));
  });

  it('Should throw if line has wrong syntax', () => {
    const line = '**`_something_`**';
    const errorMessage = line + ' | Invalid input: Lines with the pattern **_$1_** are not allowed.';
    expect(() => checkSyntax(line)).toThrow(errorMessage);
  });

});
