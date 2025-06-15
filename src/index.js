#!/usr/bin/env node
import { program } from 'commander';
import { setupCommands } from './commands/index.js';

program
  .name('grana')
  .description('Grana CLI - command line financial manager')
  .version('0.1.0');

setupCommands(program);

program.parseAsync(process.argv);
