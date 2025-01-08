// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

// server.listen(8080, () => {
//   console.log('Server running at http://localhost:8080/');
// });

let http = require('http');

let server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});