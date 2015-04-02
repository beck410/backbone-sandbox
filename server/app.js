//require express.js as dependency

var express = require('express');
var logger = require('morgan');

//helper to resolve relative paths

var path = require('path');

//initialize application

var app = express();
app.use(logger({ immediate: true, format: 'dev'}));

//add basic route that serves an index.html 

app.get('/', function(req,res){
  var html = path.resolve(__dirname + '/../static/index.html');
  res.sendfile(html);
});

//listen on port 5000 

app.listen(5000);
console.log("Server is running");
