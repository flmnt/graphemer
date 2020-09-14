const fs = require('fs');
const test = require('tape');

const Graphemer = require('..').default;

function ucs2encode(array) {
  return array
    .map((value) => {
      let output = '';

      if (value > 0xffff) {
        value -= 0x10000;
        output += String.fromCharCode(((value >>> 10) & 0x3ff) | 0xd800);
        value = 0xdc00 | (value & 0x3ff);
      }

      output += String.fromCharCode(value);
      return output;
    })
    .join('');
}

function testDataFromLine(line) {
  const codePoints = line.split(/\s*[×÷]\s*/).map((c) => parseInt(c, 16));
  const input = ucs2encode(codePoints);

  const expected = line.split(/\s*÷\s*/).map((sequence) => {
    const codePoints = sequence.split(/\s*×\s*/).map((c) => parseInt(c, 16));
    return ucs2encode(codePoints);
  });

  return { input, expected };
}

const testData = fs
  .readFileSync('tests/GraphemeBreakTest.txt', 'utf-8')
  .split('\n')
  .filter((line) => line != null && line.length > 0 && !line.startsWith('#'))
  .map((line) => line.split('#')[0])
  .map(testDataFromLine);

// ---------------------------------------------------------------------------
// Test cases
// ---------------------------------------------------------------------------
test('splitGraphemes returns properly split list from string', (t) => {
  const splitter = new Graphemer();

  t.plan(testData.length);

  testData.forEach(({ input, expected }) => {
    const result = splitter.splitGraphemes(input);

    t.deepLooseEqual(result, expected);
  });

  t.end();
});

test('iterateGraphemes returns properly split iterator from string', (t) => {
  const splitter = new Graphemer();

  t.plan(testData.length);

  testData.forEach(({ input, expected }) => {
    const result = splitter.iterateGraphemes(input);

    t.deepLooseEqual([...result], expected);
  });

  t.end();
});

test('countGraphemes returns the correct number of graphemes in string', (t) => {
  const splitter = new Graphemer();

  t.plan(testData.length);

  testData.forEach(({ input, expected }) => {
    const result = splitter.countGraphemes(input);

    t.equal(result, expected.length);
  });

  t.end();
});
