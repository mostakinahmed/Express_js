const express = require("express");
const app = express();

//home route
app.get("/", function (req, res) {
  res.send("kibe sale");
});

//another route
app.get("/profile/:username", function (req, res) {
  res.send(`welcome, ${req.params.username}`);
});

//start server
app.listen(3000, function () {
  console.log("connected....");
});
