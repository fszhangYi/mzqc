#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const tsconfig = fs.readFileSync(path.join(__dirname, './template/tsconfig'));
fs.writeFileSync('tsconfig.json', tsconfig);
const typings = fs.readFileSync(path.join(__dirname, './template/typings'));
fs.writeFileSync('typings.d.ts', typings);
console.log(chalk.grey('use yarn add typescript to install dependence'));