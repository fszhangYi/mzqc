const shell = require('shelljs');
const result = shell.exec('git add . && git commit -m "add one new feature" && git push origin master');
console.log(result.stdout);
