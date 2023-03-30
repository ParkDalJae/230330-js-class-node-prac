const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // HTML 응답
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><body><h1>Hello, World!</h1></body></html>');
    res.end();
  } else if (req.url === '/data') {
    // JSON 응답
    res.setHeader('Content-Type', 'application/json');
    const data = { message: 'Hello, World!' };
    res.write(JSON.stringify(data));
    res.end();
  } else if (req.url === '/image') {
    // 이미지 응답
    fs.readFile('shia-la-beouf-just-do-it.gif', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.setHeader('Content-Type', 'image/gif');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
