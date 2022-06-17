'use strict';

const { sequelize, MovieModel, ActorModel } = require('./src/models');
const server = require('./src/server');

// const { Sequelize, DataTypes } = require('sequelize');

// const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/basic-api-server';

// const sequelize = new Sequelize(DATABASE_URL);

sequelize.sync()
  .then(() => {
    console.log('Successful connection');
  })
  .catch(err => console.error(err));

server.start();