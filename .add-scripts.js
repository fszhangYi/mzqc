#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

let _rst = '';

const newPackageJson = {};

try {
    const packageJson = require(path.join(process.cwd(), './package.json'));
    // 读取 package.json 文件
    console.log('packageJson:', packageJson);
    const _tmp = packageJson['scripts'] || {};
    packageJson['scripts'] = {..._tmp, ...{
        "cmt": "node ./cmt.js",
        "update": "git add . && git commit --amend --no-edit && git push origin master -f",    
    }};

    _rst = JSON.stringify({ ...packageJson }, null, 2);
    fs.writeFileSync(path.join(process.cwd(), './package.json'), _rst);
} catch (e) {
    console.log(chalk.grey('change package.json sort failed'));
}

