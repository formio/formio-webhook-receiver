var express = require('express');
var basicAuth = require('basic-auth-connect');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Creat eour application.
var app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// Add Basic authentication to our API.
app.use(basicAuth('test', 'password123'));

// Handle the requests.
app.put('/*', function(req, res, next) {
  // This shows all the available data for the POST operation.
  console.log(req.body);
  next();
});

app.post('/*', function(req, res, next) {
  // This shows all the available data for the PUT operation.
  console.log(req.body);
  next();
});

app.delete('/*', function(req, res, next) {
  // This shows all the parameters needed for the deletion.
  console.log(req.query);
  next();
});

console.log('Listening to port 3001');
app.listen(3001);
