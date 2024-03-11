/*global describe, it, expect*/
/*eslint no-undef: "error"*/
const Converter = require('./converter');

describe('Converter', () => {
  const converter = new Converter();
  describe('Convert function', () => {
    it('Should throw if constructor is empty', () => {
      expect(() => converter.convert()).toThrow();
    });
  });

  describe('getPreformatted text', () => {
    it('Should return the same text', () => {
      const line = 'Just a text';
      expect(converter.getPreformatedText(line)).toBe(line);
    });

    it('Should return preformated text', () => {
      const line = 'It is ```preformatted``` text.';
      const output = 'It is PRE{{0}}PRE text.';
      expect(converter.getPreformatedText(line)).toBe(output);
    });

    it('Should return all preformatted text', () => {
      const line = '```Pre``` ```for``` ```matted```';
      const output = 'PRE{{0}}PRE PRE{{1}}PRE PRE{{2}}PRE';
      expect(converter.getPreformatedText(line)).toBe(output);
    });

    it('Should pass with special characters', () => {
      const text = '```special```: \\ \\n \\t';
      const output = 'PRE{{0}}PRE: \\ \\n \\t';
      expect(converter.getPreformatedText(text)).toBe(output);
    });

    it('Should pass with empty line', () => {
      expect(converter.getPreformatedText('')).toBe('');
    });

    it('Should throw without line param', () => {
      expect(() => converter.getPreformatedText()).toThrow();
    });

    it('Should throw if param is not a string', () => {
      expect(() => converter.getPreformatedText(123)).toThrow();
    });
  });

  describe('Set preformatted text function', () => {
    it('Should return text', () => {
      const line = 'Just a text.';
      expect(converter.setPreformattedText(line)).toBe(line);
    });

    it('Should return preformatted text', () => {
      const line = 'PRE{{0}}PRE PRE{{1}}PRE PRE{{2}}PRE';
      const output = '<pre>preformatted</pre> <pre>Pre</pre> <pre>for</pre>';
      expect(converter.setPreformattedText(line)).toBe(output);
    });

    it('Should pass with empty string', () => {
      expect(converter.setPreformattedText('')).toBe('');
    });

    it('Should not pass with no param', () => {
      expect(() => converter.setPreformattedText()).toThrow();
    });

    it('Should not pass with not string param', () => {
      expect(() => converter.setPreformattedText(123)).toThrow();
    });
  });

  describe('Get paragraphs func', () => {
    it('Should return one paragraph', () => {
      const line = 'paragraph';
      const output = '<p>paragraph</p>';
      expect(converter.getParagraphs(line)).toBe(output);
    });

    it('Should return many paragraphs', () => {
      const line = 'paragraph\n\nparagraph\n\nparagraph';
      const output = '<p>paragraph</p>\n<p>paragraph</p>\n<p>paragraph</p>';
      expect(converter.getParagraphs(line)).toBe(output);
    });

    it('Should return empty string', () => {
      expect(converter.getParagraphs('')).toBe('');
    });

    it('Should not pass with no param', () => {
      expect(() => converter.getParagraphs()).toThrow();
    });

    it('Should not pass with not string param', () => {
      expect(() => converter.getParagraphs(123)).toThrow();
    });
  });
});
