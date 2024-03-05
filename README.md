[![Node.js CI](https://github.com/stbestichhh/Flowly-backend/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/stbestichhh/Flowly-backend/actions/workflows/node.js.yml)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# Tech Stack
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

# Markdown to HTML converter
This is a command line interface application for converting markdown syntax to html.

## Installation


> [!IMPORTANT]
> NodeJS 18.x+ has to be installed in your os.

Install MdToHtmlConverter with npm:

```bash
npm install mdtohtmlconverter
```

or clone a git repository:

```bash
git clone https://github.com/stbestichhh/MdToHtmlConverter.git
cd MdToHtmlConverter
```

## Usage

Use as a cli command:

```bash
node index.js <Path/to/markdown/file> //Outputs html to console
node index.js <Path/to/markdown/file> --out <Path/to/html/file> //Outputs to file or creates a new one
```

Use in your code:
```JavaScript
export Converter = from './converter.js';
or
const Converter = require('./converter.js');

const converter = new Converter(mdfilePath, htmlfilePath);
converter.convert();
```

Use in your code, installed as npm package:

```JavaScript
export Converter = from 'mdtohtmlconverter';
or
const Converter = require(mdtohtmlconverter);

const converter = new Converter(mdfilePath, htmlfilePath);
converter.convert();
```

## Authors

- [@stbestichhh](https://www.github.com/stbestichhh)

## Revert commit

[click here](https://github.com/stbestichhh/MdToHtmlConverter/commit/2accdf51205bdd68e40f99c9c722360dc5ca04cf)
