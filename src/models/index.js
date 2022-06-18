'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const modelInterface = require('./modelInterface')
const movieSchema = require('./movies');
const actorSchema = require('./actors');
require('dotenv').config();

const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/api-server';

// const sequelize = new Sequelize(DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });   

const sequelize = new Sequelize(DATABASE_URL);

const MovieModel = movieSchema(sequelize, DataTypes);
const ActorModel = actorSchema(sequelize, DataTypes);

MovieModel.hasMany(ActorModel, {foreignKey: 'movieId', sourceKey: 'id'});
ActorModel.belongsTo(MovieModel, {foreignKey: 'movieId', targetKey: 'id' });


module.exports = {
  sequelize,
  actorInterface: new modelInterface(ActorModel),
  movieInterface: new modelInterface(MovieModel),
};