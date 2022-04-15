const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

console.log("Server opening...");

const server = http.createServer(requestListener);
server.listen(8080);

console.log("Server open!");