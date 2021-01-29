/**
 * Generate the JavaScript code snippet to retrieve the grapheme breaks properties used in Graphemer.
 */
const fs = require('fs');
const path = require('path');
const convertNew = require('./converter-new');

const content = fs.readFileSync(
  path.resolve(__dirname, './GraphemeBreakProperty.txt'),
  {
    encoding: 'utf8',
  },
);

const converted = convertNew(content);
//console.log("size of converted array: " + converted.length);
//console.log(JSON.stringify(converted, null, 2));
console.log(converted);
