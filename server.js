// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var api = require('./app/routing/apiRoutes');
var html = require('./app/routing/htmlRoutes');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(api);
app.use(html);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  

