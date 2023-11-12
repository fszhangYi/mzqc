#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');


// npmrc
const npmrc = fs.readFileSync(path.join(__dirname, './template/npmrc'));
fs.writeFileSync('.npmrc', npmrc);

console.log(chalk.grey('.npmrc has been generated'));
