var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/components/Main.js");
});

app.get("/api/swapi/:kind", function (req, res) {
  request(`https://swapi.dev/api/${req.params.kind}`, function (
    error,
    response,
    body
  ) {
    res.send(body);
  });
});

var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
