let http = require('http');
let fs = require('fs');
let path = require('path')

let headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

http.createServer((req, res) => {
  fs.readFile(path.resolve(__dirname, '../client/static/index.html'), 'utf8', (err, data) => {
    if (err) console.log(err);
    res.writeHead(200, headers);
    res.write(data);
    res.end();
  });
})
.listen(1337, '127.0.0.1', ()=> {
  console.log('====================================');
  console.log('server is listening on port 1337');
  console.log('====================================');
});