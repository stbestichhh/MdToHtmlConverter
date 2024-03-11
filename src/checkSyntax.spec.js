const checkSyntax = require('./checkSyntax');

describe('Check syntax function', () => {
  it('Should throw if line starts with _', () => {
    const line = '_something';
    const errorMessage = line + ' | Invalid input: Lines starting with _ followed by a word are not allowed.';
    expect(() => checkSyntax(line)).toThrow(errorMessage);
  });

  it('Should throw if line has wrong syntax', () => {
    const line = '**_something_**';
    const errorMessage = line + ' | Invalid input: Lines with the pattern **_$1_** are not allowed.';
    expect(() => checkSyntax(line)).toThrow(errorMessage);
  });
});

// const checkSyntax = (text) => {
//   const lines = text.split('\n');
//   for (const line of lines) {
//     if (line.startsWith('_') && !line.endsWith('_') && !line.startsWith('_ ')) {
//       throw new Error(line + ' | Invalid input: Lines starting with _ followed by a word are not allowed.');
//     } else if (/\*\*`_([^`]+?)_`\*\*/.test(line)) {
//       throw new Error(line + ' | Invalid input: Lines with the pattern **_$1_** are not allowed.');
//     }
//   }
// }

// module.exports = checkSyntax;
