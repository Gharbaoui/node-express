const http = require('http');
const {readFileSync, read} = require('fs');

const homePage = readFileSync('./navbar-app/index.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/html"
    });

    res.write(homePage);
    res.end();
});

server.listen(2000);