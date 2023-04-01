const express = require('express');
const bodyParser = require('body-parser');

// Routers
const authRouter = require('./routes/auth.router');
const clienteRouter = require('./routes/clientes.router')

const app = express();

app.use(bodyParser.json());

app.use('/login', authRouter);
app.use('/cliente', clienteRouter);

module.exports = app;
