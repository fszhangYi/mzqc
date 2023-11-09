#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// editorconfig
const editorConfig = fs.readFileSync(path.join(__dirname, './template/editorConfig'));
fs.writeFileSync('.editorconfig', editorConfig);

// gitignore
const gitignore = fs.readFileSync(path.join(__dirname, './template/gitignore'));
fs.writeFileSync('.gitignore', gitignore);

// release-it
const release = fs.readFileSync(path.join(__dirname, './template/release-it'));
fs.writeFileSync('.release-it.json', release);

// prettier
const prettier = fs.readFileSync(path.join(__dirname, './template/prettier'));
fs.writeFileSync('.prettierrc', prettier);

// npmrc
const npmrc = fs.readFileSync(path.join(__dirname, './template/npmrc'));
fs.writeFileSync('.npmrc', npmrc);

// mock
const mock = fs.readFileSync(path.join(__dirname, './template/mock.js'));
fs.writeFileSync('mock.js', mock);
console.log(chalk.grey('use yarn add mock to install mock dependence'));
console.log(chalk.grey('add import "./mock.js" in entry file'));
