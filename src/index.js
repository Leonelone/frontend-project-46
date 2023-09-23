import path from 'path';
import * as fs from 'node:fs';

export default function genDiff(filepath1, filepath2) {
  const filePath1 = path.resolve('../', '__fixtures__/file1.json');
  const filePath2 = path.resolve('../', '__fixtures__/file2.json');

  const data1 = JSON.parse(fs.readFileSync(filePath1, 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(filePath2, 'utf-8'));

  const keys = Array.from(new Set([...Object.keys(data1), ...Object.keys(data2)])).sort();

  const diff = keys.map((key) => {
    if (data1[key] === data2[key]) {
      return `  ${key}: ${data1[key]}`;
    } if (data1[key] === undefined) {
      return `+ ${key}: ${data2[key]}`;
    } if (data2[key] === undefined) {
      return `- ${key}: ${data1[key]}`;
    }
    return `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}`;
  });

  return `{\n${diff.join('\n')}\n}`;
}
