'use strict';

const express = require('express');
const moviesRouter = require('./routes/movies-route');
const actorRouter = require('./routes/actors-route');
require('dotenv').config();

const app = express();

const DATABASE_URL = process.env.DATABASE_URL;

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(moviesRouter);
app.use(actorRouter);

const notFoundHandler = require('./error-handlers/404');

app.use('*', notFoundHandler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};