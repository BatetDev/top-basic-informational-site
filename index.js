const http = require('node:http');
const fs = require('node:fs/promises');

async function serveFile(res, filename, statusCode = 200) {
  try {
    const html = await fs.readFile(filename, 'utf8');
    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.end(html);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 - internal server error');
  }
}

const server = http.createServer(async (req, res) => {
  console.log(req.method, req.url);

  switch (req.url) {
    case '/':
      await serveFile(res, 'index.html');
      break;
    case '/about':
      await serveFile(res, 'about.html');
      break;
    case '/contact-me':
      await serveFile(res, 'contact-me.html');
      break;
    default:
      await serveFile(res, '404.html', 404);
  }
});

server.listen(8080, () => {
  console.log('Server running on port 8080');
});
