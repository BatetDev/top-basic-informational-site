const http = require('node:http');
const fs = require('node:fs/promises');

const server = http.createServer(async (req, res) => {
  console.log(req.method, req.url);

  switch (req.url) {
    case '/': {
      let html;
      try {
        html = await fs.readFile('index.html', 'utf8');
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - internal server error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
      break;
    }

    case '/about': {
      let html;
      try {
        html = await fs.readFile('about.html', 'utf8');
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - internal server error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
      break;
    }

    case '/contact-me': {
      let html;
      try {
        html = await fs.readFile('contact-me.html', 'utf8');
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - internal server error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
      break;
    }

    default: {
      let html;
      try {
        html = await fs.readFile('404.html', 'utf8');
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - internal server error');
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(html);
    }
  }
});

server.listen(8080, () => {
  console.log('Server running on port 8080');
});
