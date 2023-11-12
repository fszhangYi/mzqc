#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');


// prettier
const prettier = fs.readFileSync(path.join(__dirname, './template/prettier'));
fs.writeFileSync('.prettierrc', prettier);
const prettierIgnore = fs.readFileSync(path.join(__dirname, './template/prettierignore'));
fs.writeFileSync('.prettierignore', prettierIgnore);

console.log(chalk.grey('.prettierrc has been generated'));
