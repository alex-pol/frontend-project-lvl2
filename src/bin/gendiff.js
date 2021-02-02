#!/usr/bin/env node
import program from 'commander';
import genDiff from '../index.js';

program
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference', {
    filepath1: 'file\'s path before it\'s changing',
    filepath2: 'file\'s path after it\'s changing',
  })
  .option('-f, --format <type>', 'output format', 'tree')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2, program.format));
  })
  .parse(program.args);

export default genDiff;