const fs = require("fs");
const http = require("http");

var express = require("express");
var app = express();
var path = require("path");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});



app.listen(5000, () => console.log("listening on port 5000"));

fs.readFile("file.txt", "utf8", function(err, data) {
    if (err) throw err;
    console.log(data);
});