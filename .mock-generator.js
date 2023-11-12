#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// mock
const mock = fs.readFileSync(path.join(__dirname, './template/mock'));
fs.writeFileSync('mock.js', mock);
console.log(chalk.grey('use yarn add mockjs to install mock dependence'));
console.log(chalk.grey('add import "./mock.js" in entry file'));
