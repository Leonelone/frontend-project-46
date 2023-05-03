#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .version('1.0.1')
  .description('Compares two configuration files and shows a difference.');

program.parse();
