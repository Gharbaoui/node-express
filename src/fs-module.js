const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')

const filedata = readFileSync('./content/fs.txt', 'utf8');

console.log(filedata);

writeFileSync(
    './content/new-file-sync.txt',
    `this what was read before: ${filedata}`
);

// read, write async

readFile('./content/fs.txt', (err, fileData) => {
    if (err)
    {
        console.log(err);
        return ;
    }
    console.log(`data is ready: ${fileData}`);
    writeFile('./content/new-file-async.txt', `result of async write ${fileData}`, (err, res) => {});
});
