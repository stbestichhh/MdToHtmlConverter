const Converter = require('./converter.js');

if (process.argv.length < 3) {
  console.error('Usage: node index.js <inputMdFilePath> [--out <outputHtmlFilePath>]');
  process.exit(1);
}

const mdfilePath = process.argv[2];
const htmlfileKey = process.argv.indexOf('--out');
const htmlfilePath = htmlfileKey !== -1 ? process.argv[htmlfileKey + 1] : null;

const converter = new Converter(mdfilePath, htmlfilePath);
converter.convert();
