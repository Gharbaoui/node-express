const {readFileSync, writeFileSync} = require('fs')

const filedata = readFileSync('./content/fs.txt', 'utf8');

console.log(filedata);