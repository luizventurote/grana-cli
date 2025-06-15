#!/usr/bin/env node
import { program } from 'commander';
import { setupCommands } from './view/terminal/index.js';
import { initCliUI } from './view/terminal/ui.js';

program
  .name('grana')
  .description('Grana CLI - command line financial manager')
  .version('0.1.0');

setupCommands(program);

await initCliUI();

program.parseAsync(process.argv);
