import fs from 'fs';
import path from 'path';
import getDiffs from './diffs.js';

const renderTree = (elements) => {
  const strElements = elements.flat().reduce((acc, { status, key, value }) => {
    acc.push(`  ${status} ${key}: ${value}`);
    return acc;
  }, ['{']);
  strElements.push('}');
  return strElements.join('\n');
};

const getDataFile = (filepath) => {
  const normalPath = path.resolve(process.cwd(), filepath);
  const data = JSON.parse(fs.readFileSync(normalPath, 'utf8'));
  return data;
};

const genDiff = (filepath1, filepath2) => {
  const data1 = getDataFile(filepath1);
  const data2 = getDataFile(filepath2);
  const result = getDiffs(data1, data2);
  return renderTree(result);
};

export default genDiff;
