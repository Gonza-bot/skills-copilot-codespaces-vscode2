// Create a web server
// Create a web server that listens on port 3000 and serves a file comments.html

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('comments.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000);
console.log('Server running at http://localhost:3000/');
// When you run the code above and visit http://localhost:3000/, you should see the content of comments.html in the browser.

// Path: comments.js
// Create a web server
// Create a web server that listens on port 3000 and serves a file comments.html

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('comments.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000);
console.log('Server running at http://localhost:3000/');
// When you run the code above and visit http://localhost:3000/, you should see the content of comments.html in the browser.

// Path: comments.js
// Create a web server
// Create a web server that listens on port 3000 and serves a file comments.html

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('comments.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000);
console.log('Server running at http://localhost:3000/');
// When you run the code above and visit http://localhost:3000/, you should see the content of comments.html in the browser.

// Path: comments.js
// Create a web server
// Create a web server that listens on port 3000 and serves a file comments.html

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('comments.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000);