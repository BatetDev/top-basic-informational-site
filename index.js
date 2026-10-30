const http = require('node:http');
const fs = require('node:fs/promises');

const server = http.createServer(async (req, res) => {
  console.log(req.method, req.url);

  switch (req.url) {
    case '/':
      try {
        const html = await fs.readFile('index.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - internal server error');
      }
      break;

    case '/about':
      try {
        const html = await fs.readFile('about.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('500 - internal server error');
      }
      break;

    case '/contact-me':
      try {
        const html = await fs.readFile('contact-me.html', 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('500 - internal server error');
      }
      break;

    default:
      try {
        const html = await fs.readFile('404.html', 'utf8');
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(html);
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('500 - internal server error');
      }
      break;
  }
});

server.listen(8080, () => {
  console.log('Server running on port 8080');
});
