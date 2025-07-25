const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("welcome mostakin");
});

app.listen(3000, function () {
  console.log("server running.....");
});
