/* eslint-enable no-undef */
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
/* global test */
test('success json diff', () => {
  const filename1 = getFixturePath('file1.json');
  const filename2 = getFixturePath('file2.json');
  const expectedJson = '{\n'
    + '- follow: false\n'
    + '  host: hexlet.io\n'
    + '- proxy: 123.234.53.22\n'
    + '- timeout: 50\n'
    + '+ timeout: 20\n'
    + '+ verbose: true\n'
    + '}';
  /* global expect */
  expect(genDiff(filename1, filename2)).toBe(expectedJson);
});
