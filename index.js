'use strict';

const { sequelize } = require('./src/models');
const server = require('./src/server');

sequelize.sync()
  .then(() => {
    console.log('Successful connection');
  })
  .catch(err => console.error(err));

server.start();