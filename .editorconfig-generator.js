#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// editorconfig
const editorConfig = fs.readFileSync(path.join(__dirname, './template/editorConfig'));
fs.writeFileSync('.editorconfig', editorConfig);

// release-it
const release = fs.readFileSync(path.join(__dirname, './template/release-it'));
fs.writeFileSync('.release-it.json', release);

// npmrc
const npmrc = fs.readFileSync(path.join(__dirname, './template/npmrc'));
fs.writeFileSync('.npmrc', npmrc);

// mock
const mock = fs.readFileSync(path.join(__dirname, './template/mock'));
fs.writeFileSync('mock.js', mock);
console.log(chalk.grey('use yarn add mockjs to install mock dependence'));
console.log(chalk.grey('add import "./mock.js" in entry file'));
