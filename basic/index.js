'use strict';

require('dotenv').config();

const app = require('./server');

app.listen(process.env.PORT, () => console.log(`Basic Webhook Receiver running on ${process.env.PORT}`)); // eslint-disable-line no-console
