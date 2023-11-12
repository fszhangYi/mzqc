#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');


// gitignore
const gitignore = fs.readFileSync(path.join(__dirname, './template/gitignore'));
fs.writeFileSync('.gitignore', gitignore);

console.log(chalk.grey('.gitignore has been generated'));
