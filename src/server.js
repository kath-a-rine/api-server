'use strict';

const express = require('express');
const moviesRouter = require('./routes/movies-route');
const actorRouter = require('./routes/actors-route');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(moviesRouter);
app.use(actorRouter);

const serverErrorHandler = require('./error-handlers/500');
const notFoundHandler = require('./error-handlers/404');

app.use('*', notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};