// create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const qs = require('querystring');
const comments = [];

// create web server
http.createServer((req, res) => {
  // parse url and get pathname
  const pathname = url.parse(req.url).pathname;
  if (pathname === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err);
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (pathname === '/comment') {
    // get comment
    let comment = '';
    req.on('data', (chunk) => {
      comment += chunk;
    });
    req.on('end', () => {
      comment = qs.parse(comment).comment;
      comments.push(comment);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('comment is saved');
    });
  } else if (pathname === '/getComments') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(comments.join());
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
}).listen(3000, () => {
  console.log('Server is running at http://