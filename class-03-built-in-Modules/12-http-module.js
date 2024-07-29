//HTTP modules

const http = require("http");

//creating a sertver with two parameter
// (req) are incoming request from a client and
// (res) that is what we send from the server to the client
const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home </a>`);
  }
});

server.listen(5100);
