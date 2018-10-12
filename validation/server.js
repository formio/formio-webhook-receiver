'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// Creat eour application.
const app = express();

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.post('/*', (req, res, next) => {
  // Simple usecase.
  if (req.body.request.data.text === '1') {
    return res.status(400).send('Error 1');
  }

  // Custom error code.
  if (req.body.request.data.text === '2') {
    return res.status(401).send('Error 2');
  }

  // Error message.
  if (req.body.request.data.text === '3') {
    return res.status(400).send({
      message: 'Error 3'
    });
  }

  // No content.
  if (req.body.request.data.text === '4') {
    return res.status(400).end();
  }

  if (req.body.request.data.text === '5') {
    return res.status(400).send({
      details: [
        {
          message: 'Incorrect text value provided',
          path: ['text'],
        },
      ],
      name: 'ValidationError',
    });
  }

  return res.sendStatus(200);
});

module.exports = app;
