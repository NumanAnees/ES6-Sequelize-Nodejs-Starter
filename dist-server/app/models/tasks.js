"use strict";

module.exports = function (sequelize, DataTypes) {
  var Task = sequelize.define("User", {
    name: DataTypes.STRING
  }, {});

  Task.associate = function (models) {// associations can be defined here
  };

  return Task;
};