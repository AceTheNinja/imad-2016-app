var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('css/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('js/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('css/animate.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'animate.css'));
});
app.get('css/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css'));
});
app.get('js/modernizr-2.8.3-respond-1.4.2.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'modernizr-2.8.3-respond-1.4.2.min.js'));
});
app.get('js/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.js'));
});
app.get('js/jquery-1.11.2.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery-1.11.2.min.js'));
});
app.get('js/typed.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'typed.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {

});
