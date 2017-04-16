var express = require("express");
var app = express();
var converter = require("./converter");

var port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/:input", function (req, res) {
    res.json(converter(req.params.input));
});
    

app.listen(port);

