const {readFileSync, writeFileSync} = require('fs')

const filedata = readFileSync('./content/fs.txt', 'utf8');

console.log(filedata);

writeFileSync(
    './content/new-file.txt',
    `this what was read before: ${filedata}`
);