#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const sqlite3 = fs.readFileSync(path.join(__dirname, './template/sqlite3'));
fs.writeFileSync('server.js', sqlite3);

console.log(chalk.grey('this is only a sample'));
console.log(chalk.grey('run yarn add sqlite3 to install sqlite'));