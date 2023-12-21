const express = require('express');
const bodyParser = require('body-parser');
const healthcheckRouter = require('./routes/healthcheck');

const app = express();
app.use(bodyParser.json());

app.use('/api/health', healthcheckRouter);

module.exports = app;