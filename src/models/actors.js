'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('actors', {
    name : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};