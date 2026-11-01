const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const serveFile = (filename, res, statusCode = 200) => {
  const filePath = path.join(__dirname, `${filename}.html`);
  res.status(statusCode).sendFile(filePath);
};

app.get('/', (req, res) => serveFile('index', res));
app.get('/about', (req, res) => serveFile('about', res));
app.get('/contact-me', (req, res) => serveFile('contact-me', res));
app.use((req, res) => serveFile('404', res, 404));

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server running on port ${PORT}`);
});
