#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const serve = fs.readFileSync(path.join(__dirname, './template/serve'));
fs.writeFileSync('serve.js', serve);

console.log(chalk.grey('use node serve.js to start this serve'));