const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header content type
  res.setHeader('Contect-Type', 'text/html');

  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write('<p>Hello, dhafin</p>');
  res.write('<p>Hello Again, dhafin</p>');
  res.end();
});

server.listen(3000, 'localhost', () => {
  console.log('Listening for request on port 3000');
});
