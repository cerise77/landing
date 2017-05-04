/*const http = require('http');
let router = require('./server/server2');
const hostname = '127.0.0.1';
const port = 3000;
let info = "\nnode-static-http-server by Janus Nic\nExamples of HTTP static file serving in Node.js\nSee: https://github.com/janusnic/web-dev-node\n";

const server = http.createServer(router.handleRequest);
server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
});
console.log(info);*/


//////////////////////////////////////

const Server = require('./server/server4');
//
const hostname = '127.0.0.1';
const port = 5000;
//const info = require('web-dev-node:serve');
let info = "\nnode-static-http-server by cerise77\nExamples of HTTP static file serving in Node.js\nSee: https://github.com/cerise77/plan";
//let info = "\nnode-static-http-server by Janus Nic\nExamples of HTTP static file serving in Node.js\nSee: https://github.com/janusnic/web-dev-node\n";
Server.start(port, hostname, info);
