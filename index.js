const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT;
// const hostname = 'localhost';
console.log(__dirname);
const home = fs.readFileSync('./index.html', 'utf-8');

const server = http.createServer((req, res) => {
  //  console.log(req.url);

  if (req.url === '/about') {
    return res.end('<h1>About page</h1>');
  }

  if (req.url === '/contact') {
    return res.end('<h1>contact us</h1>');
  }

  if (req.url === '/products') {
    return res.end('<h1>products list</h1>');
  }

  if (req.url === '/about') {
    return res.end('<h1>About page</h1>');
  }

  if (req.url === '/') {
    return res.end(home);
  } else {
    return res.end('<h1>404 page not found</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`server started`);
});
