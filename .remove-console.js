#!/usr/bin/env node
const path = require('path');
const shelljs = require('shelljs');
const chalk = require('chalk');

const _tmp = process.argv.slice(2);

try {
    _tmp.forEach(
        tmp => {
            const abs = path.resolve(process.cwd(), tmp);
            shelljs.exec(`sed -i 's@^console.*$@@g' ${abs}`);
        }
    )
} catch (e) {
    console.log(chalk.grey('remove logs failed!'));
}
