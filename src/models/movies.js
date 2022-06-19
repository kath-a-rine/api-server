'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('movies', {
    title : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};