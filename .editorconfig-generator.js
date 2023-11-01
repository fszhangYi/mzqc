#!/usr/bin/env node

const fs = require('fs');

const editorConfig = `# 全局配置
root = true

# 通用配置
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

# JavaScript 配置
[*.js]
indent_size = 4

# Python 配置
[*.py]
indent_size = 4`;

fs.writeFileSync('.editorconfig', editorConfig);

const gitignore = `# dependencies
/node_modules
/npm-debug.log*
/yarn-error.log
package-lock.json

# production
/dist

# misc
.DS_Store

# umi
/src/.umi
/src/.umi-production
/src/.umi-test
/.env.local`;

fs.writeFileSync('.gitignore', gitignore);
