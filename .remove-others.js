#!/usr/bin/env node
const path = require('path');
const shelljs = require('shelljs');
const chalk = require('chalk');

const cmd = `find src/ -type f ! -name 'index*' ! -name 'App*' -exec rm -f {} +`;

try {
    shelljs.exec(cmd);
} catch (e) {
    console.log(chalk.grey('remove files failed!'));
}


