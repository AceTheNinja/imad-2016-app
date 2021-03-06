var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/animate.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'animate.css'));
});
app.get('/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css'));
});
app.get('/modernizr-2.8.3-respond-1.4.2.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'modernizr-2.8.3-respond-1.4.2.min.js'));
});
app.get('/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.js'));
});
app.get('/jquery-1.11.2.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery-1.11.2.min.js'));
});
app.get('/typed.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'typed.js'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {

});
