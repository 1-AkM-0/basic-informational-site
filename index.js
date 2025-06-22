const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer(function (req, res) {
    let filePath = "";

    if (req.url === "/") {
      filePath = "./index.html";
    } else if (req.url === "/about") {
      filePath = "./about.html";
    } else if (req.url === "/contact-me") {
      filePath = "./contact-me.html";
    } else {
      filePath = "./404.html";
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end("Erro interno no servidor");
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(content);
      }
    });
  })
  .listen(8080);
