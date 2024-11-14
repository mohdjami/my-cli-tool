#!/usr/bin/env node
import { program } from 'commander';
import inquirer from 'inquirer';

program
  .version('1.0.0')
  .description('My CLI tool')
  .option('-n, --name <type>', 'specify a name')
  .action((options) => {
    console.log(`Hello, ${options.name || 'World'}!`);
  });

program
  .command('greet <name>')
  .description('Greet a user')
  .action((name) => {
    console.log(`Hello, ${name}!`);
  });


inquirer
.prompt([
  { type: 'input', name: 'name', message: 'What is your name?' },
])
.then((answers) => {
  console.log(`Hello, ${answers.name}!`);
});

program.parse(process.argv);

