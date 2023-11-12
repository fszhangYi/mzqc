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
