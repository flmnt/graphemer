/**
 * Generate the JavaScript code snippet to retrieve the grapheme breaks properties used in Graphemer.
 */
const fs = require('fs');
const path = require('path');
const convertNew = require('./converter');

const content = fs.readFileSync(
  path.resolve(__dirname, './GraphemeBreakProperty.txt'),
  {
    encoding: 'utf8',
  },
);

const converted = convertNew(content);
console.log(converted);
