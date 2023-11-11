#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const serve = fs.readFileSync(path.join(__dirname, './template/umi-serve'));
fs.writeFileSync('umis.js', serve);

console.log(chalk.grey('use node umis.js to start this serve'));