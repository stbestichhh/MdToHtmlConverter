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

Clone a git repository:

```bash
$ git clone https://github.com/stbestichhh/MdToHtmlConverter.git
$ cd MdToHtmlConverter

# Install dependencies with one of this commands:
$ yarn
# or
$ npm i
```

## Usage

Use as a cli command:

```bash
$ yarn convert <Path/to/markdown/file> //Outputs html to console
# or npm run convert ..

# Flags:
--out <Path/to/html/file> //Outputs to file or creates a new one
--dt                      //Adds basic html page structure to the code
```

Use in your code:
```JavaScript
import Converter from './src/converter.js';
or
const Converter = require('./src/converter.js');

const converter = new Converter(mdfilePath, htmlfilePath);
// doctype: -1 or 0
converter.convert(doctype);
```

## Tests

```bash
# Run tests with
$ yarn test
# or
$ npm run test

# Run tests in watch mode
$ yarn test:watch
# or
$ npm run test:watch
```

## Revert commit

[click here](https://github.com/stbestichhh/MdToHtmlConverter/commit/2accdf51205bdd68e40f99c9c722360dc5ca04cf)

## Tests fell commit

[1st case](https://github.com/stbestichhh/MdToHtmlConverter/commit/999f605e0114fb5245bea8552b6e200a4aef0da9)

[2nd case](https://github.com/stbestichhh/MdToHtmlConverter/commit/3015a9dd45f8f85bd1ceebda79c136061cdd66a0)
