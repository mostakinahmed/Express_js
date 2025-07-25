const express = require("express");
const app = express();

//middleware
app.use(function (req, res, next) {
  console.log("middleWare worked.");
  next();
});

app.get("/", function (req, res) {
  res.send(` <h1>HOME: Profile</h1>
    <p><strong>Name:</strong> Mostakin</p>
    <p><strong>ID:</strong> 242-35-831</p>
    <p><strong>Department:</strong> Software Engineering</p>
    <p><strong>University:</strong> Daffodil International University</p>`);
});

app.listen(3000, function () {
  console.log("server running.........");
});
