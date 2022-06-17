'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const movieModel = require('./movies');
const actorModel = require('./actors');
require('dotenv').config();

const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/basic-api-server';

// const sequelize = new Sequelize(DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });   

const sequelize = new Sequelize(DATABASE_URL);

const MovieModel = movieModel(sequelize, DataTypes);
const ActorModel = actorModel(sequelize, DataTypes);



module.exports = {
  sequelize,
  MovieModel,
  ActorModel,
};