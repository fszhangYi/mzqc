
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const packageJson = require(path.join(__dirname, './package.json'));

// 读取 package.json 文件
console.log('packageJson:', packageJson);
const recommendedOrder = [
    "name",
    "version",
    "description",
    "keywords",
    "homepage",
    "bugs",
    "license",
    "author",
    "contributors",
    "repository",
    "main",
    "module",
    "browser",
    "bin",
    "scripts",
    "config",
    "husky",
    "lint-staged",
    "files",
    "directories",
    "workspaces",
    "dependencies",
    "devDependencies",
    "peerDependencies",
    "optionalDependencies",
    "engines",
    "os",
    "cpu",
    "private",
    "publishConfig"
];


let _rst = '';

const newPackageJson = {};

try {
    const keys = Object.keys(packageJson);
    recommendedOrder.forEach(key => {
        if (keys.includes(key)) {
            newPackageJson[key] = packageJson[key];
            delete packageJson[key];
        }
    })
    _rst = JSON.stringify({...newPackageJson, ...packageJson}, null, 2);
    fs.writeFileSync(path.join(__dirname, './package.json'), _rst);
} catch (e) {
    console.log(chalk.grey('change package.json sort failed'));
}

