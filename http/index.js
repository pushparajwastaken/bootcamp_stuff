//http server that supports 4 routes
const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.sendFile("C:\Users\Asus\Videos\b\http\index.html");
});
app.get("/sum/:a/:b", function (req, res) {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);
  res.json({
    ans: a + b,
  });
});
app.get("/sub", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a - b,
  });
});
app.get("/mul", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a * b,
  });
});
app.get("/div", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a / b,
  });
});

app.listen(3000);
