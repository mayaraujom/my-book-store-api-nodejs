const express = require('express');
const bodyParser = require('body-parser');

// Routers
const authRouter = require('./routes/auth.router');

const app = express();

app.use(bodyParser.json());

app.use('/login', authRouter);

module.exports = app;
