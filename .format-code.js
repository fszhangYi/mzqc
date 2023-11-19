#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const prettier = require('prettier');

const _tmp = process.argv.slice(2);
console.log(_tmp)

const format = {
    parser: 'babel', // 指定代码的解析器
    semi: true, // 是否使用分号
    singleQuote: true, // 是否使用单引号
    tabWidth: 2, // 缩进宽度
};

try {
    _tmp.forEach(
        async tmp => {
            const abs = path.resolve(process.cwd(), tmp);
            console.log(abs)
            const code = fs.readFileSync(abs, 'utf-8');
            console.log(code)
            const formattedCode = await prettier.format(code, format);
            fs.writeFileSync(abs, formattedCode, 'utf-8');
        }
    )
} catch (e) {
    console.log(chalk.grey('format files failed!'));
}
