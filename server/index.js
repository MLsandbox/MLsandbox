let http = require('http');
let router = require('./routes/routes.js');

let server = http.createServer(router.handleRequest);

let port = 1337;
let ip = '127.0.0.1';

server.listen(port, ip, ()=> {
  console.log('====================================');
  console.log("Listening on http://" + ip + ":" + port);
  console.log('====================================');
}); 