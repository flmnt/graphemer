import fs from 'fs';
import test from 'tape';

import Graphemer from '../lib';
import { testDataFromLine } from './utils';

const testData = fs
  .readFileSync('tests/GraphemeBreakTest.txt', 'utf-8')
  .split('\n')
  .filter((line) => line != null && line.length > 0 && !line.startsWith('#'))
  .map((line) => line.split('#')[0])
  .map(testDataFromLine);

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
