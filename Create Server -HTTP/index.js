const http = require("node:http");
const server = http.createServer(function (req, res) {
  res.end("Mostakin");
});

server.listen(3000);
