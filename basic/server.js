'use strict';

require('dotenv').config();

const express = require('express');
const basicAuth = require('basic-auth');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Creat eour application.
const app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// Add Basic authentication to our API.
app.use((req, res, next) => {
  const credentials = basicAuth(req);

  if (!credentials || credentials.name !== process.env.USER || credentials.pass !== process.env.PASS) {
    return res.status(401).json('Access denied');
  }

  next();
});

// Handle the requests.
app.put('/*', (req, res, next) => {
  // This shows all the available data for the POST operation.
  console.log(req.body); // eslint-disable-line no-console
  next();
});

app.post('/*', (req, res, next) => {
  // This shows all the available data for the PUT operation.
  console.log(req.body); // eslint-disable-line no-console
  next();
});

app.delete('/*', (req, res, next) => {
  // This shows all the parameters needed for the deletion.
  console.log(req.query); // eslint-disable-line no-console
  next();
});

module.exports = app;
