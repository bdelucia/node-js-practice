const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = '';
  switch (req.url) {
    case '/':
      filePath = 'index.html';
      break;
    case '/about':
      filePath = 'about.html';
      break;
    case '/contact-me':
      filePath = 'contact-me.html';
      break;
    default:
      filePath = '404.html';
      break;
  }

  const fullPath = path.join(__dirname, filePath);

  fs.readFile(fullPath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('Server Error');
    } else {
      res.writeHead(filePath === '404.html' ? 404 : 200, {
        'Content-Type': 'text/html',
      });
      res.end(content);
    }
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
