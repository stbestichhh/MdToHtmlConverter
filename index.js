const Converter = require('./src/converter');

if (process.argv.length < 3) {
  console.error('Usage: node index.js <inputMdFilePath> [--dt] [--out <outputHtmlFilePath>] [--format=(formatted | html)]');
  process.exit(1);
}

const mdfilePath = process.argv[2];
const htmlfileKey = process.argv.indexOf('--out');
const htmlfilePath = htmlfileKey !== -1 ? process.argv[htmlfileKey + 1] : null;
const docTypeFlag = process.argv.indexOf('--dt');
const formatIndex = process.argv.findIndex(arg => arg.startsWith('--format='));
let format = undefined;

if (formatIndex !== -1) {
  const formatArgv = process.argv[formatIndex];
  const formatValueMatch = formatArgv.match(/--format=(\w+)/)
  if (formatValueMatch) {
    format = formatValueMatch[1];
    if (format !== 'formatted' && format !== 'html') {
      console.error('Invalid format value. Use `formatted` or `html`.');
      process.exit(1);
    }
  } else {
    console.error('No format. Use [--format=(formatted | html)]');
    process.exit(1);
  }
}

const converter = new Converter(mdfilePath, htmlfilePath);
converter.convert(docTypeFlag, format);
