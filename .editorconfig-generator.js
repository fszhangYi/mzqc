#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

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
fs.writeFileSync('..prettierrc', prettier);
