const fs = require('fs');
const checkSyntax = require('./checkSyntax.js');

class Converter {
  constructor(mdFile, htmlFile) {
    this.mdFile = mdFile;
    this.htmlFile = htmlFile;
    this.preformatedText = [];
  }

  #patterns = [
    {
      regexp: /(?<=[ ,.:;\n\t]|^)\*\*(?=\S)(.+?)(?<=\S)\*\*(?=[ ,.:;\n\t]|$)/g,
      html: '<b>$1</b>',
    },
    {
      regexp: /(?<=[ ,.:;\n\t]|^)_(?=\S)(.+?)(?<=\S)_(?=[ ,.:;\n\t]|$)/g,
      html: '<i>$1</i>',
    },
    {
      regexp: /(?<=[ ,.:;\n\t]|^)`(?=\S)(.+?)(?=\S)`(?=[ ,.:;\n\t]|$)/g,
      html: '<tt>$1</tt>',
    },
  ];

  convert(dtFlag) {
    fs.readFile(this.mdFile, 'utf8', (err, data) => {
      if (err) {
        throw new Error('Cannot read file');
      }

      checkSyntax(data);

      const formattedText = this.#getPreformatedText(data);
      const html = this.#patterns.reduce((prev, cur) => {
        return prev.replace(cur.regexp, cur.html);
      }, formattedText);

      const paragraphs = this.#getParagraphs(html);
      //const result = this.#setPreformattedText(paragraphs);
      let result;
      if (dtFlag !== -1) {
        result = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${this.#setPreformattedText(paragraphs)}
</body>
</html>`
        this.htmlFile ? fs.writeFileSync(this.htmlFile, result) : console.log(result);
      } else {
        this.htmlFile ? fs.writeFileSync(this.htmlFile, result) : console.log(result);
      }
    });
  }

  #getPreformatedText(text) {
    const preformattedPattern = /```([\s\S]*?)```/g;
    const preformattedText = text.match(preformattedPattern);

    if (!preformattedText) {
      return text;
    }

    this.preformatedText.push(...preformattedText);
    return preformattedText.reduce((prev, cur, curIndex) => {
      return prev.replace(cur, `PRE{{${curIndex}}}PRE`)
    }, text);
  }

  #setPreformattedText(text) {
    return this.preformatedText.reduce((prev, cur, curIndex) => {
      const html = `<pre>${cur.replace(/```/g, '')}</pre>`;
      return prev.replace(`PRE{{${curIndex}}}PRE`, html);
    }, text);
  }

  #getParagraphs(text) {
    return text.split('\n\n').reduce((prev, cur) => {
      return `${prev}\n<p>${cur}</p>`;
    }, '');
  }
}

module.exports = Converter;
