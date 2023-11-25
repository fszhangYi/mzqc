#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const nginx = fs.readFileSync(path.join(__dirname, './template/nginx'));
fs.writeFileSync('nginx.conf', nginx);

console.log(chalk.grey('this is only a sample'));